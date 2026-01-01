import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateWorkflowDto } from './dto/create-workflow.dto';
import { UpdateWorkflowDto } from './dto/update-workflow.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { WorkflowStatus } from '@prisma/client';

@Injectable()
export class WorkflowService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateWorkflowDto) {
    // 1. Check if the Appointment is already linked to another workflow
    const existingWorkflow = await this.prisma.workflow.findUnique({
      where: { rendez_vous_id: dto.rendez_vous_id },
    });

    if (existingWorkflow) {
      throw new BadRequestException(
        'This appointment is already assigned to a workflow.',
      );
    }

    // 2. Determine Status automatically
    const status = dto.facture_id
      ? WorkflowStatus.COMPLETED
      : WorkflowStatus.IN_PROGRESS;

    // 3. Create
    return this.prisma.workflow.create({
      data: {
        client_CIN: dto.client_CIN,
        rendez_vous_id: dto.rendez_vous_id,
        facture_id: dto.facture_id || null,
        Cree_par: dto.Cree_par,
        status: status,
      },
      include: {
        client: true,
        rendez_vous: true,
        facture: true,
      },
    });
  }

  async findAll() {
    return this.prisma.workflow.findMany({
      select: {
        id: true,
        client_CIN: true, // <--- Just the ID
        rendez_vous_id: true, // <--- Just the ID
        facture_id: true, // <--- Just the ID (nullable)
        status: true,
        created_at: true,
        updated_at: true,
        Cree_par: true,
      },
      orderBy: { created_at: 'desc' },
    });
  }

  async findOne(id: number) {
    const workflow = await this.prisma.workflow.findUnique({
      where: { id },
      include: {
        client: true,
        rendez_vous: true,
        facture: true,
      },
    });

    if (!workflow) throw new NotFoundException(`Workflow #${id} not found`);
    return workflow;
  }

  async update(id: number, dto: UpdateWorkflowDto) {
    // 1. Get current workflow to check existence
    const current = await this.prisma.workflow.findUnique({ where: { id } });
    if (!current) throw new NotFoundException(`Workflow #${id} not found`);

    // 2. Calculate new status
    // If we are adding a facture ID, or if one already exists and we aren't removing it
    const hasFacture =
      dto.facture_id !== undefined ? dto.facture_id : current.facture_id;
    const newStatus = hasFacture
      ? WorkflowStatus.COMPLETED
      : WorkflowStatus.IN_PROGRESS;

    return this.prisma.workflow.update({
      where: { id },
      data: {
        facture_id: dto.facture_id,
        status: newStatus,
      },
      include: {
        facture: true,
      },
    });
  }

  async remove(id: number) {
    return this.prisma.workflow.delete({
      where: { id },
    });
  }
}
