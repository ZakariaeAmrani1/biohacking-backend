
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Utilisateur
 * 
 */
export type Utilisateur = $Result.DefaultSelection<Prisma.$UtilisateurPayload>
/**
 * Model Entreprise
 * 
 */
export type Entreprise = $Result.DefaultSelection<Prisma.$EntreprisePayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model rendez_vous
 * 
 */
export type rendez_vous = $Result.DefaultSelection<Prisma.$rendez_vousPayload>
/**
 * Model document_templates
 * 
 */
export type document_templates = $Result.DefaultSelection<Prisma.$document_templatesPayload>
/**
 * Model document
 * 
 */
export type document = $Result.DefaultSelection<Prisma.$documentPayload>
/**
 * Model bien
 * 
 */
export type bien = $Result.DefaultSelection<Prisma.$bienPayload>
/**
 * Model facture
 * 
 */
export type facture = $Result.DefaultSelection<Prisma.$facturePayload>
/**
 * Model facture_bien
 * 
 */
export type facture_bien = $Result.DefaultSelection<Prisma.$facture_bienPayload>
/**
 * Model paiment
 * 
 */
export type paiment = $Result.DefaultSelection<Prisma.$paimentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  USER: 'USER',
  OTHER: 'OTHER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const ServiceType: {
  TYPE1: 'TYPE1',
  TYPE2: 'TYPE2'
};

export type ServiceType = (typeof ServiceType)[keyof typeof ServiceType]


export const FactureStatus: {
  PAYEE: 'PAYEE',
  NON_PAYEE: 'NON_PAYEE',
  EN_ATTENTE: 'EN_ATTENTE'
};

export type FactureStatus = (typeof FactureStatus)[keyof typeof FactureStatus]


export const BienType: {
  SERVICE: 'SERVICE',
  PRODUIT: 'PRODUIT'
};

export type BienType = (typeof BienType)[keyof typeof BienType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type ServiceType = $Enums.ServiceType

export const ServiceType: typeof $Enums.ServiceType

export type FactureStatus = $Enums.FactureStatus

export const FactureStatus: typeof $Enums.FactureStatus

export type BienType = $Enums.BienType

export const BienType: typeof $Enums.BienType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Utilisateurs
 * const utilisateurs = await prisma.utilisateur.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Utilisateurs
   * const utilisateurs = await prisma.utilisateur.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.utilisateur`: Exposes CRUD operations for the **Utilisateur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Utilisateurs
    * const utilisateurs = await prisma.utilisateur.findMany()
    * ```
    */
  get utilisateur(): Prisma.UtilisateurDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.entreprise`: Exposes CRUD operations for the **Entreprise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entreprises
    * const entreprises = await prisma.entreprise.findMany()
    * ```
    */
  get entreprise(): Prisma.EntrepriseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rendez_vous`: Exposes CRUD operations for the **rendez_vous** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rendez_vous
    * const rendez_vous = await prisma.rendez_vous.findMany()
    * ```
    */
  get rendez_vous(): Prisma.rendez_vousDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document_templates`: Exposes CRUD operations for the **document_templates** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Document_templates
    * const document_templates = await prisma.document_templates.findMany()
    * ```
    */
  get document_templates(): Prisma.document_templatesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.documentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bien`: Exposes CRUD operations for the **bien** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Biens
    * const biens = await prisma.bien.findMany()
    * ```
    */
  get bien(): Prisma.bienDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.facture`: Exposes CRUD operations for the **facture** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Factures
    * const factures = await prisma.facture.findMany()
    * ```
    */
  get facture(): Prisma.factureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.facture_bien`: Exposes CRUD operations for the **facture_bien** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Facture_biens
    * const facture_biens = await prisma.facture_bien.findMany()
    * ```
    */
  get facture_bien(): Prisma.facture_bienDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paiment`: Exposes CRUD operations for the **paiment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Paiments
    * const paiments = await prisma.paiment.findMany()
    * ```
    */
  get paiment(): Prisma.paimentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Utilisateur: 'Utilisateur',
    Entreprise: 'Entreprise',
    Client: 'Client',
    rendez_vous: 'rendez_vous',
    document_templates: 'document_templates',
    document: 'document',
    bien: 'bien',
    facture: 'facture',
    facture_bien: 'facture_bien',
    paiment: 'paiment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "utilisateur" | "entreprise" | "client" | "rendez_vous" | "document_templates" | "document" | "bien" | "facture" | "facture_bien" | "paiment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Utilisateur: {
        payload: Prisma.$UtilisateurPayload<ExtArgs>
        fields: Prisma.UtilisateurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UtilisateurFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UtilisateurFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          findFirst: {
            args: Prisma.UtilisateurFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UtilisateurFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          findMany: {
            args: Prisma.UtilisateurFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          create: {
            args: Prisma.UtilisateurCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          createMany: {
            args: Prisma.UtilisateurCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UtilisateurCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          delete: {
            args: Prisma.UtilisateurDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          update: {
            args: Prisma.UtilisateurUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          deleteMany: {
            args: Prisma.UtilisateurDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UtilisateurUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UtilisateurUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          upsert: {
            args: Prisma.UtilisateurUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          aggregate: {
            args: Prisma.UtilisateurAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUtilisateur>
          }
          groupBy: {
            args: Prisma.UtilisateurGroupByArgs<ExtArgs>
            result: $Utils.Optional<UtilisateurGroupByOutputType>[]
          }
          count: {
            args: Prisma.UtilisateurCountArgs<ExtArgs>
            result: $Utils.Optional<UtilisateurCountAggregateOutputType> | number
          }
        }
      }
      Entreprise: {
        payload: Prisma.$EntreprisePayload<ExtArgs>
        fields: Prisma.EntrepriseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EntrepriseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EntrepriseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>
          }
          findFirst: {
            args: Prisma.EntrepriseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EntrepriseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>
          }
          findMany: {
            args: Prisma.EntrepriseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>[]
          }
          create: {
            args: Prisma.EntrepriseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>
          }
          createMany: {
            args: Prisma.EntrepriseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EntrepriseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>[]
          }
          delete: {
            args: Prisma.EntrepriseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>
          }
          update: {
            args: Prisma.EntrepriseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>
          }
          deleteMany: {
            args: Prisma.EntrepriseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EntrepriseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EntrepriseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>[]
          }
          upsert: {
            args: Prisma.EntrepriseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>
          }
          aggregate: {
            args: Prisma.EntrepriseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntreprise>
          }
          groupBy: {
            args: Prisma.EntrepriseGroupByArgs<ExtArgs>
            result: $Utils.Optional<EntrepriseGroupByOutputType>[]
          }
          count: {
            args: Prisma.EntrepriseCountArgs<ExtArgs>
            result: $Utils.Optional<EntrepriseCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      rendez_vous: {
        payload: Prisma.$rendez_vousPayload<ExtArgs>
        fields: Prisma.rendez_vousFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rendez_vousFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rendez_vousPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rendez_vousFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rendez_vousPayload>
          }
          findFirst: {
            args: Prisma.rendez_vousFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rendez_vousPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rendez_vousFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rendez_vousPayload>
          }
          findMany: {
            args: Prisma.rendez_vousFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rendez_vousPayload>[]
          }
          create: {
            args: Prisma.rendez_vousCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rendez_vousPayload>
          }
          createMany: {
            args: Prisma.rendez_vousCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.rendez_vousCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rendez_vousPayload>[]
          }
          delete: {
            args: Prisma.rendez_vousDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rendez_vousPayload>
          }
          update: {
            args: Prisma.rendez_vousUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rendez_vousPayload>
          }
          deleteMany: {
            args: Prisma.rendez_vousDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rendez_vousUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.rendez_vousUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rendez_vousPayload>[]
          }
          upsert: {
            args: Prisma.rendez_vousUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rendez_vousPayload>
          }
          aggregate: {
            args: Prisma.Rendez_vousAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRendez_vous>
          }
          groupBy: {
            args: Prisma.rendez_vousGroupByArgs<ExtArgs>
            result: $Utils.Optional<Rendez_vousGroupByOutputType>[]
          }
          count: {
            args: Prisma.rendez_vousCountArgs<ExtArgs>
            result: $Utils.Optional<Rendez_vousCountAggregateOutputType> | number
          }
        }
      }
      document_templates: {
        payload: Prisma.$document_templatesPayload<ExtArgs>
        fields: Prisma.document_templatesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.document_templatesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_templatesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.document_templatesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_templatesPayload>
          }
          findFirst: {
            args: Prisma.document_templatesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_templatesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.document_templatesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_templatesPayload>
          }
          findMany: {
            args: Prisma.document_templatesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_templatesPayload>[]
          }
          create: {
            args: Prisma.document_templatesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_templatesPayload>
          }
          createMany: {
            args: Prisma.document_templatesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.document_templatesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_templatesPayload>[]
          }
          delete: {
            args: Prisma.document_templatesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_templatesPayload>
          }
          update: {
            args: Prisma.document_templatesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_templatesPayload>
          }
          deleteMany: {
            args: Prisma.document_templatesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.document_templatesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.document_templatesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_templatesPayload>[]
          }
          upsert: {
            args: Prisma.document_templatesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_templatesPayload>
          }
          aggregate: {
            args: Prisma.Document_templatesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument_templates>
          }
          groupBy: {
            args: Prisma.document_templatesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Document_templatesGroupByOutputType>[]
          }
          count: {
            args: Prisma.document_templatesCountArgs<ExtArgs>
            result: $Utils.Optional<Document_templatesCountAggregateOutputType> | number
          }
        }
      }
      document: {
        payload: Prisma.$documentPayload<ExtArgs>
        fields: Prisma.documentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.documentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.documentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentPayload>
          }
          findFirst: {
            args: Prisma.documentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.documentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentPayload>
          }
          findMany: {
            args: Prisma.documentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentPayload>[]
          }
          create: {
            args: Prisma.documentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentPayload>
          }
          createMany: {
            args: Prisma.documentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.documentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentPayload>[]
          }
          delete: {
            args: Prisma.documentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentPayload>
          }
          update: {
            args: Prisma.documentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentPayload>
          }
          deleteMany: {
            args: Prisma.documentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.documentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.documentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentPayload>[]
          }
          upsert: {
            args: Prisma.documentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$documentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.documentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.documentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
      bien: {
        payload: Prisma.$bienPayload<ExtArgs>
        fields: Prisma.bienFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bienFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bienPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bienFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bienPayload>
          }
          findFirst: {
            args: Prisma.bienFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bienPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bienFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bienPayload>
          }
          findMany: {
            args: Prisma.bienFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bienPayload>[]
          }
          create: {
            args: Prisma.bienCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bienPayload>
          }
          createMany: {
            args: Prisma.bienCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.bienCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bienPayload>[]
          }
          delete: {
            args: Prisma.bienDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bienPayload>
          }
          update: {
            args: Prisma.bienUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bienPayload>
          }
          deleteMany: {
            args: Prisma.bienDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bienUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.bienUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bienPayload>[]
          }
          upsert: {
            args: Prisma.bienUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bienPayload>
          }
          aggregate: {
            args: Prisma.BienAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBien>
          }
          groupBy: {
            args: Prisma.bienGroupByArgs<ExtArgs>
            result: $Utils.Optional<BienGroupByOutputType>[]
          }
          count: {
            args: Prisma.bienCountArgs<ExtArgs>
            result: $Utils.Optional<BienCountAggregateOutputType> | number
          }
        }
      }
      facture: {
        payload: Prisma.$facturePayload<ExtArgs>
        fields: Prisma.factureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.factureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.factureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facturePayload>
          }
          findFirst: {
            args: Prisma.factureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.factureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facturePayload>
          }
          findMany: {
            args: Prisma.factureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facturePayload>[]
          }
          create: {
            args: Prisma.factureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facturePayload>
          }
          createMany: {
            args: Prisma.factureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.factureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facturePayload>[]
          }
          delete: {
            args: Prisma.factureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facturePayload>
          }
          update: {
            args: Prisma.factureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facturePayload>
          }
          deleteMany: {
            args: Prisma.factureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.factureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.factureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facturePayload>[]
          }
          upsert: {
            args: Prisma.factureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facturePayload>
          }
          aggregate: {
            args: Prisma.FactureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacture>
          }
          groupBy: {
            args: Prisma.factureGroupByArgs<ExtArgs>
            result: $Utils.Optional<FactureGroupByOutputType>[]
          }
          count: {
            args: Prisma.factureCountArgs<ExtArgs>
            result: $Utils.Optional<FactureCountAggregateOutputType> | number
          }
        }
      }
      facture_bien: {
        payload: Prisma.$facture_bienPayload<ExtArgs>
        fields: Prisma.facture_bienFieldRefs
        operations: {
          findUnique: {
            args: Prisma.facture_bienFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facture_bienPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.facture_bienFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facture_bienPayload>
          }
          findFirst: {
            args: Prisma.facture_bienFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facture_bienPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.facture_bienFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facture_bienPayload>
          }
          findMany: {
            args: Prisma.facture_bienFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facture_bienPayload>[]
          }
          create: {
            args: Prisma.facture_bienCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facture_bienPayload>
          }
          createMany: {
            args: Prisma.facture_bienCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.facture_bienCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facture_bienPayload>[]
          }
          delete: {
            args: Prisma.facture_bienDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facture_bienPayload>
          }
          update: {
            args: Prisma.facture_bienUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facture_bienPayload>
          }
          deleteMany: {
            args: Prisma.facture_bienDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.facture_bienUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.facture_bienUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facture_bienPayload>[]
          }
          upsert: {
            args: Prisma.facture_bienUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facture_bienPayload>
          }
          aggregate: {
            args: Prisma.Facture_bienAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacture_bien>
          }
          groupBy: {
            args: Prisma.facture_bienGroupByArgs<ExtArgs>
            result: $Utils.Optional<Facture_bienGroupByOutputType>[]
          }
          count: {
            args: Prisma.facture_bienCountArgs<ExtArgs>
            result: $Utils.Optional<Facture_bienCountAggregateOutputType> | number
          }
        }
      }
      paiment: {
        payload: Prisma.$paimentPayload<ExtArgs>
        fields: Prisma.paimentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.paimentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paimentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.paimentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paimentPayload>
          }
          findFirst: {
            args: Prisma.paimentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paimentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.paimentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paimentPayload>
          }
          findMany: {
            args: Prisma.paimentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paimentPayload>[]
          }
          create: {
            args: Prisma.paimentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paimentPayload>
          }
          createMany: {
            args: Prisma.paimentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.paimentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paimentPayload>[]
          }
          delete: {
            args: Prisma.paimentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paimentPayload>
          }
          update: {
            args: Prisma.paimentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paimentPayload>
          }
          deleteMany: {
            args: Prisma.paimentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.paimentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.paimentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paimentPayload>[]
          }
          upsert: {
            args: Prisma.paimentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paimentPayload>
          }
          aggregate: {
            args: Prisma.PaimentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaiment>
          }
          groupBy: {
            args: Prisma.paimentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaimentGroupByOutputType>[]
          }
          count: {
            args: Prisma.paimentCountArgs<ExtArgs>
            result: $Utils.Optional<PaimentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    utilisateur?: UtilisateurOmit
    entreprise?: EntrepriseOmit
    client?: ClientOmit
    rendez_vous?: rendez_vousOmit
    document_templates?: document_templatesOmit
    document?: documentOmit
    bien?: bienOmit
    facture?: factureOmit
    facture_bien?: facture_bienOmit
    paiment?: paimentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UtilisateurCountOutputType
   */

  export type UtilisateurCountOutputType = {
    clients: number
    rendez_vous: number
    documentTemplates: number
    documents: number
    biens: number
    factures: number
    factureBiens: number
    paiements: number
  }

  export type UtilisateurCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | UtilisateurCountOutputTypeCountClientsArgs
    rendez_vous?: boolean | UtilisateurCountOutputTypeCountRendez_vousArgs
    documentTemplates?: boolean | UtilisateurCountOutputTypeCountDocumentTemplatesArgs
    documents?: boolean | UtilisateurCountOutputTypeCountDocumentsArgs
    biens?: boolean | UtilisateurCountOutputTypeCountBiensArgs
    factures?: boolean | UtilisateurCountOutputTypeCountFacturesArgs
    factureBiens?: boolean | UtilisateurCountOutputTypeCountFactureBiensArgs
    paiements?: boolean | UtilisateurCountOutputTypeCountPaiementsArgs
  }

  // Custom InputTypes
  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilisateurCountOutputType
     */
    select?: UtilisateurCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
  }

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountRendez_vousArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rendez_vousWhereInput
  }

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountDocumentTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: document_templatesWhereInput
  }

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: documentWhereInput
  }

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountBiensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bienWhereInput
  }

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountFacturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: factureWhereInput
  }

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountFactureBiensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: facture_bienWhereInput
  }

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountPaiementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paimentWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    rendez_vous: number
    documents: number
    factures: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rendez_vous?: boolean | ClientCountOutputTypeCountRendez_vousArgs
    documents?: boolean | ClientCountOutputTypeCountDocumentsArgs
    factures?: boolean | ClientCountOutputTypeCountFacturesArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountRendez_vousArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rendez_vousWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: documentWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountFacturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: factureWhereInput
  }


  /**
   * Count Type Document_templatesCountOutputType
   */

  export type Document_templatesCountOutputType = {
    documents: number
  }

  export type Document_templatesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | Document_templatesCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * Document_templatesCountOutputType without action
   */
  export type Document_templatesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document_templatesCountOutputType
     */
    select?: Document_templatesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Document_templatesCountOutputType without action
   */
  export type Document_templatesCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: documentWhereInput
  }


  /**
   * Count Type BienCountOutputType
   */

  export type BienCountOutputType = {
    factureBiens: number
  }

  export type BienCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    factureBiens?: boolean | BienCountOutputTypeCountFactureBiensArgs
  }

  // Custom InputTypes
  /**
   * BienCountOutputType without action
   */
  export type BienCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BienCountOutputType
     */
    select?: BienCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BienCountOutputType without action
   */
  export type BienCountOutputTypeCountFactureBiensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: facture_bienWhereInput
  }


  /**
   * Count Type FactureCountOutputType
   */

  export type FactureCountOutputType = {
    factureBiens: number
    paiements: number
  }

  export type FactureCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    factureBiens?: boolean | FactureCountOutputTypeCountFactureBiensArgs
    paiements?: boolean | FactureCountOutputTypeCountPaiementsArgs
  }

  // Custom InputTypes
  /**
   * FactureCountOutputType without action
   */
  export type FactureCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FactureCountOutputType
     */
    select?: FactureCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FactureCountOutputType without action
   */
  export type FactureCountOutputTypeCountFactureBiensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: facture_bienWhereInput
  }

  /**
   * FactureCountOutputType without action
   */
  export type FactureCountOutputTypeCountPaiementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paimentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Utilisateur
   */

  export type AggregateUtilisateur = {
    _count: UtilisateurCountAggregateOutputType | null
    _avg: UtilisateurAvgAggregateOutputType | null
    _sum: UtilisateurSumAggregateOutputType | null
    _min: UtilisateurMinAggregateOutputType | null
    _max: UtilisateurMaxAggregateOutputType | null
  }

  export type UtilisateurAvgAggregateOutputType = {
    id: number | null
  }

  export type UtilisateurSumAggregateOutputType = {
    id: number | null
  }

  export type UtilisateurMinAggregateOutputType = {
    id: number | null
    CIN: string | null
    nom: string | null
    prenom: string | null
    date_naissance: Date | null
    adresse: string | null
    numero_telephone: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    created_at: Date | null
  }

  export type UtilisateurMaxAggregateOutputType = {
    id: number | null
    CIN: string | null
    nom: string | null
    prenom: string | null
    date_naissance: Date | null
    adresse: string | null
    numero_telephone: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    created_at: Date | null
  }

  export type UtilisateurCountAggregateOutputType = {
    id: number
    CIN: number
    nom: number
    prenom: number
    date_naissance: number
    adresse: number
    numero_telephone: number
    email: number
    password: number
    role: number
    created_at: number
    _all: number
  }


  export type UtilisateurAvgAggregateInputType = {
    id?: true
  }

  export type UtilisateurSumAggregateInputType = {
    id?: true
  }

  export type UtilisateurMinAggregateInputType = {
    id?: true
    CIN?: true
    nom?: true
    prenom?: true
    date_naissance?: true
    adresse?: true
    numero_telephone?: true
    email?: true
    password?: true
    role?: true
    created_at?: true
  }

  export type UtilisateurMaxAggregateInputType = {
    id?: true
    CIN?: true
    nom?: true
    prenom?: true
    date_naissance?: true
    adresse?: true
    numero_telephone?: true
    email?: true
    password?: true
    role?: true
    created_at?: true
  }

  export type UtilisateurCountAggregateInputType = {
    id?: true
    CIN?: true
    nom?: true
    prenom?: true
    date_naissance?: true
    adresse?: true
    numero_telephone?: true
    email?: true
    password?: true
    role?: true
    created_at?: true
    _all?: true
  }

  export type UtilisateurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utilisateur to aggregate.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Utilisateurs
    **/
    _count?: true | UtilisateurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UtilisateurAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UtilisateurSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UtilisateurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UtilisateurMaxAggregateInputType
  }

  export type GetUtilisateurAggregateType<T extends UtilisateurAggregateArgs> = {
        [P in keyof T & keyof AggregateUtilisateur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUtilisateur[P]>
      : GetScalarType<T[P], AggregateUtilisateur[P]>
  }




  export type UtilisateurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UtilisateurWhereInput
    orderBy?: UtilisateurOrderByWithAggregationInput | UtilisateurOrderByWithAggregationInput[]
    by: UtilisateurScalarFieldEnum[] | UtilisateurScalarFieldEnum
    having?: UtilisateurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UtilisateurCountAggregateInputType | true
    _avg?: UtilisateurAvgAggregateInputType
    _sum?: UtilisateurSumAggregateInputType
    _min?: UtilisateurMinAggregateInputType
    _max?: UtilisateurMaxAggregateInputType
  }

  export type UtilisateurGroupByOutputType = {
    id: number
    CIN: string
    nom: string
    prenom: string
    date_naissance: Date
    adresse: string
    numero_telephone: string
    email: string
    password: string
    role: $Enums.Role
    created_at: Date
    _count: UtilisateurCountAggregateOutputType | null
    _avg: UtilisateurAvgAggregateOutputType | null
    _sum: UtilisateurSumAggregateOutputType | null
    _min: UtilisateurMinAggregateOutputType | null
    _max: UtilisateurMaxAggregateOutputType | null
  }

  type GetUtilisateurGroupByPayload<T extends UtilisateurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UtilisateurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UtilisateurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UtilisateurGroupByOutputType[P]>
            : GetScalarType<T[P], UtilisateurGroupByOutputType[P]>
        }
      >
    >


  export type UtilisateurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    CIN?: boolean
    nom?: boolean
    prenom?: boolean
    date_naissance?: boolean
    adresse?: boolean
    numero_telephone?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
    clients?: boolean | Utilisateur$clientsArgs<ExtArgs>
    rendez_vous?: boolean | Utilisateur$rendez_vousArgs<ExtArgs>
    documentTemplates?: boolean | Utilisateur$documentTemplatesArgs<ExtArgs>
    documents?: boolean | Utilisateur$documentsArgs<ExtArgs>
    biens?: boolean | Utilisateur$biensArgs<ExtArgs>
    factures?: boolean | Utilisateur$facturesArgs<ExtArgs>
    factureBiens?: boolean | Utilisateur$factureBiensArgs<ExtArgs>
    paiements?: boolean | Utilisateur$paiementsArgs<ExtArgs>
    _count?: boolean | UtilisateurCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["utilisateur"]>

  export type UtilisateurSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    CIN?: boolean
    nom?: boolean
    prenom?: boolean
    date_naissance?: boolean
    adresse?: boolean
    numero_telephone?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["utilisateur"]>

  export type UtilisateurSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    CIN?: boolean
    nom?: boolean
    prenom?: boolean
    date_naissance?: boolean
    adresse?: boolean
    numero_telephone?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["utilisateur"]>

  export type UtilisateurSelectScalar = {
    id?: boolean
    CIN?: boolean
    nom?: boolean
    prenom?: boolean
    date_naissance?: boolean
    adresse?: boolean
    numero_telephone?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
  }

  export type UtilisateurOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "CIN" | "nom" | "prenom" | "date_naissance" | "adresse" | "numero_telephone" | "email" | "password" | "role" | "created_at", ExtArgs["result"]["utilisateur"]>
  export type UtilisateurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | Utilisateur$clientsArgs<ExtArgs>
    rendez_vous?: boolean | Utilisateur$rendez_vousArgs<ExtArgs>
    documentTemplates?: boolean | Utilisateur$documentTemplatesArgs<ExtArgs>
    documents?: boolean | Utilisateur$documentsArgs<ExtArgs>
    biens?: boolean | Utilisateur$biensArgs<ExtArgs>
    factures?: boolean | Utilisateur$facturesArgs<ExtArgs>
    factureBiens?: boolean | Utilisateur$factureBiensArgs<ExtArgs>
    paiements?: boolean | Utilisateur$paiementsArgs<ExtArgs>
    _count?: boolean | UtilisateurCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UtilisateurIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UtilisateurIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UtilisateurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Utilisateur"
    objects: {
      clients: Prisma.$ClientPayload<ExtArgs>[]
      rendez_vous: Prisma.$rendez_vousPayload<ExtArgs>[]
      documentTemplates: Prisma.$document_templatesPayload<ExtArgs>[]
      documents: Prisma.$documentPayload<ExtArgs>[]
      biens: Prisma.$bienPayload<ExtArgs>[]
      factures: Prisma.$facturePayload<ExtArgs>[]
      factureBiens: Prisma.$facture_bienPayload<ExtArgs>[]
      paiements: Prisma.$paimentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      CIN: string
      nom: string
      prenom: string
      date_naissance: Date
      adresse: string
      numero_telephone: string
      email: string
      password: string
      role: $Enums.Role
      created_at: Date
    }, ExtArgs["result"]["utilisateur"]>
    composites: {}
  }

  type UtilisateurGetPayload<S extends boolean | null | undefined | UtilisateurDefaultArgs> = $Result.GetResult<Prisma.$UtilisateurPayload, S>

  type UtilisateurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UtilisateurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UtilisateurCountAggregateInputType | true
    }

  export interface UtilisateurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Utilisateur'], meta: { name: 'Utilisateur' } }
    /**
     * Find zero or one Utilisateur that matches the filter.
     * @param {UtilisateurFindUniqueArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UtilisateurFindUniqueArgs>(args: SelectSubset<T, UtilisateurFindUniqueArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Utilisateur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UtilisateurFindUniqueOrThrowArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UtilisateurFindUniqueOrThrowArgs>(args: SelectSubset<T, UtilisateurFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindFirstArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UtilisateurFindFirstArgs>(args?: SelectSubset<T, UtilisateurFindFirstArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindFirstOrThrowArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UtilisateurFindFirstOrThrowArgs>(args?: SelectSubset<T, UtilisateurFindFirstOrThrowArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Utilisateurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Utilisateurs
     * const utilisateurs = await prisma.utilisateur.findMany()
     * 
     * // Get first 10 Utilisateurs
     * const utilisateurs = await prisma.utilisateur.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UtilisateurFindManyArgs>(args?: SelectSubset<T, UtilisateurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Utilisateur.
     * @param {UtilisateurCreateArgs} args - Arguments to create a Utilisateur.
     * @example
     * // Create one Utilisateur
     * const Utilisateur = await prisma.utilisateur.create({
     *   data: {
     *     // ... data to create a Utilisateur
     *   }
     * })
     * 
     */
    create<T extends UtilisateurCreateArgs>(args: SelectSubset<T, UtilisateurCreateArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Utilisateurs.
     * @param {UtilisateurCreateManyArgs} args - Arguments to create many Utilisateurs.
     * @example
     * // Create many Utilisateurs
     * const utilisateur = await prisma.utilisateur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UtilisateurCreateManyArgs>(args?: SelectSubset<T, UtilisateurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Utilisateurs and returns the data saved in the database.
     * @param {UtilisateurCreateManyAndReturnArgs} args - Arguments to create many Utilisateurs.
     * @example
     * // Create many Utilisateurs
     * const utilisateur = await prisma.utilisateur.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Utilisateurs and only return the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UtilisateurCreateManyAndReturnArgs>(args?: SelectSubset<T, UtilisateurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Utilisateur.
     * @param {UtilisateurDeleteArgs} args - Arguments to delete one Utilisateur.
     * @example
     * // Delete one Utilisateur
     * const Utilisateur = await prisma.utilisateur.delete({
     *   where: {
     *     // ... filter to delete one Utilisateur
     *   }
     * })
     * 
     */
    delete<T extends UtilisateurDeleteArgs>(args: SelectSubset<T, UtilisateurDeleteArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Utilisateur.
     * @param {UtilisateurUpdateArgs} args - Arguments to update one Utilisateur.
     * @example
     * // Update one Utilisateur
     * const utilisateur = await prisma.utilisateur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UtilisateurUpdateArgs>(args: SelectSubset<T, UtilisateurUpdateArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Utilisateurs.
     * @param {UtilisateurDeleteManyArgs} args - Arguments to filter Utilisateurs to delete.
     * @example
     * // Delete a few Utilisateurs
     * const { count } = await prisma.utilisateur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UtilisateurDeleteManyArgs>(args?: SelectSubset<T, UtilisateurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Utilisateurs
     * const utilisateur = await prisma.utilisateur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UtilisateurUpdateManyArgs>(args: SelectSubset<T, UtilisateurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilisateurs and returns the data updated in the database.
     * @param {UtilisateurUpdateManyAndReturnArgs} args - Arguments to update many Utilisateurs.
     * @example
     * // Update many Utilisateurs
     * const utilisateur = await prisma.utilisateur.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Utilisateurs and only return the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UtilisateurUpdateManyAndReturnArgs>(args: SelectSubset<T, UtilisateurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Utilisateur.
     * @param {UtilisateurUpsertArgs} args - Arguments to update or create a Utilisateur.
     * @example
     * // Update or create a Utilisateur
     * const utilisateur = await prisma.utilisateur.upsert({
     *   create: {
     *     // ... data to create a Utilisateur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Utilisateur we want to update
     *   }
     * })
     */
    upsert<T extends UtilisateurUpsertArgs>(args: SelectSubset<T, UtilisateurUpsertArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurCountArgs} args - Arguments to filter Utilisateurs to count.
     * @example
     * // Count the number of Utilisateurs
     * const count = await prisma.utilisateur.count({
     *   where: {
     *     // ... the filter for the Utilisateurs we want to count
     *   }
     * })
    **/
    count<T extends UtilisateurCountArgs>(
      args?: Subset<T, UtilisateurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UtilisateurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Utilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UtilisateurAggregateArgs>(args: Subset<T, UtilisateurAggregateArgs>): Prisma.PrismaPromise<GetUtilisateurAggregateType<T>>

    /**
     * Group by Utilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UtilisateurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UtilisateurGroupByArgs['orderBy'] }
        : { orderBy?: UtilisateurGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UtilisateurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUtilisateurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Utilisateur model
   */
  readonly fields: UtilisateurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Utilisateur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UtilisateurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clients<T extends Utilisateur$clientsArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$clientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rendez_vous<T extends Utilisateur$rendez_vousArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$rendez_vousArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rendez_vousPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documentTemplates<T extends Utilisateur$documentTemplatesArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$documentTemplatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$document_templatesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documents<T extends Utilisateur$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    biens<T extends Utilisateur$biensArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$biensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bienPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    factures<T extends Utilisateur$facturesArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$facturesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$facturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    factureBiens<T extends Utilisateur$factureBiensArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$factureBiensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$facture_bienPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paiements<T extends Utilisateur$paiementsArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$paiementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paimentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Utilisateur model
   */
  interface UtilisateurFieldRefs {
    readonly id: FieldRef<"Utilisateur", 'Int'>
    readonly CIN: FieldRef<"Utilisateur", 'String'>
    readonly nom: FieldRef<"Utilisateur", 'String'>
    readonly prenom: FieldRef<"Utilisateur", 'String'>
    readonly date_naissance: FieldRef<"Utilisateur", 'DateTime'>
    readonly adresse: FieldRef<"Utilisateur", 'String'>
    readonly numero_telephone: FieldRef<"Utilisateur", 'String'>
    readonly email: FieldRef<"Utilisateur", 'String'>
    readonly password: FieldRef<"Utilisateur", 'String'>
    readonly role: FieldRef<"Utilisateur", 'Role'>
    readonly created_at: FieldRef<"Utilisateur", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Utilisateur findUnique
   */
  export type UtilisateurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur findUniqueOrThrow
   */
  export type UtilisateurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur findFirst
   */
  export type UtilisateurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur findFirstOrThrow
   */
  export type UtilisateurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur findMany
   */
  export type UtilisateurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateurs to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur create
   */
  export type UtilisateurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to create a Utilisateur.
     */
    data: XOR<UtilisateurCreateInput, UtilisateurUncheckedCreateInput>
  }

  /**
   * Utilisateur createMany
   */
  export type UtilisateurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Utilisateurs.
     */
    data: UtilisateurCreateManyInput | UtilisateurCreateManyInput[]
  }

  /**
   * Utilisateur createManyAndReturn
   */
  export type UtilisateurCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * The data used to create many Utilisateurs.
     */
    data: UtilisateurCreateManyInput | UtilisateurCreateManyInput[]
  }

  /**
   * Utilisateur update
   */
  export type UtilisateurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to update a Utilisateur.
     */
    data: XOR<UtilisateurUpdateInput, UtilisateurUncheckedUpdateInput>
    /**
     * Choose, which Utilisateur to update.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur updateMany
   */
  export type UtilisateurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Utilisateurs.
     */
    data: XOR<UtilisateurUpdateManyMutationInput, UtilisateurUncheckedUpdateManyInput>
    /**
     * Filter which Utilisateurs to update
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to update.
     */
    limit?: number
  }

  /**
   * Utilisateur updateManyAndReturn
   */
  export type UtilisateurUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * The data used to update Utilisateurs.
     */
    data: XOR<UtilisateurUpdateManyMutationInput, UtilisateurUncheckedUpdateManyInput>
    /**
     * Filter which Utilisateurs to update
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to update.
     */
    limit?: number
  }

  /**
   * Utilisateur upsert
   */
  export type UtilisateurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The filter to search for the Utilisateur to update in case it exists.
     */
    where: UtilisateurWhereUniqueInput
    /**
     * In case the Utilisateur found by the `where` argument doesn't exist, create a new Utilisateur with this data.
     */
    create: XOR<UtilisateurCreateInput, UtilisateurUncheckedCreateInput>
    /**
     * In case the Utilisateur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UtilisateurUpdateInput, UtilisateurUncheckedUpdateInput>
  }

  /**
   * Utilisateur delete
   */
  export type UtilisateurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter which Utilisateur to delete.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur deleteMany
   */
  export type UtilisateurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utilisateurs to delete
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to delete.
     */
    limit?: number
  }

  /**
   * Utilisateur.clients
   */
  export type Utilisateur$clientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    cursor?: ClientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Utilisateur.rendez_vous
   */
  export type Utilisateur$rendez_vousArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rendez_vous
     */
    select?: rendez_vousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rendez_vous
     */
    omit?: rendez_vousOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rendez_vousInclude<ExtArgs> | null
    where?: rendez_vousWhereInput
    orderBy?: rendez_vousOrderByWithRelationInput | rendez_vousOrderByWithRelationInput[]
    cursor?: rendez_vousWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Rendez_vousScalarFieldEnum | Rendez_vousScalarFieldEnum[]
  }

  /**
   * Utilisateur.documentTemplates
   */
  export type Utilisateur$documentTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_templates
     */
    select?: document_templatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_templates
     */
    omit?: document_templatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_templatesInclude<ExtArgs> | null
    where?: document_templatesWhereInput
    orderBy?: document_templatesOrderByWithRelationInput | document_templatesOrderByWithRelationInput[]
    cursor?: document_templatesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Document_templatesScalarFieldEnum | Document_templatesScalarFieldEnum[]
  }

  /**
   * Utilisateur.documents
   */
  export type Utilisateur$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document
     */
    omit?: documentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentInclude<ExtArgs> | null
    where?: documentWhereInput
    orderBy?: documentOrderByWithRelationInput | documentOrderByWithRelationInput[]
    cursor?: documentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Utilisateur.biens
   */
  export type Utilisateur$biensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bien
     */
    select?: bienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bien
     */
    omit?: bienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bienInclude<ExtArgs> | null
    where?: bienWhereInput
    orderBy?: bienOrderByWithRelationInput | bienOrderByWithRelationInput[]
    cursor?: bienWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BienScalarFieldEnum | BienScalarFieldEnum[]
  }

  /**
   * Utilisateur.factures
   */
  export type Utilisateur$facturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facture
     */
    select?: factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facture
     */
    omit?: factureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: factureInclude<ExtArgs> | null
    where?: factureWhereInput
    orderBy?: factureOrderByWithRelationInput | factureOrderByWithRelationInput[]
    cursor?: factureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FactureScalarFieldEnum | FactureScalarFieldEnum[]
  }

  /**
   * Utilisateur.factureBiens
   */
  export type Utilisateur$factureBiensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facture_bien
     */
    select?: facture_bienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facture_bien
     */
    omit?: facture_bienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facture_bienInclude<ExtArgs> | null
    where?: facture_bienWhereInput
    orderBy?: facture_bienOrderByWithRelationInput | facture_bienOrderByWithRelationInput[]
    cursor?: facture_bienWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Facture_bienScalarFieldEnum | Facture_bienScalarFieldEnum[]
  }

  /**
   * Utilisateur.paiements
   */
  export type Utilisateur$paiementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paiment
     */
    select?: paimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paiment
     */
    omit?: paimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paimentInclude<ExtArgs> | null
    where?: paimentWhereInput
    orderBy?: paimentOrderByWithRelationInput | paimentOrderByWithRelationInput[]
    cursor?: paimentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaimentScalarFieldEnum | PaimentScalarFieldEnum[]
  }

  /**
   * Utilisateur without action
   */
  export type UtilisateurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
  }


  /**
   * Model Entreprise
   */

  export type AggregateEntreprise = {
    _count: EntrepriseCountAggregateOutputType | null
    _avg: EntrepriseAvgAggregateOutputType | null
    _sum: EntrepriseSumAggregateOutputType | null
    _min: EntrepriseMinAggregateOutputType | null
    _max: EntrepriseMaxAggregateOutputType | null
  }

  export type EntrepriseAvgAggregateOutputType = {
    id: number | null
    ICE: number | null
    CNSS: number | null
    RC: number | null
    IF: number | null
    RIB: number | null
    patente: number | null
  }

  export type EntrepriseSumAggregateOutputType = {
    id: number | null
    ICE: number | null
    CNSS: number | null
    RC: number | null
    IF: number | null
    RIB: number | null
    patente: number | null
  }

  export type EntrepriseMinAggregateOutputType = {
    id: number | null
    ICE: number | null
    CNSS: number | null
    RC: number | null
    IF: number | null
    RIB: number | null
    patente: number | null
    adresse: string | null
    created_at: Date | null
  }

  export type EntrepriseMaxAggregateOutputType = {
    id: number | null
    ICE: number | null
    CNSS: number | null
    RC: number | null
    IF: number | null
    RIB: number | null
    patente: number | null
    adresse: string | null
    created_at: Date | null
  }

  export type EntrepriseCountAggregateOutputType = {
    id: number
    ICE: number
    CNSS: number
    RC: number
    IF: number
    RIB: number
    patente: number
    adresse: number
    created_at: number
    _all: number
  }


  export type EntrepriseAvgAggregateInputType = {
    id?: true
    ICE?: true
    CNSS?: true
    RC?: true
    IF?: true
    RIB?: true
    patente?: true
  }

  export type EntrepriseSumAggregateInputType = {
    id?: true
    ICE?: true
    CNSS?: true
    RC?: true
    IF?: true
    RIB?: true
    patente?: true
  }

  export type EntrepriseMinAggregateInputType = {
    id?: true
    ICE?: true
    CNSS?: true
    RC?: true
    IF?: true
    RIB?: true
    patente?: true
    adresse?: true
    created_at?: true
  }

  export type EntrepriseMaxAggregateInputType = {
    id?: true
    ICE?: true
    CNSS?: true
    RC?: true
    IF?: true
    RIB?: true
    patente?: true
    adresse?: true
    created_at?: true
  }

  export type EntrepriseCountAggregateInputType = {
    id?: true
    ICE?: true
    CNSS?: true
    RC?: true
    IF?: true
    RIB?: true
    patente?: true
    adresse?: true
    created_at?: true
    _all?: true
  }

  export type EntrepriseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entreprise to aggregate.
     */
    where?: EntrepriseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entreprises to fetch.
     */
    orderBy?: EntrepriseOrderByWithRelationInput | EntrepriseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EntrepriseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entreprises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entreprises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Entreprises
    **/
    _count?: true | EntrepriseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EntrepriseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EntrepriseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntrepriseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntrepriseMaxAggregateInputType
  }

  export type GetEntrepriseAggregateType<T extends EntrepriseAggregateArgs> = {
        [P in keyof T & keyof AggregateEntreprise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntreprise[P]>
      : GetScalarType<T[P], AggregateEntreprise[P]>
  }




  export type EntrepriseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntrepriseWhereInput
    orderBy?: EntrepriseOrderByWithAggregationInput | EntrepriseOrderByWithAggregationInput[]
    by: EntrepriseScalarFieldEnum[] | EntrepriseScalarFieldEnum
    having?: EntrepriseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntrepriseCountAggregateInputType | true
    _avg?: EntrepriseAvgAggregateInputType
    _sum?: EntrepriseSumAggregateInputType
    _min?: EntrepriseMinAggregateInputType
    _max?: EntrepriseMaxAggregateInputType
  }

  export type EntrepriseGroupByOutputType = {
    id: number
    ICE: number
    CNSS: number
    RC: number
    IF: number
    RIB: number
    patente: number
    adresse: string
    created_at: Date
    _count: EntrepriseCountAggregateOutputType | null
    _avg: EntrepriseAvgAggregateOutputType | null
    _sum: EntrepriseSumAggregateOutputType | null
    _min: EntrepriseMinAggregateOutputType | null
    _max: EntrepriseMaxAggregateOutputType | null
  }

  type GetEntrepriseGroupByPayload<T extends EntrepriseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntrepriseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntrepriseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntrepriseGroupByOutputType[P]>
            : GetScalarType<T[P], EntrepriseGroupByOutputType[P]>
        }
      >
    >


  export type EntrepriseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ICE?: boolean
    CNSS?: boolean
    RC?: boolean
    IF?: boolean
    RIB?: boolean
    patente?: boolean
    adresse?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["entreprise"]>

  export type EntrepriseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ICE?: boolean
    CNSS?: boolean
    RC?: boolean
    IF?: boolean
    RIB?: boolean
    patente?: boolean
    adresse?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["entreprise"]>

  export type EntrepriseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ICE?: boolean
    CNSS?: boolean
    RC?: boolean
    IF?: boolean
    RIB?: boolean
    patente?: boolean
    adresse?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["entreprise"]>

  export type EntrepriseSelectScalar = {
    id?: boolean
    ICE?: boolean
    CNSS?: boolean
    RC?: boolean
    IF?: boolean
    RIB?: boolean
    patente?: boolean
    adresse?: boolean
    created_at?: boolean
  }

  export type EntrepriseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ICE" | "CNSS" | "RC" | "IF" | "RIB" | "patente" | "adresse" | "created_at", ExtArgs["result"]["entreprise"]>

  export type $EntreprisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Entreprise"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ICE: number
      CNSS: number
      RC: number
      IF: number
      RIB: number
      patente: number
      adresse: string
      created_at: Date
    }, ExtArgs["result"]["entreprise"]>
    composites: {}
  }

  type EntrepriseGetPayload<S extends boolean | null | undefined | EntrepriseDefaultArgs> = $Result.GetResult<Prisma.$EntreprisePayload, S>

  type EntrepriseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EntrepriseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EntrepriseCountAggregateInputType | true
    }

  export interface EntrepriseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Entreprise'], meta: { name: 'Entreprise' } }
    /**
     * Find zero or one Entreprise that matches the filter.
     * @param {EntrepriseFindUniqueArgs} args - Arguments to find a Entreprise
     * @example
     * // Get one Entreprise
     * const entreprise = await prisma.entreprise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EntrepriseFindUniqueArgs>(args: SelectSubset<T, EntrepriseFindUniqueArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Entreprise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EntrepriseFindUniqueOrThrowArgs} args - Arguments to find a Entreprise
     * @example
     * // Get one Entreprise
     * const entreprise = await prisma.entreprise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EntrepriseFindUniqueOrThrowArgs>(args: SelectSubset<T, EntrepriseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entreprise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrepriseFindFirstArgs} args - Arguments to find a Entreprise
     * @example
     * // Get one Entreprise
     * const entreprise = await prisma.entreprise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EntrepriseFindFirstArgs>(args?: SelectSubset<T, EntrepriseFindFirstArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entreprise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrepriseFindFirstOrThrowArgs} args - Arguments to find a Entreprise
     * @example
     * // Get one Entreprise
     * const entreprise = await prisma.entreprise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EntrepriseFindFirstOrThrowArgs>(args?: SelectSubset<T, EntrepriseFindFirstOrThrowArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Entreprises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrepriseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entreprises
     * const entreprises = await prisma.entreprise.findMany()
     * 
     * // Get first 10 Entreprises
     * const entreprises = await prisma.entreprise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entrepriseWithIdOnly = await prisma.entreprise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EntrepriseFindManyArgs>(args?: SelectSubset<T, EntrepriseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Entreprise.
     * @param {EntrepriseCreateArgs} args - Arguments to create a Entreprise.
     * @example
     * // Create one Entreprise
     * const Entreprise = await prisma.entreprise.create({
     *   data: {
     *     // ... data to create a Entreprise
     *   }
     * })
     * 
     */
    create<T extends EntrepriseCreateArgs>(args: SelectSubset<T, EntrepriseCreateArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Entreprises.
     * @param {EntrepriseCreateManyArgs} args - Arguments to create many Entreprises.
     * @example
     * // Create many Entreprises
     * const entreprise = await prisma.entreprise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EntrepriseCreateManyArgs>(args?: SelectSubset<T, EntrepriseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Entreprises and returns the data saved in the database.
     * @param {EntrepriseCreateManyAndReturnArgs} args - Arguments to create many Entreprises.
     * @example
     * // Create many Entreprises
     * const entreprise = await prisma.entreprise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Entreprises and only return the `id`
     * const entrepriseWithIdOnly = await prisma.entreprise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EntrepriseCreateManyAndReturnArgs>(args?: SelectSubset<T, EntrepriseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Entreprise.
     * @param {EntrepriseDeleteArgs} args - Arguments to delete one Entreprise.
     * @example
     * // Delete one Entreprise
     * const Entreprise = await prisma.entreprise.delete({
     *   where: {
     *     // ... filter to delete one Entreprise
     *   }
     * })
     * 
     */
    delete<T extends EntrepriseDeleteArgs>(args: SelectSubset<T, EntrepriseDeleteArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Entreprise.
     * @param {EntrepriseUpdateArgs} args - Arguments to update one Entreprise.
     * @example
     * // Update one Entreprise
     * const entreprise = await prisma.entreprise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EntrepriseUpdateArgs>(args: SelectSubset<T, EntrepriseUpdateArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Entreprises.
     * @param {EntrepriseDeleteManyArgs} args - Arguments to filter Entreprises to delete.
     * @example
     * // Delete a few Entreprises
     * const { count } = await prisma.entreprise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EntrepriseDeleteManyArgs>(args?: SelectSubset<T, EntrepriseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entreprises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrepriseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entreprises
     * const entreprise = await prisma.entreprise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EntrepriseUpdateManyArgs>(args: SelectSubset<T, EntrepriseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entreprises and returns the data updated in the database.
     * @param {EntrepriseUpdateManyAndReturnArgs} args - Arguments to update many Entreprises.
     * @example
     * // Update many Entreprises
     * const entreprise = await prisma.entreprise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Entreprises and only return the `id`
     * const entrepriseWithIdOnly = await prisma.entreprise.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EntrepriseUpdateManyAndReturnArgs>(args: SelectSubset<T, EntrepriseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Entreprise.
     * @param {EntrepriseUpsertArgs} args - Arguments to update or create a Entreprise.
     * @example
     * // Update or create a Entreprise
     * const entreprise = await prisma.entreprise.upsert({
     *   create: {
     *     // ... data to create a Entreprise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entreprise we want to update
     *   }
     * })
     */
    upsert<T extends EntrepriseUpsertArgs>(args: SelectSubset<T, EntrepriseUpsertArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Entreprises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrepriseCountArgs} args - Arguments to filter Entreprises to count.
     * @example
     * // Count the number of Entreprises
     * const count = await prisma.entreprise.count({
     *   where: {
     *     // ... the filter for the Entreprises we want to count
     *   }
     * })
    **/
    count<T extends EntrepriseCountArgs>(
      args?: Subset<T, EntrepriseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntrepriseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entreprise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrepriseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EntrepriseAggregateArgs>(args: Subset<T, EntrepriseAggregateArgs>): Prisma.PrismaPromise<GetEntrepriseAggregateType<T>>

    /**
     * Group by Entreprise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrepriseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EntrepriseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntrepriseGroupByArgs['orderBy'] }
        : { orderBy?: EntrepriseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EntrepriseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntrepriseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Entreprise model
   */
  readonly fields: EntrepriseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Entreprise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EntrepriseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Entreprise model
   */
  interface EntrepriseFieldRefs {
    readonly id: FieldRef<"Entreprise", 'Int'>
    readonly ICE: FieldRef<"Entreprise", 'Int'>
    readonly CNSS: FieldRef<"Entreprise", 'Int'>
    readonly RC: FieldRef<"Entreprise", 'Int'>
    readonly IF: FieldRef<"Entreprise", 'Int'>
    readonly RIB: FieldRef<"Entreprise", 'Int'>
    readonly patente: FieldRef<"Entreprise", 'Int'>
    readonly adresse: FieldRef<"Entreprise", 'String'>
    readonly created_at: FieldRef<"Entreprise", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Entreprise findUnique
   */
  export type EntrepriseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Filter, which Entreprise to fetch.
     */
    where: EntrepriseWhereUniqueInput
  }

  /**
   * Entreprise findUniqueOrThrow
   */
  export type EntrepriseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Filter, which Entreprise to fetch.
     */
    where: EntrepriseWhereUniqueInput
  }

  /**
   * Entreprise findFirst
   */
  export type EntrepriseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Filter, which Entreprise to fetch.
     */
    where?: EntrepriseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entreprises to fetch.
     */
    orderBy?: EntrepriseOrderByWithRelationInput | EntrepriseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entreprises.
     */
    cursor?: EntrepriseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entreprises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entreprises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entreprises.
     */
    distinct?: EntrepriseScalarFieldEnum | EntrepriseScalarFieldEnum[]
  }

  /**
   * Entreprise findFirstOrThrow
   */
  export type EntrepriseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Filter, which Entreprise to fetch.
     */
    where?: EntrepriseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entreprises to fetch.
     */
    orderBy?: EntrepriseOrderByWithRelationInput | EntrepriseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entreprises.
     */
    cursor?: EntrepriseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entreprises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entreprises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entreprises.
     */
    distinct?: EntrepriseScalarFieldEnum | EntrepriseScalarFieldEnum[]
  }

  /**
   * Entreprise findMany
   */
  export type EntrepriseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Filter, which Entreprises to fetch.
     */
    where?: EntrepriseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entreprises to fetch.
     */
    orderBy?: EntrepriseOrderByWithRelationInput | EntrepriseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Entreprises.
     */
    cursor?: EntrepriseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entreprises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entreprises.
     */
    skip?: number
    distinct?: EntrepriseScalarFieldEnum | EntrepriseScalarFieldEnum[]
  }

  /**
   * Entreprise create
   */
  export type EntrepriseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * The data needed to create a Entreprise.
     */
    data: XOR<EntrepriseCreateInput, EntrepriseUncheckedCreateInput>
  }

  /**
   * Entreprise createMany
   */
  export type EntrepriseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Entreprises.
     */
    data: EntrepriseCreateManyInput | EntrepriseCreateManyInput[]
  }

  /**
   * Entreprise createManyAndReturn
   */
  export type EntrepriseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * The data used to create many Entreprises.
     */
    data: EntrepriseCreateManyInput | EntrepriseCreateManyInput[]
  }

  /**
   * Entreprise update
   */
  export type EntrepriseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * The data needed to update a Entreprise.
     */
    data: XOR<EntrepriseUpdateInput, EntrepriseUncheckedUpdateInput>
    /**
     * Choose, which Entreprise to update.
     */
    where: EntrepriseWhereUniqueInput
  }

  /**
   * Entreprise updateMany
   */
  export type EntrepriseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Entreprises.
     */
    data: XOR<EntrepriseUpdateManyMutationInput, EntrepriseUncheckedUpdateManyInput>
    /**
     * Filter which Entreprises to update
     */
    where?: EntrepriseWhereInput
    /**
     * Limit how many Entreprises to update.
     */
    limit?: number
  }

  /**
   * Entreprise updateManyAndReturn
   */
  export type EntrepriseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * The data used to update Entreprises.
     */
    data: XOR<EntrepriseUpdateManyMutationInput, EntrepriseUncheckedUpdateManyInput>
    /**
     * Filter which Entreprises to update
     */
    where?: EntrepriseWhereInput
    /**
     * Limit how many Entreprises to update.
     */
    limit?: number
  }

  /**
   * Entreprise upsert
   */
  export type EntrepriseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * The filter to search for the Entreprise to update in case it exists.
     */
    where: EntrepriseWhereUniqueInput
    /**
     * In case the Entreprise found by the `where` argument doesn't exist, create a new Entreprise with this data.
     */
    create: XOR<EntrepriseCreateInput, EntrepriseUncheckedCreateInput>
    /**
     * In case the Entreprise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EntrepriseUpdateInput, EntrepriseUncheckedUpdateInput>
  }

  /**
   * Entreprise delete
   */
  export type EntrepriseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Filter which Entreprise to delete.
     */
    where: EntrepriseWhereUniqueInput
  }

  /**
   * Entreprise deleteMany
   */
  export type EntrepriseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entreprises to delete
     */
    where?: EntrepriseWhereInput
    /**
     * Limit how many Entreprises to delete.
     */
    limit?: number
  }

  /**
   * Entreprise without action
   */
  export type EntrepriseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientAvgAggregateOutputType = {
    id: number | null
  }

  export type ClientSumAggregateOutputType = {
    id: number | null
  }

  export type ClientMinAggregateOutputType = {
    id: number | null
    CIN: string | null
    nom: string | null
    prenom: string | null
    date_naissance: Date | null
    adresse: string | null
    numero_telephone: string | null
    email: string | null
    groupe_sanguin: string | null
    antecedents: string | null
    allergies: string | null
    commentaire: string | null
    created_at: Date | null
    Cree_par: string | null
  }

  export type ClientMaxAggregateOutputType = {
    id: number | null
    CIN: string | null
    nom: string | null
    prenom: string | null
    date_naissance: Date | null
    adresse: string | null
    numero_telephone: string | null
    email: string | null
    groupe_sanguin: string | null
    antecedents: string | null
    allergies: string | null
    commentaire: string | null
    created_at: Date | null
    Cree_par: string | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    CIN: number
    nom: number
    prenom: number
    date_naissance: number
    adresse: number
    numero_telephone: number
    email: number
    groupe_sanguin: number
    antecedents: number
    allergies: number
    commentaire: number
    created_at: number
    Cree_par: number
    _all: number
  }


  export type ClientAvgAggregateInputType = {
    id?: true
  }

  export type ClientSumAggregateInputType = {
    id?: true
  }

  export type ClientMinAggregateInputType = {
    id?: true
    CIN?: true
    nom?: true
    prenom?: true
    date_naissance?: true
    adresse?: true
    numero_telephone?: true
    email?: true
    groupe_sanguin?: true
    antecedents?: true
    allergies?: true
    commentaire?: true
    created_at?: true
    Cree_par?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    CIN?: true
    nom?: true
    prenom?: true
    date_naissance?: true
    adresse?: true
    numero_telephone?: true
    email?: true
    groupe_sanguin?: true
    antecedents?: true
    allergies?: true
    commentaire?: true
    created_at?: true
    Cree_par?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    CIN?: true
    nom?: true
    prenom?: true
    date_naissance?: true
    adresse?: true
    numero_telephone?: true
    email?: true
    groupe_sanguin?: true
    antecedents?: true
    allergies?: true
    commentaire?: true
    created_at?: true
    Cree_par?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _avg?: ClientAvgAggregateInputType
    _sum?: ClientSumAggregateInputType
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: number
    CIN: string
    nom: string
    prenom: string
    date_naissance: Date
    adresse: string
    numero_telephone: string
    email: string
    groupe_sanguin: string
    antecedents: string | null
    allergies: string | null
    commentaire: string | null
    created_at: Date
    Cree_par: string
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    CIN?: boolean
    nom?: boolean
    prenom?: boolean
    date_naissance?: boolean
    adresse?: boolean
    numero_telephone?: boolean
    email?: boolean
    groupe_sanguin?: boolean
    antecedents?: boolean
    allergies?: boolean
    commentaire?: boolean
    created_at?: boolean
    Cree_par?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    rendez_vous?: boolean | Client$rendez_vousArgs<ExtArgs>
    documents?: boolean | Client$documentsArgs<ExtArgs>
    factures?: boolean | Client$facturesArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    CIN?: boolean
    nom?: boolean
    prenom?: boolean
    date_naissance?: boolean
    adresse?: boolean
    numero_telephone?: boolean
    email?: boolean
    groupe_sanguin?: boolean
    antecedents?: boolean
    allergies?: boolean
    commentaire?: boolean
    created_at?: boolean
    Cree_par?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    CIN?: boolean
    nom?: boolean
    prenom?: boolean
    date_naissance?: boolean
    adresse?: boolean
    numero_telephone?: boolean
    email?: boolean
    groupe_sanguin?: boolean
    antecedents?: boolean
    allergies?: boolean
    commentaire?: boolean
    created_at?: boolean
    Cree_par?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    CIN?: boolean
    nom?: boolean
    prenom?: boolean
    date_naissance?: boolean
    adresse?: boolean
    numero_telephone?: boolean
    email?: boolean
    groupe_sanguin?: boolean
    antecedents?: boolean
    allergies?: boolean
    commentaire?: boolean
    created_at?: boolean
    Cree_par?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "CIN" | "nom" | "prenom" | "date_naissance" | "adresse" | "numero_telephone" | "email" | "groupe_sanguin" | "antecedents" | "allergies" | "commentaire" | "created_at" | "Cree_par", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    rendez_vous?: boolean | Client$rendez_vousArgs<ExtArgs>
    documents?: boolean | Client$documentsArgs<ExtArgs>
    factures?: boolean | Client$facturesArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      utilisateur: Prisma.$UtilisateurPayload<ExtArgs>
      rendez_vous: Prisma.$rendez_vousPayload<ExtArgs>[]
      documents: Prisma.$documentPayload<ExtArgs>[]
      factures: Prisma.$facturePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      CIN: string
      nom: string
      prenom: string
      date_naissance: Date
      adresse: string
      numero_telephone: string
      email: string
      groupe_sanguin: string
      antecedents: string | null
      allergies: string | null
      commentaire: string | null
      created_at: Date
      Cree_par: string
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    utilisateur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rendez_vous<T extends Client$rendez_vousArgs<ExtArgs> = {}>(args?: Subset<T, Client$rendez_vousArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rendez_vousPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documents<T extends Client$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Client$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    factures<T extends Client$facturesArgs<ExtArgs> = {}>(args?: Subset<T, Client$facturesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$facturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'Int'>
    readonly CIN: FieldRef<"Client", 'String'>
    readonly nom: FieldRef<"Client", 'String'>
    readonly prenom: FieldRef<"Client", 'String'>
    readonly date_naissance: FieldRef<"Client", 'DateTime'>
    readonly adresse: FieldRef<"Client", 'String'>
    readonly numero_telephone: FieldRef<"Client", 'String'>
    readonly email: FieldRef<"Client", 'String'>
    readonly groupe_sanguin: FieldRef<"Client", 'String'>
    readonly antecedents: FieldRef<"Client", 'String'>
    readonly allergies: FieldRef<"Client", 'String'>
    readonly commentaire: FieldRef<"Client", 'String'>
    readonly created_at: FieldRef<"Client", 'DateTime'>
    readonly Cree_par: FieldRef<"Client", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.rendez_vous
   */
  export type Client$rendez_vousArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rendez_vous
     */
    select?: rendez_vousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rendez_vous
     */
    omit?: rendez_vousOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rendez_vousInclude<ExtArgs> | null
    where?: rendez_vousWhereInput
    orderBy?: rendez_vousOrderByWithRelationInput | rendez_vousOrderByWithRelationInput[]
    cursor?: rendez_vousWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Rendez_vousScalarFieldEnum | Rendez_vousScalarFieldEnum[]
  }

  /**
   * Client.documents
   */
  export type Client$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document
     */
    omit?: documentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentInclude<ExtArgs> | null
    where?: documentWhereInput
    orderBy?: documentOrderByWithRelationInput | documentOrderByWithRelationInput[]
    cursor?: documentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Client.factures
   */
  export type Client$facturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facture
     */
    select?: factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facture
     */
    omit?: factureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: factureInclude<ExtArgs> | null
    where?: factureWhereInput
    orderBy?: factureOrderByWithRelationInput | factureOrderByWithRelationInput[]
    cursor?: factureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FactureScalarFieldEnum | FactureScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model rendez_vous
   */

  export type AggregateRendez_vous = {
    _count: Rendez_vousCountAggregateOutputType | null
    _avg: Rendez_vousAvgAggregateOutputType | null
    _sum: Rendez_vousSumAggregateOutputType | null
    _min: Rendez_vousMinAggregateOutputType | null
    _max: Rendez_vousMaxAggregateOutputType | null
  }

  export type Rendez_vousAvgAggregateOutputType = {
    id: number | null
  }

  export type Rendez_vousSumAggregateOutputType = {
    id: number | null
  }

  export type Rendez_vousMinAggregateOutputType = {
    id: number | null
    CIN: string | null
    sujet: string | null
    date_rendez_vous: Date | null
    created_at: Date | null
    Cree_par: string | null
  }

  export type Rendez_vousMaxAggregateOutputType = {
    id: number | null
    CIN: string | null
    sujet: string | null
    date_rendez_vous: Date | null
    created_at: Date | null
    Cree_par: string | null
  }

  export type Rendez_vousCountAggregateOutputType = {
    id: number
    CIN: number
    sujet: number
    date_rendez_vous: number
    created_at: number
    Cree_par: number
    _all: number
  }


  export type Rendez_vousAvgAggregateInputType = {
    id?: true
  }

  export type Rendez_vousSumAggregateInputType = {
    id?: true
  }

  export type Rendez_vousMinAggregateInputType = {
    id?: true
    CIN?: true
    sujet?: true
    date_rendez_vous?: true
    created_at?: true
    Cree_par?: true
  }

  export type Rendez_vousMaxAggregateInputType = {
    id?: true
    CIN?: true
    sujet?: true
    date_rendez_vous?: true
    created_at?: true
    Cree_par?: true
  }

  export type Rendez_vousCountAggregateInputType = {
    id?: true
    CIN?: true
    sujet?: true
    date_rendez_vous?: true
    created_at?: true
    Cree_par?: true
    _all?: true
  }

  export type Rendez_vousAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rendez_vous to aggregate.
     */
    where?: rendez_vousWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rendez_vous to fetch.
     */
    orderBy?: rendez_vousOrderByWithRelationInput | rendez_vousOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rendez_vousWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rendez_vous from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rendez_vous.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rendez_vous
    **/
    _count?: true | Rendez_vousCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Rendez_vousAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Rendez_vousSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Rendez_vousMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Rendez_vousMaxAggregateInputType
  }

  export type GetRendez_vousAggregateType<T extends Rendez_vousAggregateArgs> = {
        [P in keyof T & keyof AggregateRendez_vous]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRendez_vous[P]>
      : GetScalarType<T[P], AggregateRendez_vous[P]>
  }




  export type rendez_vousGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rendez_vousWhereInput
    orderBy?: rendez_vousOrderByWithAggregationInput | rendez_vousOrderByWithAggregationInput[]
    by: Rendez_vousScalarFieldEnum[] | Rendez_vousScalarFieldEnum
    having?: rendez_vousScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Rendez_vousCountAggregateInputType | true
    _avg?: Rendez_vousAvgAggregateInputType
    _sum?: Rendez_vousSumAggregateInputType
    _min?: Rendez_vousMinAggregateInputType
    _max?: Rendez_vousMaxAggregateInputType
  }

  export type Rendez_vousGroupByOutputType = {
    id: number
    CIN: string
    sujet: string
    date_rendez_vous: Date
    created_at: Date
    Cree_par: string
    _count: Rendez_vousCountAggregateOutputType | null
    _avg: Rendez_vousAvgAggregateOutputType | null
    _sum: Rendez_vousSumAggregateOutputType | null
    _min: Rendez_vousMinAggregateOutputType | null
    _max: Rendez_vousMaxAggregateOutputType | null
  }

  type GetRendez_vousGroupByPayload<T extends rendez_vousGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Rendez_vousGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Rendez_vousGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Rendez_vousGroupByOutputType[P]>
            : GetScalarType<T[P], Rendez_vousGroupByOutputType[P]>
        }
      >
    >


  export type rendez_vousSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    CIN?: boolean
    sujet?: boolean
    date_rendez_vous?: boolean
    created_at?: boolean
    Cree_par?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rendez_vous"]>

  export type rendez_vousSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    CIN?: boolean
    sujet?: boolean
    date_rendez_vous?: boolean
    created_at?: boolean
    Cree_par?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rendez_vous"]>

  export type rendez_vousSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    CIN?: boolean
    sujet?: boolean
    date_rendez_vous?: boolean
    created_at?: boolean
    Cree_par?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rendez_vous"]>

  export type rendez_vousSelectScalar = {
    id?: boolean
    CIN?: boolean
    sujet?: boolean
    date_rendez_vous?: boolean
    created_at?: boolean
    Cree_par?: boolean
  }

  export type rendez_vousOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "CIN" | "sujet" | "date_rendez_vous" | "created_at" | "Cree_par", ExtArgs["result"]["rendez_vous"]>
  export type rendez_vousInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }
  export type rendez_vousIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }
  export type rendez_vousIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }

  export type $rendez_vousPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rendez_vous"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      utilisateur: Prisma.$UtilisateurPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      CIN: string
      sujet: string
      date_rendez_vous: Date
      created_at: Date
      Cree_par: string
    }, ExtArgs["result"]["rendez_vous"]>
    composites: {}
  }

  type rendez_vousGetPayload<S extends boolean | null | undefined | rendez_vousDefaultArgs> = $Result.GetResult<Prisma.$rendez_vousPayload, S>

  type rendez_vousCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rendez_vousFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Rendez_vousCountAggregateInputType | true
    }

  export interface rendez_vousDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rendez_vous'], meta: { name: 'rendez_vous' } }
    /**
     * Find zero or one Rendez_vous that matches the filter.
     * @param {rendez_vousFindUniqueArgs} args - Arguments to find a Rendez_vous
     * @example
     * // Get one Rendez_vous
     * const rendez_vous = await prisma.rendez_vous.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rendez_vousFindUniqueArgs>(args: SelectSubset<T, rendez_vousFindUniqueArgs<ExtArgs>>): Prisma__rendez_vousClient<$Result.GetResult<Prisma.$rendez_vousPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rendez_vous that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rendez_vousFindUniqueOrThrowArgs} args - Arguments to find a Rendez_vous
     * @example
     * // Get one Rendez_vous
     * const rendez_vous = await prisma.rendez_vous.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rendez_vousFindUniqueOrThrowArgs>(args: SelectSubset<T, rendez_vousFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rendez_vousClient<$Result.GetResult<Prisma.$rendez_vousPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rendez_vous that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rendez_vousFindFirstArgs} args - Arguments to find a Rendez_vous
     * @example
     * // Get one Rendez_vous
     * const rendez_vous = await prisma.rendez_vous.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rendez_vousFindFirstArgs>(args?: SelectSubset<T, rendez_vousFindFirstArgs<ExtArgs>>): Prisma__rendez_vousClient<$Result.GetResult<Prisma.$rendez_vousPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rendez_vous that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rendez_vousFindFirstOrThrowArgs} args - Arguments to find a Rendez_vous
     * @example
     * // Get one Rendez_vous
     * const rendez_vous = await prisma.rendez_vous.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rendez_vousFindFirstOrThrowArgs>(args?: SelectSubset<T, rendez_vousFindFirstOrThrowArgs<ExtArgs>>): Prisma__rendez_vousClient<$Result.GetResult<Prisma.$rendez_vousPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rendez_vous that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rendez_vousFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rendez_vous
     * const rendez_vous = await prisma.rendez_vous.findMany()
     * 
     * // Get first 10 Rendez_vous
     * const rendez_vous = await prisma.rendez_vous.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rendez_vousWithIdOnly = await prisma.rendez_vous.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends rendez_vousFindManyArgs>(args?: SelectSubset<T, rendez_vousFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rendez_vousPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rendez_vous.
     * @param {rendez_vousCreateArgs} args - Arguments to create a Rendez_vous.
     * @example
     * // Create one Rendez_vous
     * const Rendez_vous = await prisma.rendez_vous.create({
     *   data: {
     *     // ... data to create a Rendez_vous
     *   }
     * })
     * 
     */
    create<T extends rendez_vousCreateArgs>(args: SelectSubset<T, rendez_vousCreateArgs<ExtArgs>>): Prisma__rendez_vousClient<$Result.GetResult<Prisma.$rendez_vousPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rendez_vous.
     * @param {rendez_vousCreateManyArgs} args - Arguments to create many Rendez_vous.
     * @example
     * // Create many Rendez_vous
     * const rendez_vous = await prisma.rendez_vous.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rendez_vousCreateManyArgs>(args?: SelectSubset<T, rendez_vousCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rendez_vous and returns the data saved in the database.
     * @param {rendez_vousCreateManyAndReturnArgs} args - Arguments to create many Rendez_vous.
     * @example
     * // Create many Rendez_vous
     * const rendez_vous = await prisma.rendez_vous.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rendez_vous and only return the `id`
     * const rendez_vousWithIdOnly = await prisma.rendez_vous.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends rendez_vousCreateManyAndReturnArgs>(args?: SelectSubset<T, rendez_vousCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rendez_vousPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rendez_vous.
     * @param {rendez_vousDeleteArgs} args - Arguments to delete one Rendez_vous.
     * @example
     * // Delete one Rendez_vous
     * const Rendez_vous = await prisma.rendez_vous.delete({
     *   where: {
     *     // ... filter to delete one Rendez_vous
     *   }
     * })
     * 
     */
    delete<T extends rendez_vousDeleteArgs>(args: SelectSubset<T, rendez_vousDeleteArgs<ExtArgs>>): Prisma__rendez_vousClient<$Result.GetResult<Prisma.$rendez_vousPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rendez_vous.
     * @param {rendez_vousUpdateArgs} args - Arguments to update one Rendez_vous.
     * @example
     * // Update one Rendez_vous
     * const rendez_vous = await prisma.rendez_vous.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rendez_vousUpdateArgs>(args: SelectSubset<T, rendez_vousUpdateArgs<ExtArgs>>): Prisma__rendez_vousClient<$Result.GetResult<Prisma.$rendez_vousPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rendez_vous.
     * @param {rendez_vousDeleteManyArgs} args - Arguments to filter Rendez_vous to delete.
     * @example
     * // Delete a few Rendez_vous
     * const { count } = await prisma.rendez_vous.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rendez_vousDeleteManyArgs>(args?: SelectSubset<T, rendez_vousDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rendez_vous.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rendez_vousUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rendez_vous
     * const rendez_vous = await prisma.rendez_vous.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rendez_vousUpdateManyArgs>(args: SelectSubset<T, rendez_vousUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rendez_vous and returns the data updated in the database.
     * @param {rendez_vousUpdateManyAndReturnArgs} args - Arguments to update many Rendez_vous.
     * @example
     * // Update many Rendez_vous
     * const rendez_vous = await prisma.rendez_vous.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rendez_vous and only return the `id`
     * const rendez_vousWithIdOnly = await prisma.rendez_vous.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends rendez_vousUpdateManyAndReturnArgs>(args: SelectSubset<T, rendez_vousUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rendez_vousPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rendez_vous.
     * @param {rendez_vousUpsertArgs} args - Arguments to update or create a Rendez_vous.
     * @example
     * // Update or create a Rendez_vous
     * const rendez_vous = await prisma.rendez_vous.upsert({
     *   create: {
     *     // ... data to create a Rendez_vous
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rendez_vous we want to update
     *   }
     * })
     */
    upsert<T extends rendez_vousUpsertArgs>(args: SelectSubset<T, rendez_vousUpsertArgs<ExtArgs>>): Prisma__rendez_vousClient<$Result.GetResult<Prisma.$rendez_vousPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rendez_vous.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rendez_vousCountArgs} args - Arguments to filter Rendez_vous to count.
     * @example
     * // Count the number of Rendez_vous
     * const count = await prisma.rendez_vous.count({
     *   where: {
     *     // ... the filter for the Rendez_vous we want to count
     *   }
     * })
    **/
    count<T extends rendez_vousCountArgs>(
      args?: Subset<T, rendez_vousCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Rendez_vousCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rendez_vous.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Rendez_vousAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Rendez_vousAggregateArgs>(args: Subset<T, Rendez_vousAggregateArgs>): Prisma.PrismaPromise<GetRendez_vousAggregateType<T>>

    /**
     * Group by Rendez_vous.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rendez_vousGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends rendez_vousGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rendez_vousGroupByArgs['orderBy'] }
        : { orderBy?: rendez_vousGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, rendez_vousGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRendez_vousGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rendez_vous model
   */
  readonly fields: rendez_vousFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rendez_vous.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rendez_vousClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    utilisateur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the rendez_vous model
   */
  interface rendez_vousFieldRefs {
    readonly id: FieldRef<"rendez_vous", 'Int'>
    readonly CIN: FieldRef<"rendez_vous", 'String'>
    readonly sujet: FieldRef<"rendez_vous", 'String'>
    readonly date_rendez_vous: FieldRef<"rendez_vous", 'DateTime'>
    readonly created_at: FieldRef<"rendez_vous", 'DateTime'>
    readonly Cree_par: FieldRef<"rendez_vous", 'String'>
  }
    

  // Custom InputTypes
  /**
   * rendez_vous findUnique
   */
  export type rendez_vousFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rendez_vous
     */
    select?: rendez_vousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rendez_vous
     */
    omit?: rendez_vousOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rendez_vousInclude<ExtArgs> | null
    /**
     * Filter, which rendez_vous to fetch.
     */
    where: rendez_vousWhereUniqueInput
  }

  /**
   * rendez_vous findUniqueOrThrow
   */
  export type rendez_vousFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rendez_vous
     */
    select?: rendez_vousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rendez_vous
     */
    omit?: rendez_vousOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rendez_vousInclude<ExtArgs> | null
    /**
     * Filter, which rendez_vous to fetch.
     */
    where: rendez_vousWhereUniqueInput
  }

  /**
   * rendez_vous findFirst
   */
  export type rendez_vousFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rendez_vous
     */
    select?: rendez_vousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rendez_vous
     */
    omit?: rendez_vousOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rendez_vousInclude<ExtArgs> | null
    /**
     * Filter, which rendez_vous to fetch.
     */
    where?: rendez_vousWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rendez_vous to fetch.
     */
    orderBy?: rendez_vousOrderByWithRelationInput | rendez_vousOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rendez_vous.
     */
    cursor?: rendez_vousWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rendez_vous from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rendez_vous.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rendez_vous.
     */
    distinct?: Rendez_vousScalarFieldEnum | Rendez_vousScalarFieldEnum[]
  }

  /**
   * rendez_vous findFirstOrThrow
   */
  export type rendez_vousFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rendez_vous
     */
    select?: rendez_vousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rendez_vous
     */
    omit?: rendez_vousOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rendez_vousInclude<ExtArgs> | null
    /**
     * Filter, which rendez_vous to fetch.
     */
    where?: rendez_vousWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rendez_vous to fetch.
     */
    orderBy?: rendez_vousOrderByWithRelationInput | rendez_vousOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rendez_vous.
     */
    cursor?: rendez_vousWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rendez_vous from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rendez_vous.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rendez_vous.
     */
    distinct?: Rendez_vousScalarFieldEnum | Rendez_vousScalarFieldEnum[]
  }

  /**
   * rendez_vous findMany
   */
  export type rendez_vousFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rendez_vous
     */
    select?: rendez_vousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rendez_vous
     */
    omit?: rendez_vousOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rendez_vousInclude<ExtArgs> | null
    /**
     * Filter, which rendez_vous to fetch.
     */
    where?: rendez_vousWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rendez_vous to fetch.
     */
    orderBy?: rendez_vousOrderByWithRelationInput | rendez_vousOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rendez_vous.
     */
    cursor?: rendez_vousWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rendez_vous from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rendez_vous.
     */
    skip?: number
    distinct?: Rendez_vousScalarFieldEnum | Rendez_vousScalarFieldEnum[]
  }

  /**
   * rendez_vous create
   */
  export type rendez_vousCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rendez_vous
     */
    select?: rendez_vousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rendez_vous
     */
    omit?: rendez_vousOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rendez_vousInclude<ExtArgs> | null
    /**
     * The data needed to create a rendez_vous.
     */
    data: XOR<rendez_vousCreateInput, rendez_vousUncheckedCreateInput>
  }

  /**
   * rendez_vous createMany
   */
  export type rendez_vousCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rendez_vous.
     */
    data: rendez_vousCreateManyInput | rendez_vousCreateManyInput[]
  }

  /**
   * rendez_vous createManyAndReturn
   */
  export type rendez_vousCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rendez_vous
     */
    select?: rendez_vousSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rendez_vous
     */
    omit?: rendez_vousOmit<ExtArgs> | null
    /**
     * The data used to create many rendez_vous.
     */
    data: rendez_vousCreateManyInput | rendez_vousCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rendez_vousIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * rendez_vous update
   */
  export type rendez_vousUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rendez_vous
     */
    select?: rendez_vousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rendez_vous
     */
    omit?: rendez_vousOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rendez_vousInclude<ExtArgs> | null
    /**
     * The data needed to update a rendez_vous.
     */
    data: XOR<rendez_vousUpdateInput, rendez_vousUncheckedUpdateInput>
    /**
     * Choose, which rendez_vous to update.
     */
    where: rendez_vousWhereUniqueInput
  }

  /**
   * rendez_vous updateMany
   */
  export type rendez_vousUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rendez_vous.
     */
    data: XOR<rendez_vousUpdateManyMutationInput, rendez_vousUncheckedUpdateManyInput>
    /**
     * Filter which rendez_vous to update
     */
    where?: rendez_vousWhereInput
    /**
     * Limit how many rendez_vous to update.
     */
    limit?: number
  }

  /**
   * rendez_vous updateManyAndReturn
   */
  export type rendez_vousUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rendez_vous
     */
    select?: rendez_vousSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rendez_vous
     */
    omit?: rendez_vousOmit<ExtArgs> | null
    /**
     * The data used to update rendez_vous.
     */
    data: XOR<rendez_vousUpdateManyMutationInput, rendez_vousUncheckedUpdateManyInput>
    /**
     * Filter which rendez_vous to update
     */
    where?: rendez_vousWhereInput
    /**
     * Limit how many rendez_vous to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rendez_vousIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * rendez_vous upsert
   */
  export type rendez_vousUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rendez_vous
     */
    select?: rendez_vousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rendez_vous
     */
    omit?: rendez_vousOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rendez_vousInclude<ExtArgs> | null
    /**
     * The filter to search for the rendez_vous to update in case it exists.
     */
    where: rendez_vousWhereUniqueInput
    /**
     * In case the rendez_vous found by the `where` argument doesn't exist, create a new rendez_vous with this data.
     */
    create: XOR<rendez_vousCreateInput, rendez_vousUncheckedCreateInput>
    /**
     * In case the rendez_vous was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rendez_vousUpdateInput, rendez_vousUncheckedUpdateInput>
  }

  /**
   * rendez_vous delete
   */
  export type rendez_vousDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rendez_vous
     */
    select?: rendez_vousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rendez_vous
     */
    omit?: rendez_vousOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rendez_vousInclude<ExtArgs> | null
    /**
     * Filter which rendez_vous to delete.
     */
    where: rendez_vousWhereUniqueInput
  }

  /**
   * rendez_vous deleteMany
   */
  export type rendez_vousDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rendez_vous to delete
     */
    where?: rendez_vousWhereInput
    /**
     * Limit how many rendez_vous to delete.
     */
    limit?: number
  }

  /**
   * rendez_vous without action
   */
  export type rendez_vousDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rendez_vous
     */
    select?: rendez_vousSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rendez_vous
     */
    omit?: rendez_vousOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rendez_vousInclude<ExtArgs> | null
  }


  /**
   * Model document_templates
   */

  export type AggregateDocument_templates = {
    _count: Document_templatesCountAggregateOutputType | null
    _avg: Document_templatesAvgAggregateOutputType | null
    _sum: Document_templatesSumAggregateOutputType | null
    _min: Document_templatesMinAggregateOutputType | null
    _max: Document_templatesMaxAggregateOutputType | null
  }

  export type Document_templatesAvgAggregateOutputType = {
    id: number | null
  }

  export type Document_templatesSumAggregateOutputType = {
    id: number | null
  }

  export type Document_templatesMinAggregateOutputType = {
    id: number | null
    name: string | null
    sections_json: string | null
    Cree_par: string | null
  }

  export type Document_templatesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    sections_json: string | null
    Cree_par: string | null
  }

  export type Document_templatesCountAggregateOutputType = {
    id: number
    name: number
    sections_json: number
    Cree_par: number
    _all: number
  }


  export type Document_templatesAvgAggregateInputType = {
    id?: true
  }

  export type Document_templatesSumAggregateInputType = {
    id?: true
  }

  export type Document_templatesMinAggregateInputType = {
    id?: true
    name?: true
    sections_json?: true
    Cree_par?: true
  }

  export type Document_templatesMaxAggregateInputType = {
    id?: true
    name?: true
    sections_json?: true
    Cree_par?: true
  }

  export type Document_templatesCountAggregateInputType = {
    id?: true
    name?: true
    sections_json?: true
    Cree_par?: true
    _all?: true
  }

  export type Document_templatesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which document_templates to aggregate.
     */
    where?: document_templatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of document_templates to fetch.
     */
    orderBy?: document_templatesOrderByWithRelationInput | document_templatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: document_templatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` document_templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` document_templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned document_templates
    **/
    _count?: true | Document_templatesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Document_templatesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Document_templatesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Document_templatesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Document_templatesMaxAggregateInputType
  }

  export type GetDocument_templatesAggregateType<T extends Document_templatesAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument_templates]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument_templates[P]>
      : GetScalarType<T[P], AggregateDocument_templates[P]>
  }




  export type document_templatesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: document_templatesWhereInput
    orderBy?: document_templatesOrderByWithAggregationInput | document_templatesOrderByWithAggregationInput[]
    by: Document_templatesScalarFieldEnum[] | Document_templatesScalarFieldEnum
    having?: document_templatesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Document_templatesCountAggregateInputType | true
    _avg?: Document_templatesAvgAggregateInputType
    _sum?: Document_templatesSumAggregateInputType
    _min?: Document_templatesMinAggregateInputType
    _max?: Document_templatesMaxAggregateInputType
  }

  export type Document_templatesGroupByOutputType = {
    id: number
    name: string
    sections_json: string
    Cree_par: string
    _count: Document_templatesCountAggregateOutputType | null
    _avg: Document_templatesAvgAggregateOutputType | null
    _sum: Document_templatesSumAggregateOutputType | null
    _min: Document_templatesMinAggregateOutputType | null
    _max: Document_templatesMaxAggregateOutputType | null
  }

  type GetDocument_templatesGroupByPayload<T extends document_templatesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Document_templatesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Document_templatesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Document_templatesGroupByOutputType[P]>
            : GetScalarType<T[P], Document_templatesGroupByOutputType[P]>
        }
      >
    >


  export type document_templatesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sections_json?: boolean
    Cree_par?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    documents?: boolean | document_templates$documentsArgs<ExtArgs>
    _count?: boolean | Document_templatesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document_templates"]>

  export type document_templatesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sections_json?: boolean
    Cree_par?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document_templates"]>

  export type document_templatesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sections_json?: boolean
    Cree_par?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document_templates"]>

  export type document_templatesSelectScalar = {
    id?: boolean
    name?: boolean
    sections_json?: boolean
    Cree_par?: boolean
  }

  export type document_templatesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "sections_json" | "Cree_par", ExtArgs["result"]["document_templates"]>
  export type document_templatesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    documents?: boolean | document_templates$documentsArgs<ExtArgs>
    _count?: boolean | Document_templatesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type document_templatesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }
  export type document_templatesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }

  export type $document_templatesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "document_templates"
    objects: {
      utilisateur: Prisma.$UtilisateurPayload<ExtArgs>
      documents: Prisma.$documentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      sections_json: string
      Cree_par: string
    }, ExtArgs["result"]["document_templates"]>
    composites: {}
  }

  type document_templatesGetPayload<S extends boolean | null | undefined | document_templatesDefaultArgs> = $Result.GetResult<Prisma.$document_templatesPayload, S>

  type document_templatesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<document_templatesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Document_templatesCountAggregateInputType | true
    }

  export interface document_templatesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['document_templates'], meta: { name: 'document_templates' } }
    /**
     * Find zero or one Document_templates that matches the filter.
     * @param {document_templatesFindUniqueArgs} args - Arguments to find a Document_templates
     * @example
     * // Get one Document_templates
     * const document_templates = await prisma.document_templates.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends document_templatesFindUniqueArgs>(args: SelectSubset<T, document_templatesFindUniqueArgs<ExtArgs>>): Prisma__document_templatesClient<$Result.GetResult<Prisma.$document_templatesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document_templates that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {document_templatesFindUniqueOrThrowArgs} args - Arguments to find a Document_templates
     * @example
     * // Get one Document_templates
     * const document_templates = await prisma.document_templates.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends document_templatesFindUniqueOrThrowArgs>(args: SelectSubset<T, document_templatesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__document_templatesClient<$Result.GetResult<Prisma.$document_templatesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document_templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {document_templatesFindFirstArgs} args - Arguments to find a Document_templates
     * @example
     * // Get one Document_templates
     * const document_templates = await prisma.document_templates.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends document_templatesFindFirstArgs>(args?: SelectSubset<T, document_templatesFindFirstArgs<ExtArgs>>): Prisma__document_templatesClient<$Result.GetResult<Prisma.$document_templatesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document_templates that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {document_templatesFindFirstOrThrowArgs} args - Arguments to find a Document_templates
     * @example
     * // Get one Document_templates
     * const document_templates = await prisma.document_templates.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends document_templatesFindFirstOrThrowArgs>(args?: SelectSubset<T, document_templatesFindFirstOrThrowArgs<ExtArgs>>): Prisma__document_templatesClient<$Result.GetResult<Prisma.$document_templatesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Document_templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {document_templatesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Document_templates
     * const document_templates = await prisma.document_templates.findMany()
     * 
     * // Get first 10 Document_templates
     * const document_templates = await prisma.document_templates.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const document_templatesWithIdOnly = await prisma.document_templates.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends document_templatesFindManyArgs>(args?: SelectSubset<T, document_templatesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$document_templatesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document_templates.
     * @param {document_templatesCreateArgs} args - Arguments to create a Document_templates.
     * @example
     * // Create one Document_templates
     * const Document_templates = await prisma.document_templates.create({
     *   data: {
     *     // ... data to create a Document_templates
     *   }
     * })
     * 
     */
    create<T extends document_templatesCreateArgs>(args: SelectSubset<T, document_templatesCreateArgs<ExtArgs>>): Prisma__document_templatesClient<$Result.GetResult<Prisma.$document_templatesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Document_templates.
     * @param {document_templatesCreateManyArgs} args - Arguments to create many Document_templates.
     * @example
     * // Create many Document_templates
     * const document_templates = await prisma.document_templates.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends document_templatesCreateManyArgs>(args?: SelectSubset<T, document_templatesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Document_templates and returns the data saved in the database.
     * @param {document_templatesCreateManyAndReturnArgs} args - Arguments to create many Document_templates.
     * @example
     * // Create many Document_templates
     * const document_templates = await prisma.document_templates.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Document_templates and only return the `id`
     * const document_templatesWithIdOnly = await prisma.document_templates.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends document_templatesCreateManyAndReturnArgs>(args?: SelectSubset<T, document_templatesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$document_templatesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Document_templates.
     * @param {document_templatesDeleteArgs} args - Arguments to delete one Document_templates.
     * @example
     * // Delete one Document_templates
     * const Document_templates = await prisma.document_templates.delete({
     *   where: {
     *     // ... filter to delete one Document_templates
     *   }
     * })
     * 
     */
    delete<T extends document_templatesDeleteArgs>(args: SelectSubset<T, document_templatesDeleteArgs<ExtArgs>>): Prisma__document_templatesClient<$Result.GetResult<Prisma.$document_templatesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document_templates.
     * @param {document_templatesUpdateArgs} args - Arguments to update one Document_templates.
     * @example
     * // Update one Document_templates
     * const document_templates = await prisma.document_templates.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends document_templatesUpdateArgs>(args: SelectSubset<T, document_templatesUpdateArgs<ExtArgs>>): Prisma__document_templatesClient<$Result.GetResult<Prisma.$document_templatesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Document_templates.
     * @param {document_templatesDeleteManyArgs} args - Arguments to filter Document_templates to delete.
     * @example
     * // Delete a few Document_templates
     * const { count } = await prisma.document_templates.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends document_templatesDeleteManyArgs>(args?: SelectSubset<T, document_templatesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Document_templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {document_templatesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Document_templates
     * const document_templates = await prisma.document_templates.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends document_templatesUpdateManyArgs>(args: SelectSubset<T, document_templatesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Document_templates and returns the data updated in the database.
     * @param {document_templatesUpdateManyAndReturnArgs} args - Arguments to update many Document_templates.
     * @example
     * // Update many Document_templates
     * const document_templates = await prisma.document_templates.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Document_templates and only return the `id`
     * const document_templatesWithIdOnly = await prisma.document_templates.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends document_templatesUpdateManyAndReturnArgs>(args: SelectSubset<T, document_templatesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$document_templatesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Document_templates.
     * @param {document_templatesUpsertArgs} args - Arguments to update or create a Document_templates.
     * @example
     * // Update or create a Document_templates
     * const document_templates = await prisma.document_templates.upsert({
     *   create: {
     *     // ... data to create a Document_templates
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document_templates we want to update
     *   }
     * })
     */
    upsert<T extends document_templatesUpsertArgs>(args: SelectSubset<T, document_templatesUpsertArgs<ExtArgs>>): Prisma__document_templatesClient<$Result.GetResult<Prisma.$document_templatesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Document_templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {document_templatesCountArgs} args - Arguments to filter Document_templates to count.
     * @example
     * // Count the number of Document_templates
     * const count = await prisma.document_templates.count({
     *   where: {
     *     // ... the filter for the Document_templates we want to count
     *   }
     * })
    **/
    count<T extends document_templatesCountArgs>(
      args?: Subset<T, document_templatesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Document_templatesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document_templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Document_templatesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Document_templatesAggregateArgs>(args: Subset<T, Document_templatesAggregateArgs>): Prisma.PrismaPromise<GetDocument_templatesAggregateType<T>>

    /**
     * Group by Document_templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {document_templatesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends document_templatesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: document_templatesGroupByArgs['orderBy'] }
        : { orderBy?: document_templatesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, document_templatesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocument_templatesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the document_templates model
   */
  readonly fields: document_templatesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for document_templates.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__document_templatesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    utilisateur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    documents<T extends document_templates$documentsArgs<ExtArgs> = {}>(args?: Subset<T, document_templates$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the document_templates model
   */
  interface document_templatesFieldRefs {
    readonly id: FieldRef<"document_templates", 'Int'>
    readonly name: FieldRef<"document_templates", 'String'>
    readonly sections_json: FieldRef<"document_templates", 'String'>
    readonly Cree_par: FieldRef<"document_templates", 'String'>
  }
    

  // Custom InputTypes
  /**
   * document_templates findUnique
   */
  export type document_templatesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_templates
     */
    select?: document_templatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_templates
     */
    omit?: document_templatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_templatesInclude<ExtArgs> | null
    /**
     * Filter, which document_templates to fetch.
     */
    where: document_templatesWhereUniqueInput
  }

  /**
   * document_templates findUniqueOrThrow
   */
  export type document_templatesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_templates
     */
    select?: document_templatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_templates
     */
    omit?: document_templatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_templatesInclude<ExtArgs> | null
    /**
     * Filter, which document_templates to fetch.
     */
    where: document_templatesWhereUniqueInput
  }

  /**
   * document_templates findFirst
   */
  export type document_templatesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_templates
     */
    select?: document_templatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_templates
     */
    omit?: document_templatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_templatesInclude<ExtArgs> | null
    /**
     * Filter, which document_templates to fetch.
     */
    where?: document_templatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of document_templates to fetch.
     */
    orderBy?: document_templatesOrderByWithRelationInput | document_templatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for document_templates.
     */
    cursor?: document_templatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` document_templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` document_templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of document_templates.
     */
    distinct?: Document_templatesScalarFieldEnum | Document_templatesScalarFieldEnum[]
  }

  /**
   * document_templates findFirstOrThrow
   */
  export type document_templatesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_templates
     */
    select?: document_templatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_templates
     */
    omit?: document_templatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_templatesInclude<ExtArgs> | null
    /**
     * Filter, which document_templates to fetch.
     */
    where?: document_templatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of document_templates to fetch.
     */
    orderBy?: document_templatesOrderByWithRelationInput | document_templatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for document_templates.
     */
    cursor?: document_templatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` document_templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` document_templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of document_templates.
     */
    distinct?: Document_templatesScalarFieldEnum | Document_templatesScalarFieldEnum[]
  }

  /**
   * document_templates findMany
   */
  export type document_templatesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_templates
     */
    select?: document_templatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_templates
     */
    omit?: document_templatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_templatesInclude<ExtArgs> | null
    /**
     * Filter, which document_templates to fetch.
     */
    where?: document_templatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of document_templates to fetch.
     */
    orderBy?: document_templatesOrderByWithRelationInput | document_templatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing document_templates.
     */
    cursor?: document_templatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` document_templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` document_templates.
     */
    skip?: number
    distinct?: Document_templatesScalarFieldEnum | Document_templatesScalarFieldEnum[]
  }

  /**
   * document_templates create
   */
  export type document_templatesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_templates
     */
    select?: document_templatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_templates
     */
    omit?: document_templatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_templatesInclude<ExtArgs> | null
    /**
     * The data needed to create a document_templates.
     */
    data: XOR<document_templatesCreateInput, document_templatesUncheckedCreateInput>
  }

  /**
   * document_templates createMany
   */
  export type document_templatesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many document_templates.
     */
    data: document_templatesCreateManyInput | document_templatesCreateManyInput[]
  }

  /**
   * document_templates createManyAndReturn
   */
  export type document_templatesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_templates
     */
    select?: document_templatesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the document_templates
     */
    omit?: document_templatesOmit<ExtArgs> | null
    /**
     * The data used to create many document_templates.
     */
    data: document_templatesCreateManyInput | document_templatesCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_templatesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * document_templates update
   */
  export type document_templatesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_templates
     */
    select?: document_templatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_templates
     */
    omit?: document_templatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_templatesInclude<ExtArgs> | null
    /**
     * The data needed to update a document_templates.
     */
    data: XOR<document_templatesUpdateInput, document_templatesUncheckedUpdateInput>
    /**
     * Choose, which document_templates to update.
     */
    where: document_templatesWhereUniqueInput
  }

  /**
   * document_templates updateMany
   */
  export type document_templatesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update document_templates.
     */
    data: XOR<document_templatesUpdateManyMutationInput, document_templatesUncheckedUpdateManyInput>
    /**
     * Filter which document_templates to update
     */
    where?: document_templatesWhereInput
    /**
     * Limit how many document_templates to update.
     */
    limit?: number
  }

  /**
   * document_templates updateManyAndReturn
   */
  export type document_templatesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_templates
     */
    select?: document_templatesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the document_templates
     */
    omit?: document_templatesOmit<ExtArgs> | null
    /**
     * The data used to update document_templates.
     */
    data: XOR<document_templatesUpdateManyMutationInput, document_templatesUncheckedUpdateManyInput>
    /**
     * Filter which document_templates to update
     */
    where?: document_templatesWhereInput
    /**
     * Limit how many document_templates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_templatesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * document_templates upsert
   */
  export type document_templatesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_templates
     */
    select?: document_templatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_templates
     */
    omit?: document_templatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_templatesInclude<ExtArgs> | null
    /**
     * The filter to search for the document_templates to update in case it exists.
     */
    where: document_templatesWhereUniqueInput
    /**
     * In case the document_templates found by the `where` argument doesn't exist, create a new document_templates with this data.
     */
    create: XOR<document_templatesCreateInput, document_templatesUncheckedCreateInput>
    /**
     * In case the document_templates was found with the provided `where` argument, update it with this data.
     */
    update: XOR<document_templatesUpdateInput, document_templatesUncheckedUpdateInput>
  }

  /**
   * document_templates delete
   */
  export type document_templatesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_templates
     */
    select?: document_templatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_templates
     */
    omit?: document_templatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_templatesInclude<ExtArgs> | null
    /**
     * Filter which document_templates to delete.
     */
    where: document_templatesWhereUniqueInput
  }

  /**
   * document_templates deleteMany
   */
  export type document_templatesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which document_templates to delete
     */
    where?: document_templatesWhereInput
    /**
     * Limit how many document_templates to delete.
     */
    limit?: number
  }

  /**
   * document_templates.documents
   */
  export type document_templates$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document
     */
    omit?: documentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentInclude<ExtArgs> | null
    where?: documentWhereInput
    orderBy?: documentOrderByWithRelationInput | documentOrderByWithRelationInput[]
    cursor?: documentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * document_templates without action
   */
  export type document_templatesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_templates
     */
    select?: document_templatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_templates
     */
    omit?: document_templatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_templatesInclude<ExtArgs> | null
  }


  /**
   * Model document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentAvgAggregateOutputType = {
    id: number | null
    template_id: number | null
  }

  export type DocumentSumAggregateOutputType = {
    id: number | null
    template_id: number | null
  }

  export type DocumentMinAggregateOutputType = {
    id: number | null
    template_id: number | null
    CIN: string | null
    data_json: string | null
    Cree_par: string | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: number | null
    template_id: number | null
    CIN: string | null
    data_json: string | null
    Cree_par: string | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    template_id: number
    CIN: number
    data_json: number
    Cree_par: number
    _all: number
  }


  export type DocumentAvgAggregateInputType = {
    id?: true
    template_id?: true
  }

  export type DocumentSumAggregateInputType = {
    id?: true
    template_id?: true
  }

  export type DocumentMinAggregateInputType = {
    id?: true
    template_id?: true
    CIN?: true
    data_json?: true
    Cree_par?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    template_id?: true
    CIN?: true
    data_json?: true
    Cree_par?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    template_id?: true
    CIN?: true
    data_json?: true
    Cree_par?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which document to aggregate.
     */
    where?: documentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documents to fetch.
     */
    orderBy?: documentOrderByWithRelationInput | documentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: documentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type documentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: documentWhereInput
    orderBy?: documentOrderByWithAggregationInput | documentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: documentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _avg?: DocumentAvgAggregateInputType
    _sum?: DocumentSumAggregateInputType
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: number
    template_id: number
    CIN: string
    data_json: string
    Cree_par: string
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends documentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type documentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    template_id?: boolean
    CIN?: boolean
    data_json?: boolean
    Cree_par?: boolean
    template?: boolean | document_templatesDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type documentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    template_id?: boolean
    CIN?: boolean
    data_json?: boolean
    Cree_par?: boolean
    template?: boolean | document_templatesDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type documentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    template_id?: boolean
    CIN?: boolean
    data_json?: boolean
    Cree_par?: boolean
    template?: boolean | document_templatesDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type documentSelectScalar = {
    id?: boolean
    template_id?: boolean
    CIN?: boolean
    data_json?: boolean
    Cree_par?: boolean
  }

  export type documentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "template_id" | "CIN" | "data_json" | "Cree_par", ExtArgs["result"]["document"]>
  export type documentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | document_templatesDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }
  export type documentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | document_templatesDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }
  export type documentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | document_templatesDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }

  export type $documentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "document"
    objects: {
      template: Prisma.$document_templatesPayload<ExtArgs>
      client: Prisma.$ClientPayload<ExtArgs>
      utilisateur: Prisma.$UtilisateurPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      template_id: number
      CIN: string
      data_json: string
      Cree_par: string
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type documentGetPayload<S extends boolean | null | undefined | documentDefaultArgs> = $Result.GetResult<Prisma.$documentPayload, S>

  type documentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<documentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface documentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['document'], meta: { name: 'document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {documentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends documentFindUniqueArgs>(args: SelectSubset<T, documentFindUniqueArgs<ExtArgs>>): Prisma__documentClient<$Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {documentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends documentFindUniqueOrThrowArgs>(args: SelectSubset<T, documentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__documentClient<$Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends documentFindFirstArgs>(args?: SelectSubset<T, documentFindFirstArgs<ExtArgs>>): Prisma__documentClient<$Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends documentFindFirstOrThrowArgs>(args?: SelectSubset<T, documentFindFirstOrThrowArgs<ExtArgs>>): Prisma__documentClient<$Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends documentFindManyArgs>(args?: SelectSubset<T, documentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {documentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends documentCreateArgs>(args: SelectSubset<T, documentCreateArgs<ExtArgs>>): Prisma__documentClient<$Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {documentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends documentCreateManyArgs>(args?: SelectSubset<T, documentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {documentCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends documentCreateManyAndReturnArgs>(args?: SelectSubset<T, documentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Document.
     * @param {documentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends documentDeleteArgs>(args: SelectSubset<T, documentDeleteArgs<ExtArgs>>): Prisma__documentClient<$Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {documentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends documentUpdateArgs>(args: SelectSubset<T, documentUpdateArgs<ExtArgs>>): Prisma__documentClient<$Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {documentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends documentDeleteManyArgs>(args?: SelectSubset<T, documentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends documentUpdateManyArgs>(args: SelectSubset<T, documentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {documentUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends documentUpdateManyAndReturnArgs>(args: SelectSubset<T, documentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Document.
     * @param {documentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends documentUpsertArgs>(args: SelectSubset<T, documentUpsertArgs<ExtArgs>>): Prisma__documentClient<$Result.GetResult<Prisma.$documentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends documentCountArgs>(
      args?: Subset<T, documentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {documentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends documentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: documentGroupByArgs['orderBy'] }
        : { orderBy?: documentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, documentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the document model
   */
  readonly fields: documentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__documentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    template<T extends document_templatesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, document_templatesDefaultArgs<ExtArgs>>): Prisma__document_templatesClient<$Result.GetResult<Prisma.$document_templatesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    utilisateur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the document model
   */
  interface documentFieldRefs {
    readonly id: FieldRef<"document", 'Int'>
    readonly template_id: FieldRef<"document", 'Int'>
    readonly CIN: FieldRef<"document", 'String'>
    readonly data_json: FieldRef<"document", 'String'>
    readonly Cree_par: FieldRef<"document", 'String'>
  }
    

  // Custom InputTypes
  /**
   * document findUnique
   */
  export type documentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document
     */
    omit?: documentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentInclude<ExtArgs> | null
    /**
     * Filter, which document to fetch.
     */
    where: documentWhereUniqueInput
  }

  /**
   * document findUniqueOrThrow
   */
  export type documentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document
     */
    omit?: documentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentInclude<ExtArgs> | null
    /**
     * Filter, which document to fetch.
     */
    where: documentWhereUniqueInput
  }

  /**
   * document findFirst
   */
  export type documentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document
     */
    omit?: documentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentInclude<ExtArgs> | null
    /**
     * Filter, which document to fetch.
     */
    where?: documentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documents to fetch.
     */
    orderBy?: documentOrderByWithRelationInput | documentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for documents.
     */
    cursor?: documentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * document findFirstOrThrow
   */
  export type documentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document
     */
    omit?: documentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentInclude<ExtArgs> | null
    /**
     * Filter, which document to fetch.
     */
    where?: documentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documents to fetch.
     */
    orderBy?: documentOrderByWithRelationInput | documentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for documents.
     */
    cursor?: documentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * document findMany
   */
  export type documentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document
     */
    omit?: documentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentInclude<ExtArgs> | null
    /**
     * Filter, which documents to fetch.
     */
    where?: documentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of documents to fetch.
     */
    orderBy?: documentOrderByWithRelationInput | documentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing documents.
     */
    cursor?: documentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * document create
   */
  export type documentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document
     */
    omit?: documentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentInclude<ExtArgs> | null
    /**
     * The data needed to create a document.
     */
    data: XOR<documentCreateInput, documentUncheckedCreateInput>
  }

  /**
   * document createMany
   */
  export type documentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many documents.
     */
    data: documentCreateManyInput | documentCreateManyInput[]
  }

  /**
   * document createManyAndReturn
   */
  export type documentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the document
     */
    omit?: documentOmit<ExtArgs> | null
    /**
     * The data used to create many documents.
     */
    data: documentCreateManyInput | documentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * document update
   */
  export type documentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document
     */
    omit?: documentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentInclude<ExtArgs> | null
    /**
     * The data needed to update a document.
     */
    data: XOR<documentUpdateInput, documentUncheckedUpdateInput>
    /**
     * Choose, which document to update.
     */
    where: documentWhereUniqueInput
  }

  /**
   * document updateMany
   */
  export type documentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update documents.
     */
    data: XOR<documentUpdateManyMutationInput, documentUncheckedUpdateManyInput>
    /**
     * Filter which documents to update
     */
    where?: documentWhereInput
    /**
     * Limit how many documents to update.
     */
    limit?: number
  }

  /**
   * document updateManyAndReturn
   */
  export type documentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the document
     */
    omit?: documentOmit<ExtArgs> | null
    /**
     * The data used to update documents.
     */
    data: XOR<documentUpdateManyMutationInput, documentUncheckedUpdateManyInput>
    /**
     * Filter which documents to update
     */
    where?: documentWhereInput
    /**
     * Limit how many documents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * document upsert
   */
  export type documentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document
     */
    omit?: documentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentInclude<ExtArgs> | null
    /**
     * The filter to search for the document to update in case it exists.
     */
    where: documentWhereUniqueInput
    /**
     * In case the document found by the `where` argument doesn't exist, create a new document with this data.
     */
    create: XOR<documentCreateInput, documentUncheckedCreateInput>
    /**
     * In case the document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<documentUpdateInput, documentUncheckedUpdateInput>
  }

  /**
   * document delete
   */
  export type documentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document
     */
    omit?: documentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentInclude<ExtArgs> | null
    /**
     * Filter which document to delete.
     */
    where: documentWhereUniqueInput
  }

  /**
   * document deleteMany
   */
  export type documentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which documents to delete
     */
    where?: documentWhereInput
    /**
     * Limit how many documents to delete.
     */
    limit?: number
  }

  /**
   * document without action
   */
  export type documentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document
     */
    select?: documentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document
     */
    omit?: documentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: documentInclude<ExtArgs> | null
  }


  /**
   * Model bien
   */

  export type AggregateBien = {
    _count: BienCountAggregateOutputType | null
    _avg: BienAvgAggregateOutputType | null
    _sum: BienSumAggregateOutputType | null
    _min: BienMinAggregateOutputType | null
    _max: BienMaxAggregateOutputType | null
  }

  export type BienAvgAggregateOutputType = {
    id: number | null
    prix: number | null
    stock: number | null
  }

  export type BienSumAggregateOutputType = {
    id: number | null
    prix: number | null
    stock: number | null
  }

  export type BienMinAggregateOutputType = {
    id: number | null
    Nom: string | null
    bien_type: $Enums.BienType | null
    Type: $Enums.ServiceType | null
    prix: number | null
    stock: number | null
    Cree_par: string | null
  }

  export type BienMaxAggregateOutputType = {
    id: number | null
    Nom: string | null
    bien_type: $Enums.BienType | null
    Type: $Enums.ServiceType | null
    prix: number | null
    stock: number | null
    Cree_par: string | null
  }

  export type BienCountAggregateOutputType = {
    id: number
    Nom: number
    bien_type: number
    Type: number
    prix: number
    stock: number
    Cree_par: number
    _all: number
  }


  export type BienAvgAggregateInputType = {
    id?: true
    prix?: true
    stock?: true
  }

  export type BienSumAggregateInputType = {
    id?: true
    prix?: true
    stock?: true
  }

  export type BienMinAggregateInputType = {
    id?: true
    Nom?: true
    bien_type?: true
    Type?: true
    prix?: true
    stock?: true
    Cree_par?: true
  }

  export type BienMaxAggregateInputType = {
    id?: true
    Nom?: true
    bien_type?: true
    Type?: true
    prix?: true
    stock?: true
    Cree_par?: true
  }

  export type BienCountAggregateInputType = {
    id?: true
    Nom?: true
    bien_type?: true
    Type?: true
    prix?: true
    stock?: true
    Cree_par?: true
    _all?: true
  }

  export type BienAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bien to aggregate.
     */
    where?: bienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of biens to fetch.
     */
    orderBy?: bienOrderByWithRelationInput | bienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` biens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` biens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned biens
    **/
    _count?: true | BienCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BienAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BienSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BienMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BienMaxAggregateInputType
  }

  export type GetBienAggregateType<T extends BienAggregateArgs> = {
        [P in keyof T & keyof AggregateBien]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBien[P]>
      : GetScalarType<T[P], AggregateBien[P]>
  }




  export type bienGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bienWhereInput
    orderBy?: bienOrderByWithAggregationInput | bienOrderByWithAggregationInput[]
    by: BienScalarFieldEnum[] | BienScalarFieldEnum
    having?: bienScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BienCountAggregateInputType | true
    _avg?: BienAvgAggregateInputType
    _sum?: BienSumAggregateInputType
    _min?: BienMinAggregateInputType
    _max?: BienMaxAggregateInputType
  }

  export type BienGroupByOutputType = {
    id: number
    Nom: string
    bien_type: $Enums.BienType
    Type: $Enums.ServiceType
    prix: number
    stock: number
    Cree_par: string
    _count: BienCountAggregateOutputType | null
    _avg: BienAvgAggregateOutputType | null
    _sum: BienSumAggregateOutputType | null
    _min: BienMinAggregateOutputType | null
    _max: BienMaxAggregateOutputType | null
  }

  type GetBienGroupByPayload<T extends bienGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BienGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BienGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BienGroupByOutputType[P]>
            : GetScalarType<T[P], BienGroupByOutputType[P]>
        }
      >
    >


  export type bienSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Nom?: boolean
    bien_type?: boolean
    Type?: boolean
    prix?: boolean
    stock?: boolean
    Cree_par?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    factureBiens?: boolean | bien$factureBiensArgs<ExtArgs>
    _count?: boolean | BienCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bien"]>

  export type bienSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Nom?: boolean
    bien_type?: boolean
    Type?: boolean
    prix?: boolean
    stock?: boolean
    Cree_par?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bien"]>

  export type bienSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Nom?: boolean
    bien_type?: boolean
    Type?: boolean
    prix?: boolean
    stock?: boolean
    Cree_par?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bien"]>

  export type bienSelectScalar = {
    id?: boolean
    Nom?: boolean
    bien_type?: boolean
    Type?: boolean
    prix?: boolean
    stock?: boolean
    Cree_par?: boolean
  }

  export type bienOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Nom" | "bien_type" | "Type" | "prix" | "stock" | "Cree_par", ExtArgs["result"]["bien"]>
  export type bienInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    factureBiens?: boolean | bien$factureBiensArgs<ExtArgs>
    _count?: boolean | BienCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type bienIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }
  export type bienIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }

  export type $bienPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bien"
    objects: {
      utilisateur: Prisma.$UtilisateurPayload<ExtArgs>
      factureBiens: Prisma.$facture_bienPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      Nom: string
      bien_type: $Enums.BienType
      Type: $Enums.ServiceType
      prix: number
      stock: number
      Cree_par: string
    }, ExtArgs["result"]["bien"]>
    composites: {}
  }

  type bienGetPayload<S extends boolean | null | undefined | bienDefaultArgs> = $Result.GetResult<Prisma.$bienPayload, S>

  type bienCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bienFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BienCountAggregateInputType | true
    }

  export interface bienDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bien'], meta: { name: 'bien' } }
    /**
     * Find zero or one Bien that matches the filter.
     * @param {bienFindUniqueArgs} args - Arguments to find a Bien
     * @example
     * // Get one Bien
     * const bien = await prisma.bien.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bienFindUniqueArgs>(args: SelectSubset<T, bienFindUniqueArgs<ExtArgs>>): Prisma__bienClient<$Result.GetResult<Prisma.$bienPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bien that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bienFindUniqueOrThrowArgs} args - Arguments to find a Bien
     * @example
     * // Get one Bien
     * const bien = await prisma.bien.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bienFindUniqueOrThrowArgs>(args: SelectSubset<T, bienFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bienClient<$Result.GetResult<Prisma.$bienPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bien that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bienFindFirstArgs} args - Arguments to find a Bien
     * @example
     * // Get one Bien
     * const bien = await prisma.bien.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bienFindFirstArgs>(args?: SelectSubset<T, bienFindFirstArgs<ExtArgs>>): Prisma__bienClient<$Result.GetResult<Prisma.$bienPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bien that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bienFindFirstOrThrowArgs} args - Arguments to find a Bien
     * @example
     * // Get one Bien
     * const bien = await prisma.bien.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bienFindFirstOrThrowArgs>(args?: SelectSubset<T, bienFindFirstOrThrowArgs<ExtArgs>>): Prisma__bienClient<$Result.GetResult<Prisma.$bienPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Biens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bienFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Biens
     * const biens = await prisma.bien.findMany()
     * 
     * // Get first 10 Biens
     * const biens = await prisma.bien.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bienWithIdOnly = await prisma.bien.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends bienFindManyArgs>(args?: SelectSubset<T, bienFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bienPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bien.
     * @param {bienCreateArgs} args - Arguments to create a Bien.
     * @example
     * // Create one Bien
     * const Bien = await prisma.bien.create({
     *   data: {
     *     // ... data to create a Bien
     *   }
     * })
     * 
     */
    create<T extends bienCreateArgs>(args: SelectSubset<T, bienCreateArgs<ExtArgs>>): Prisma__bienClient<$Result.GetResult<Prisma.$bienPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Biens.
     * @param {bienCreateManyArgs} args - Arguments to create many Biens.
     * @example
     * // Create many Biens
     * const bien = await prisma.bien.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bienCreateManyArgs>(args?: SelectSubset<T, bienCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Biens and returns the data saved in the database.
     * @param {bienCreateManyAndReturnArgs} args - Arguments to create many Biens.
     * @example
     * // Create many Biens
     * const bien = await prisma.bien.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Biens and only return the `id`
     * const bienWithIdOnly = await prisma.bien.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends bienCreateManyAndReturnArgs>(args?: SelectSubset<T, bienCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bienPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bien.
     * @param {bienDeleteArgs} args - Arguments to delete one Bien.
     * @example
     * // Delete one Bien
     * const Bien = await prisma.bien.delete({
     *   where: {
     *     // ... filter to delete one Bien
     *   }
     * })
     * 
     */
    delete<T extends bienDeleteArgs>(args: SelectSubset<T, bienDeleteArgs<ExtArgs>>): Prisma__bienClient<$Result.GetResult<Prisma.$bienPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bien.
     * @param {bienUpdateArgs} args - Arguments to update one Bien.
     * @example
     * // Update one Bien
     * const bien = await prisma.bien.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bienUpdateArgs>(args: SelectSubset<T, bienUpdateArgs<ExtArgs>>): Prisma__bienClient<$Result.GetResult<Prisma.$bienPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Biens.
     * @param {bienDeleteManyArgs} args - Arguments to filter Biens to delete.
     * @example
     * // Delete a few Biens
     * const { count } = await prisma.bien.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bienDeleteManyArgs>(args?: SelectSubset<T, bienDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Biens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bienUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Biens
     * const bien = await prisma.bien.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bienUpdateManyArgs>(args: SelectSubset<T, bienUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Biens and returns the data updated in the database.
     * @param {bienUpdateManyAndReturnArgs} args - Arguments to update many Biens.
     * @example
     * // Update many Biens
     * const bien = await prisma.bien.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Biens and only return the `id`
     * const bienWithIdOnly = await prisma.bien.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends bienUpdateManyAndReturnArgs>(args: SelectSubset<T, bienUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bienPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bien.
     * @param {bienUpsertArgs} args - Arguments to update or create a Bien.
     * @example
     * // Update or create a Bien
     * const bien = await prisma.bien.upsert({
     *   create: {
     *     // ... data to create a Bien
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bien we want to update
     *   }
     * })
     */
    upsert<T extends bienUpsertArgs>(args: SelectSubset<T, bienUpsertArgs<ExtArgs>>): Prisma__bienClient<$Result.GetResult<Prisma.$bienPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Biens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bienCountArgs} args - Arguments to filter Biens to count.
     * @example
     * // Count the number of Biens
     * const count = await prisma.bien.count({
     *   where: {
     *     // ... the filter for the Biens we want to count
     *   }
     * })
    **/
    count<T extends bienCountArgs>(
      args?: Subset<T, bienCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BienCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bien.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BienAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BienAggregateArgs>(args: Subset<T, BienAggregateArgs>): Prisma.PrismaPromise<GetBienAggregateType<T>>

    /**
     * Group by Bien.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bienGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends bienGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bienGroupByArgs['orderBy'] }
        : { orderBy?: bienGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, bienGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBienGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bien model
   */
  readonly fields: bienFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bien.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bienClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    utilisateur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    factureBiens<T extends bien$factureBiensArgs<ExtArgs> = {}>(args?: Subset<T, bien$factureBiensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$facture_bienPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the bien model
   */
  interface bienFieldRefs {
    readonly id: FieldRef<"bien", 'Int'>
    readonly Nom: FieldRef<"bien", 'String'>
    readonly bien_type: FieldRef<"bien", 'BienType'>
    readonly Type: FieldRef<"bien", 'ServiceType'>
    readonly prix: FieldRef<"bien", 'Float'>
    readonly stock: FieldRef<"bien", 'Int'>
    readonly Cree_par: FieldRef<"bien", 'String'>
  }
    

  // Custom InputTypes
  /**
   * bien findUnique
   */
  export type bienFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bien
     */
    select?: bienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bien
     */
    omit?: bienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bienInclude<ExtArgs> | null
    /**
     * Filter, which bien to fetch.
     */
    where: bienWhereUniqueInput
  }

  /**
   * bien findUniqueOrThrow
   */
  export type bienFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bien
     */
    select?: bienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bien
     */
    omit?: bienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bienInclude<ExtArgs> | null
    /**
     * Filter, which bien to fetch.
     */
    where: bienWhereUniqueInput
  }

  /**
   * bien findFirst
   */
  export type bienFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bien
     */
    select?: bienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bien
     */
    omit?: bienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bienInclude<ExtArgs> | null
    /**
     * Filter, which bien to fetch.
     */
    where?: bienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of biens to fetch.
     */
    orderBy?: bienOrderByWithRelationInput | bienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for biens.
     */
    cursor?: bienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` biens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` biens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of biens.
     */
    distinct?: BienScalarFieldEnum | BienScalarFieldEnum[]
  }

  /**
   * bien findFirstOrThrow
   */
  export type bienFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bien
     */
    select?: bienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bien
     */
    omit?: bienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bienInclude<ExtArgs> | null
    /**
     * Filter, which bien to fetch.
     */
    where?: bienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of biens to fetch.
     */
    orderBy?: bienOrderByWithRelationInput | bienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for biens.
     */
    cursor?: bienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` biens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` biens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of biens.
     */
    distinct?: BienScalarFieldEnum | BienScalarFieldEnum[]
  }

  /**
   * bien findMany
   */
  export type bienFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bien
     */
    select?: bienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bien
     */
    omit?: bienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bienInclude<ExtArgs> | null
    /**
     * Filter, which biens to fetch.
     */
    where?: bienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of biens to fetch.
     */
    orderBy?: bienOrderByWithRelationInput | bienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing biens.
     */
    cursor?: bienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` biens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` biens.
     */
    skip?: number
    distinct?: BienScalarFieldEnum | BienScalarFieldEnum[]
  }

  /**
   * bien create
   */
  export type bienCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bien
     */
    select?: bienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bien
     */
    omit?: bienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bienInclude<ExtArgs> | null
    /**
     * The data needed to create a bien.
     */
    data: XOR<bienCreateInput, bienUncheckedCreateInput>
  }

  /**
   * bien createMany
   */
  export type bienCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many biens.
     */
    data: bienCreateManyInput | bienCreateManyInput[]
  }

  /**
   * bien createManyAndReturn
   */
  export type bienCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bien
     */
    select?: bienSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bien
     */
    omit?: bienOmit<ExtArgs> | null
    /**
     * The data used to create many biens.
     */
    data: bienCreateManyInput | bienCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bienIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * bien update
   */
  export type bienUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bien
     */
    select?: bienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bien
     */
    omit?: bienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bienInclude<ExtArgs> | null
    /**
     * The data needed to update a bien.
     */
    data: XOR<bienUpdateInput, bienUncheckedUpdateInput>
    /**
     * Choose, which bien to update.
     */
    where: bienWhereUniqueInput
  }

  /**
   * bien updateMany
   */
  export type bienUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update biens.
     */
    data: XOR<bienUpdateManyMutationInput, bienUncheckedUpdateManyInput>
    /**
     * Filter which biens to update
     */
    where?: bienWhereInput
    /**
     * Limit how many biens to update.
     */
    limit?: number
  }

  /**
   * bien updateManyAndReturn
   */
  export type bienUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bien
     */
    select?: bienSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bien
     */
    omit?: bienOmit<ExtArgs> | null
    /**
     * The data used to update biens.
     */
    data: XOR<bienUpdateManyMutationInput, bienUncheckedUpdateManyInput>
    /**
     * Filter which biens to update
     */
    where?: bienWhereInput
    /**
     * Limit how many biens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bienIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * bien upsert
   */
  export type bienUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bien
     */
    select?: bienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bien
     */
    omit?: bienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bienInclude<ExtArgs> | null
    /**
     * The filter to search for the bien to update in case it exists.
     */
    where: bienWhereUniqueInput
    /**
     * In case the bien found by the `where` argument doesn't exist, create a new bien with this data.
     */
    create: XOR<bienCreateInput, bienUncheckedCreateInput>
    /**
     * In case the bien was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bienUpdateInput, bienUncheckedUpdateInput>
  }

  /**
   * bien delete
   */
  export type bienDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bien
     */
    select?: bienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bien
     */
    omit?: bienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bienInclude<ExtArgs> | null
    /**
     * Filter which bien to delete.
     */
    where: bienWhereUniqueInput
  }

  /**
   * bien deleteMany
   */
  export type bienDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which biens to delete
     */
    where?: bienWhereInput
    /**
     * Limit how many biens to delete.
     */
    limit?: number
  }

  /**
   * bien.factureBiens
   */
  export type bien$factureBiensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facture_bien
     */
    select?: facture_bienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facture_bien
     */
    omit?: facture_bienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facture_bienInclude<ExtArgs> | null
    where?: facture_bienWhereInput
    orderBy?: facture_bienOrderByWithRelationInput | facture_bienOrderByWithRelationInput[]
    cursor?: facture_bienWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Facture_bienScalarFieldEnum | Facture_bienScalarFieldEnum[]
  }

  /**
   * bien without action
   */
  export type bienDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bien
     */
    select?: bienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bien
     */
    omit?: bienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bienInclude<ExtArgs> | null
  }


  /**
   * Model facture
   */

  export type AggregateFacture = {
    _count: FactureCountAggregateOutputType | null
    _avg: FactureAvgAggregateOutputType | null
    _sum: FactureSumAggregateOutputType | null
    _min: FactureMinAggregateOutputType | null
    _max: FactureMaxAggregateOutputType | null
  }

  export type FactureAvgAggregateOutputType = {
    id: number | null
    prix_total: number | null
  }

  export type FactureSumAggregateOutputType = {
    id: number | null
    prix_total: number | null
  }

  export type FactureMinAggregateOutputType = {
    id: number | null
    CIN: string | null
    date: Date | null
    prix_total: number | null
    statut: $Enums.FactureStatus | null
    notes: string | null
    Cree_par: string | null
  }

  export type FactureMaxAggregateOutputType = {
    id: number | null
    CIN: string | null
    date: Date | null
    prix_total: number | null
    statut: $Enums.FactureStatus | null
    notes: string | null
    Cree_par: string | null
  }

  export type FactureCountAggregateOutputType = {
    id: number
    CIN: number
    date: number
    prix_total: number
    statut: number
    notes: number
    Cree_par: number
    _all: number
  }


  export type FactureAvgAggregateInputType = {
    id?: true
    prix_total?: true
  }

  export type FactureSumAggregateInputType = {
    id?: true
    prix_total?: true
  }

  export type FactureMinAggregateInputType = {
    id?: true
    CIN?: true
    date?: true
    prix_total?: true
    statut?: true
    notes?: true
    Cree_par?: true
  }

  export type FactureMaxAggregateInputType = {
    id?: true
    CIN?: true
    date?: true
    prix_total?: true
    statut?: true
    notes?: true
    Cree_par?: true
  }

  export type FactureCountAggregateInputType = {
    id?: true
    CIN?: true
    date?: true
    prix_total?: true
    statut?: true
    notes?: true
    Cree_par?: true
    _all?: true
  }

  export type FactureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which facture to aggregate.
     */
    where?: factureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of factures to fetch.
     */
    orderBy?: factureOrderByWithRelationInput | factureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: factureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` factures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` factures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned factures
    **/
    _count?: true | FactureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FactureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FactureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FactureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FactureMaxAggregateInputType
  }

  export type GetFactureAggregateType<T extends FactureAggregateArgs> = {
        [P in keyof T & keyof AggregateFacture]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacture[P]>
      : GetScalarType<T[P], AggregateFacture[P]>
  }




  export type factureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: factureWhereInput
    orderBy?: factureOrderByWithAggregationInput | factureOrderByWithAggregationInput[]
    by: FactureScalarFieldEnum[] | FactureScalarFieldEnum
    having?: factureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FactureCountAggregateInputType | true
    _avg?: FactureAvgAggregateInputType
    _sum?: FactureSumAggregateInputType
    _min?: FactureMinAggregateInputType
    _max?: FactureMaxAggregateInputType
  }

  export type FactureGroupByOutputType = {
    id: number
    CIN: string
    date: Date
    prix_total: number
    statut: $Enums.FactureStatus
    notes: string | null
    Cree_par: string
    _count: FactureCountAggregateOutputType | null
    _avg: FactureAvgAggregateOutputType | null
    _sum: FactureSumAggregateOutputType | null
    _min: FactureMinAggregateOutputType | null
    _max: FactureMaxAggregateOutputType | null
  }

  type GetFactureGroupByPayload<T extends factureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FactureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FactureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FactureGroupByOutputType[P]>
            : GetScalarType<T[P], FactureGroupByOutputType[P]>
        }
      >
    >


  export type factureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    CIN?: boolean
    date?: boolean
    prix_total?: boolean
    statut?: boolean
    notes?: boolean
    Cree_par?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    factureBiens?: boolean | facture$factureBiensArgs<ExtArgs>
    paiements?: boolean | facture$paiementsArgs<ExtArgs>
    _count?: boolean | FactureCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facture"]>

  export type factureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    CIN?: boolean
    date?: boolean
    prix_total?: boolean
    statut?: boolean
    notes?: boolean
    Cree_par?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facture"]>

  export type factureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    CIN?: boolean
    date?: boolean
    prix_total?: boolean
    statut?: boolean
    notes?: boolean
    Cree_par?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facture"]>

  export type factureSelectScalar = {
    id?: boolean
    CIN?: boolean
    date?: boolean
    prix_total?: boolean
    statut?: boolean
    notes?: boolean
    Cree_par?: boolean
  }

  export type factureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "CIN" | "date" | "prix_total" | "statut" | "notes" | "Cree_par", ExtArgs["result"]["facture"]>
  export type factureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    factureBiens?: boolean | facture$factureBiensArgs<ExtArgs>
    paiements?: boolean | facture$paiementsArgs<ExtArgs>
    _count?: boolean | FactureCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type factureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }
  export type factureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }

  export type $facturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "facture"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      utilisateur: Prisma.$UtilisateurPayload<ExtArgs>
      factureBiens: Prisma.$facture_bienPayload<ExtArgs>[]
      paiements: Prisma.$paimentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      CIN: string
      date: Date
      prix_total: number
      statut: $Enums.FactureStatus
      notes: string | null
      Cree_par: string
    }, ExtArgs["result"]["facture"]>
    composites: {}
  }

  type factureGetPayload<S extends boolean | null | undefined | factureDefaultArgs> = $Result.GetResult<Prisma.$facturePayload, S>

  type factureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<factureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FactureCountAggregateInputType | true
    }

  export interface factureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['facture'], meta: { name: 'facture' } }
    /**
     * Find zero or one Facture that matches the filter.
     * @param {factureFindUniqueArgs} args - Arguments to find a Facture
     * @example
     * // Get one Facture
     * const facture = await prisma.facture.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends factureFindUniqueArgs>(args: SelectSubset<T, factureFindUniqueArgs<ExtArgs>>): Prisma__factureClient<$Result.GetResult<Prisma.$facturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Facture that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {factureFindUniqueOrThrowArgs} args - Arguments to find a Facture
     * @example
     * // Get one Facture
     * const facture = await prisma.facture.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends factureFindUniqueOrThrowArgs>(args: SelectSubset<T, factureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__factureClient<$Result.GetResult<Prisma.$facturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Facture that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {factureFindFirstArgs} args - Arguments to find a Facture
     * @example
     * // Get one Facture
     * const facture = await prisma.facture.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends factureFindFirstArgs>(args?: SelectSubset<T, factureFindFirstArgs<ExtArgs>>): Prisma__factureClient<$Result.GetResult<Prisma.$facturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Facture that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {factureFindFirstOrThrowArgs} args - Arguments to find a Facture
     * @example
     * // Get one Facture
     * const facture = await prisma.facture.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends factureFindFirstOrThrowArgs>(args?: SelectSubset<T, factureFindFirstOrThrowArgs<ExtArgs>>): Prisma__factureClient<$Result.GetResult<Prisma.$facturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Factures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {factureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Factures
     * const factures = await prisma.facture.findMany()
     * 
     * // Get first 10 Factures
     * const factures = await prisma.facture.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const factureWithIdOnly = await prisma.facture.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends factureFindManyArgs>(args?: SelectSubset<T, factureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$facturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Facture.
     * @param {factureCreateArgs} args - Arguments to create a Facture.
     * @example
     * // Create one Facture
     * const Facture = await prisma.facture.create({
     *   data: {
     *     // ... data to create a Facture
     *   }
     * })
     * 
     */
    create<T extends factureCreateArgs>(args: SelectSubset<T, factureCreateArgs<ExtArgs>>): Prisma__factureClient<$Result.GetResult<Prisma.$facturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Factures.
     * @param {factureCreateManyArgs} args - Arguments to create many Factures.
     * @example
     * // Create many Factures
     * const facture = await prisma.facture.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends factureCreateManyArgs>(args?: SelectSubset<T, factureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Factures and returns the data saved in the database.
     * @param {factureCreateManyAndReturnArgs} args - Arguments to create many Factures.
     * @example
     * // Create many Factures
     * const facture = await prisma.facture.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Factures and only return the `id`
     * const factureWithIdOnly = await prisma.facture.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends factureCreateManyAndReturnArgs>(args?: SelectSubset<T, factureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$facturePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Facture.
     * @param {factureDeleteArgs} args - Arguments to delete one Facture.
     * @example
     * // Delete one Facture
     * const Facture = await prisma.facture.delete({
     *   where: {
     *     // ... filter to delete one Facture
     *   }
     * })
     * 
     */
    delete<T extends factureDeleteArgs>(args: SelectSubset<T, factureDeleteArgs<ExtArgs>>): Prisma__factureClient<$Result.GetResult<Prisma.$facturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Facture.
     * @param {factureUpdateArgs} args - Arguments to update one Facture.
     * @example
     * // Update one Facture
     * const facture = await prisma.facture.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends factureUpdateArgs>(args: SelectSubset<T, factureUpdateArgs<ExtArgs>>): Prisma__factureClient<$Result.GetResult<Prisma.$facturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Factures.
     * @param {factureDeleteManyArgs} args - Arguments to filter Factures to delete.
     * @example
     * // Delete a few Factures
     * const { count } = await prisma.facture.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends factureDeleteManyArgs>(args?: SelectSubset<T, factureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Factures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {factureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Factures
     * const facture = await prisma.facture.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends factureUpdateManyArgs>(args: SelectSubset<T, factureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Factures and returns the data updated in the database.
     * @param {factureUpdateManyAndReturnArgs} args - Arguments to update many Factures.
     * @example
     * // Update many Factures
     * const facture = await prisma.facture.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Factures and only return the `id`
     * const factureWithIdOnly = await prisma.facture.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends factureUpdateManyAndReturnArgs>(args: SelectSubset<T, factureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$facturePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Facture.
     * @param {factureUpsertArgs} args - Arguments to update or create a Facture.
     * @example
     * // Update or create a Facture
     * const facture = await prisma.facture.upsert({
     *   create: {
     *     // ... data to create a Facture
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Facture we want to update
     *   }
     * })
     */
    upsert<T extends factureUpsertArgs>(args: SelectSubset<T, factureUpsertArgs<ExtArgs>>): Prisma__factureClient<$Result.GetResult<Prisma.$facturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Factures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {factureCountArgs} args - Arguments to filter Factures to count.
     * @example
     * // Count the number of Factures
     * const count = await prisma.facture.count({
     *   where: {
     *     // ... the filter for the Factures we want to count
     *   }
     * })
    **/
    count<T extends factureCountArgs>(
      args?: Subset<T, factureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FactureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Facture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FactureAggregateArgs>(args: Subset<T, FactureAggregateArgs>): Prisma.PrismaPromise<GetFactureAggregateType<T>>

    /**
     * Group by Facture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {factureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends factureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: factureGroupByArgs['orderBy'] }
        : { orderBy?: factureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, factureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFactureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the facture model
   */
  readonly fields: factureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for facture.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__factureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    utilisateur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    factureBiens<T extends facture$factureBiensArgs<ExtArgs> = {}>(args?: Subset<T, facture$factureBiensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$facture_bienPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paiements<T extends facture$paiementsArgs<ExtArgs> = {}>(args?: Subset<T, facture$paiementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paimentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the facture model
   */
  interface factureFieldRefs {
    readonly id: FieldRef<"facture", 'Int'>
    readonly CIN: FieldRef<"facture", 'String'>
    readonly date: FieldRef<"facture", 'DateTime'>
    readonly prix_total: FieldRef<"facture", 'Float'>
    readonly statut: FieldRef<"facture", 'FactureStatus'>
    readonly notes: FieldRef<"facture", 'String'>
    readonly Cree_par: FieldRef<"facture", 'String'>
  }
    

  // Custom InputTypes
  /**
   * facture findUnique
   */
  export type factureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facture
     */
    select?: factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facture
     */
    omit?: factureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: factureInclude<ExtArgs> | null
    /**
     * Filter, which facture to fetch.
     */
    where: factureWhereUniqueInput
  }

  /**
   * facture findUniqueOrThrow
   */
  export type factureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facture
     */
    select?: factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facture
     */
    omit?: factureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: factureInclude<ExtArgs> | null
    /**
     * Filter, which facture to fetch.
     */
    where: factureWhereUniqueInput
  }

  /**
   * facture findFirst
   */
  export type factureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facture
     */
    select?: factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facture
     */
    omit?: factureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: factureInclude<ExtArgs> | null
    /**
     * Filter, which facture to fetch.
     */
    where?: factureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of factures to fetch.
     */
    orderBy?: factureOrderByWithRelationInput | factureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for factures.
     */
    cursor?: factureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` factures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` factures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of factures.
     */
    distinct?: FactureScalarFieldEnum | FactureScalarFieldEnum[]
  }

  /**
   * facture findFirstOrThrow
   */
  export type factureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facture
     */
    select?: factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facture
     */
    omit?: factureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: factureInclude<ExtArgs> | null
    /**
     * Filter, which facture to fetch.
     */
    where?: factureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of factures to fetch.
     */
    orderBy?: factureOrderByWithRelationInput | factureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for factures.
     */
    cursor?: factureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` factures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` factures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of factures.
     */
    distinct?: FactureScalarFieldEnum | FactureScalarFieldEnum[]
  }

  /**
   * facture findMany
   */
  export type factureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facture
     */
    select?: factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facture
     */
    omit?: factureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: factureInclude<ExtArgs> | null
    /**
     * Filter, which factures to fetch.
     */
    where?: factureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of factures to fetch.
     */
    orderBy?: factureOrderByWithRelationInput | factureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing factures.
     */
    cursor?: factureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` factures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` factures.
     */
    skip?: number
    distinct?: FactureScalarFieldEnum | FactureScalarFieldEnum[]
  }

  /**
   * facture create
   */
  export type factureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facture
     */
    select?: factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facture
     */
    omit?: factureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: factureInclude<ExtArgs> | null
    /**
     * The data needed to create a facture.
     */
    data: XOR<factureCreateInput, factureUncheckedCreateInput>
  }

  /**
   * facture createMany
   */
  export type factureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many factures.
     */
    data: factureCreateManyInput | factureCreateManyInput[]
  }

  /**
   * facture createManyAndReturn
   */
  export type factureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facture
     */
    select?: factureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the facture
     */
    omit?: factureOmit<ExtArgs> | null
    /**
     * The data used to create many factures.
     */
    data: factureCreateManyInput | factureCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: factureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * facture update
   */
  export type factureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facture
     */
    select?: factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facture
     */
    omit?: factureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: factureInclude<ExtArgs> | null
    /**
     * The data needed to update a facture.
     */
    data: XOR<factureUpdateInput, factureUncheckedUpdateInput>
    /**
     * Choose, which facture to update.
     */
    where: factureWhereUniqueInput
  }

  /**
   * facture updateMany
   */
  export type factureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update factures.
     */
    data: XOR<factureUpdateManyMutationInput, factureUncheckedUpdateManyInput>
    /**
     * Filter which factures to update
     */
    where?: factureWhereInput
    /**
     * Limit how many factures to update.
     */
    limit?: number
  }

  /**
   * facture updateManyAndReturn
   */
  export type factureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facture
     */
    select?: factureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the facture
     */
    omit?: factureOmit<ExtArgs> | null
    /**
     * The data used to update factures.
     */
    data: XOR<factureUpdateManyMutationInput, factureUncheckedUpdateManyInput>
    /**
     * Filter which factures to update
     */
    where?: factureWhereInput
    /**
     * Limit how many factures to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: factureIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * facture upsert
   */
  export type factureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facture
     */
    select?: factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facture
     */
    omit?: factureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: factureInclude<ExtArgs> | null
    /**
     * The filter to search for the facture to update in case it exists.
     */
    where: factureWhereUniqueInput
    /**
     * In case the facture found by the `where` argument doesn't exist, create a new facture with this data.
     */
    create: XOR<factureCreateInput, factureUncheckedCreateInput>
    /**
     * In case the facture was found with the provided `where` argument, update it with this data.
     */
    update: XOR<factureUpdateInput, factureUncheckedUpdateInput>
  }

  /**
   * facture delete
   */
  export type factureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facture
     */
    select?: factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facture
     */
    omit?: factureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: factureInclude<ExtArgs> | null
    /**
     * Filter which facture to delete.
     */
    where: factureWhereUniqueInput
  }

  /**
   * facture deleteMany
   */
  export type factureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which factures to delete
     */
    where?: factureWhereInput
    /**
     * Limit how many factures to delete.
     */
    limit?: number
  }

  /**
   * facture.factureBiens
   */
  export type facture$factureBiensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facture_bien
     */
    select?: facture_bienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facture_bien
     */
    omit?: facture_bienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facture_bienInclude<ExtArgs> | null
    where?: facture_bienWhereInput
    orderBy?: facture_bienOrderByWithRelationInput | facture_bienOrderByWithRelationInput[]
    cursor?: facture_bienWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Facture_bienScalarFieldEnum | Facture_bienScalarFieldEnum[]
  }

  /**
   * facture.paiements
   */
  export type facture$paiementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paiment
     */
    select?: paimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paiment
     */
    omit?: paimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paimentInclude<ExtArgs> | null
    where?: paimentWhereInput
    orderBy?: paimentOrderByWithRelationInput | paimentOrderByWithRelationInput[]
    cursor?: paimentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaimentScalarFieldEnum | PaimentScalarFieldEnum[]
  }

  /**
   * facture without action
   */
  export type factureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facture
     */
    select?: factureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facture
     */
    omit?: factureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: factureInclude<ExtArgs> | null
  }


  /**
   * Model facture_bien
   */

  export type AggregateFacture_bien = {
    _count: Facture_bienCountAggregateOutputType | null
    _avg: Facture_bienAvgAggregateOutputType | null
    _sum: Facture_bienSumAggregateOutputType | null
    _min: Facture_bienMinAggregateOutputType | null
    _max: Facture_bienMaxAggregateOutputType | null
  }

  export type Facture_bienAvgAggregateOutputType = {
    id: number | null
    id_facture: number | null
    id_bien: number | null
    quantite: number | null
  }

  export type Facture_bienSumAggregateOutputType = {
    id: number | null
    id_facture: number | null
    id_bien: number | null
    quantite: number | null
  }

  export type Facture_bienMinAggregateOutputType = {
    id: number | null
    id_facture: number | null
    id_bien: number | null
    type_bien: $Enums.BienType | null
    quantite: number | null
    Cree_par: string | null
  }

  export type Facture_bienMaxAggregateOutputType = {
    id: number | null
    id_facture: number | null
    id_bien: number | null
    type_bien: $Enums.BienType | null
    quantite: number | null
    Cree_par: string | null
  }

  export type Facture_bienCountAggregateOutputType = {
    id: number
    id_facture: number
    id_bien: number
    type_bien: number
    quantite: number
    Cree_par: number
    _all: number
  }


  export type Facture_bienAvgAggregateInputType = {
    id?: true
    id_facture?: true
    id_bien?: true
    quantite?: true
  }

  export type Facture_bienSumAggregateInputType = {
    id?: true
    id_facture?: true
    id_bien?: true
    quantite?: true
  }

  export type Facture_bienMinAggregateInputType = {
    id?: true
    id_facture?: true
    id_bien?: true
    type_bien?: true
    quantite?: true
    Cree_par?: true
  }

  export type Facture_bienMaxAggregateInputType = {
    id?: true
    id_facture?: true
    id_bien?: true
    type_bien?: true
    quantite?: true
    Cree_par?: true
  }

  export type Facture_bienCountAggregateInputType = {
    id?: true
    id_facture?: true
    id_bien?: true
    type_bien?: true
    quantite?: true
    Cree_par?: true
    _all?: true
  }

  export type Facture_bienAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which facture_bien to aggregate.
     */
    where?: facture_bienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facture_biens to fetch.
     */
    orderBy?: facture_bienOrderByWithRelationInput | facture_bienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: facture_bienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facture_biens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facture_biens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned facture_biens
    **/
    _count?: true | Facture_bienCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Facture_bienAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Facture_bienSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Facture_bienMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Facture_bienMaxAggregateInputType
  }

  export type GetFacture_bienAggregateType<T extends Facture_bienAggregateArgs> = {
        [P in keyof T & keyof AggregateFacture_bien]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacture_bien[P]>
      : GetScalarType<T[P], AggregateFacture_bien[P]>
  }




  export type facture_bienGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: facture_bienWhereInput
    orderBy?: facture_bienOrderByWithAggregationInput | facture_bienOrderByWithAggregationInput[]
    by: Facture_bienScalarFieldEnum[] | Facture_bienScalarFieldEnum
    having?: facture_bienScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Facture_bienCountAggregateInputType | true
    _avg?: Facture_bienAvgAggregateInputType
    _sum?: Facture_bienSumAggregateInputType
    _min?: Facture_bienMinAggregateInputType
    _max?: Facture_bienMaxAggregateInputType
  }

  export type Facture_bienGroupByOutputType = {
    id: number
    id_facture: number
    id_bien: number
    type_bien: $Enums.BienType
    quantite: number
    Cree_par: string
    _count: Facture_bienCountAggregateOutputType | null
    _avg: Facture_bienAvgAggregateOutputType | null
    _sum: Facture_bienSumAggregateOutputType | null
    _min: Facture_bienMinAggregateOutputType | null
    _max: Facture_bienMaxAggregateOutputType | null
  }

  type GetFacture_bienGroupByPayload<T extends facture_bienGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Facture_bienGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Facture_bienGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Facture_bienGroupByOutputType[P]>
            : GetScalarType<T[P], Facture_bienGroupByOutputType[P]>
        }
      >
    >


  export type facture_bienSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_facture?: boolean
    id_bien?: boolean
    type_bien?: boolean
    quantite?: boolean
    Cree_par?: boolean
    facture?: boolean | factureDefaultArgs<ExtArgs>
    bien?: boolean | bienDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facture_bien"]>

  export type facture_bienSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_facture?: boolean
    id_bien?: boolean
    type_bien?: boolean
    quantite?: boolean
    Cree_par?: boolean
    facture?: boolean | factureDefaultArgs<ExtArgs>
    bien?: boolean | bienDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facture_bien"]>

  export type facture_bienSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_facture?: boolean
    id_bien?: boolean
    type_bien?: boolean
    quantite?: boolean
    Cree_par?: boolean
    facture?: boolean | factureDefaultArgs<ExtArgs>
    bien?: boolean | bienDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facture_bien"]>

  export type facture_bienSelectScalar = {
    id?: boolean
    id_facture?: boolean
    id_bien?: boolean
    type_bien?: boolean
    quantite?: boolean
    Cree_par?: boolean
  }

  export type facture_bienOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_facture" | "id_bien" | "type_bien" | "quantite" | "Cree_par", ExtArgs["result"]["facture_bien"]>
  export type facture_bienInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facture?: boolean | factureDefaultArgs<ExtArgs>
    bien?: boolean | bienDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }
  export type facture_bienIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facture?: boolean | factureDefaultArgs<ExtArgs>
    bien?: boolean | bienDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }
  export type facture_bienIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facture?: boolean | factureDefaultArgs<ExtArgs>
    bien?: boolean | bienDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }

  export type $facture_bienPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "facture_bien"
    objects: {
      facture: Prisma.$facturePayload<ExtArgs>
      bien: Prisma.$bienPayload<ExtArgs>
      utilisateur: Prisma.$UtilisateurPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_facture: number
      id_bien: number
      type_bien: $Enums.BienType
      quantite: number
      Cree_par: string
    }, ExtArgs["result"]["facture_bien"]>
    composites: {}
  }

  type facture_bienGetPayload<S extends boolean | null | undefined | facture_bienDefaultArgs> = $Result.GetResult<Prisma.$facture_bienPayload, S>

  type facture_bienCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<facture_bienFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Facture_bienCountAggregateInputType | true
    }

  export interface facture_bienDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['facture_bien'], meta: { name: 'facture_bien' } }
    /**
     * Find zero or one Facture_bien that matches the filter.
     * @param {facture_bienFindUniqueArgs} args - Arguments to find a Facture_bien
     * @example
     * // Get one Facture_bien
     * const facture_bien = await prisma.facture_bien.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends facture_bienFindUniqueArgs>(args: SelectSubset<T, facture_bienFindUniqueArgs<ExtArgs>>): Prisma__facture_bienClient<$Result.GetResult<Prisma.$facture_bienPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Facture_bien that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {facture_bienFindUniqueOrThrowArgs} args - Arguments to find a Facture_bien
     * @example
     * // Get one Facture_bien
     * const facture_bien = await prisma.facture_bien.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends facture_bienFindUniqueOrThrowArgs>(args: SelectSubset<T, facture_bienFindUniqueOrThrowArgs<ExtArgs>>): Prisma__facture_bienClient<$Result.GetResult<Prisma.$facture_bienPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Facture_bien that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facture_bienFindFirstArgs} args - Arguments to find a Facture_bien
     * @example
     * // Get one Facture_bien
     * const facture_bien = await prisma.facture_bien.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends facture_bienFindFirstArgs>(args?: SelectSubset<T, facture_bienFindFirstArgs<ExtArgs>>): Prisma__facture_bienClient<$Result.GetResult<Prisma.$facture_bienPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Facture_bien that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facture_bienFindFirstOrThrowArgs} args - Arguments to find a Facture_bien
     * @example
     * // Get one Facture_bien
     * const facture_bien = await prisma.facture_bien.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends facture_bienFindFirstOrThrowArgs>(args?: SelectSubset<T, facture_bienFindFirstOrThrowArgs<ExtArgs>>): Prisma__facture_bienClient<$Result.GetResult<Prisma.$facture_bienPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Facture_biens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facture_bienFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Facture_biens
     * const facture_biens = await prisma.facture_bien.findMany()
     * 
     * // Get first 10 Facture_biens
     * const facture_biens = await prisma.facture_bien.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const facture_bienWithIdOnly = await prisma.facture_bien.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends facture_bienFindManyArgs>(args?: SelectSubset<T, facture_bienFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$facture_bienPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Facture_bien.
     * @param {facture_bienCreateArgs} args - Arguments to create a Facture_bien.
     * @example
     * // Create one Facture_bien
     * const Facture_bien = await prisma.facture_bien.create({
     *   data: {
     *     // ... data to create a Facture_bien
     *   }
     * })
     * 
     */
    create<T extends facture_bienCreateArgs>(args: SelectSubset<T, facture_bienCreateArgs<ExtArgs>>): Prisma__facture_bienClient<$Result.GetResult<Prisma.$facture_bienPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Facture_biens.
     * @param {facture_bienCreateManyArgs} args - Arguments to create many Facture_biens.
     * @example
     * // Create many Facture_biens
     * const facture_bien = await prisma.facture_bien.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends facture_bienCreateManyArgs>(args?: SelectSubset<T, facture_bienCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Facture_biens and returns the data saved in the database.
     * @param {facture_bienCreateManyAndReturnArgs} args - Arguments to create many Facture_biens.
     * @example
     * // Create many Facture_biens
     * const facture_bien = await prisma.facture_bien.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Facture_biens and only return the `id`
     * const facture_bienWithIdOnly = await prisma.facture_bien.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends facture_bienCreateManyAndReturnArgs>(args?: SelectSubset<T, facture_bienCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$facture_bienPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Facture_bien.
     * @param {facture_bienDeleteArgs} args - Arguments to delete one Facture_bien.
     * @example
     * // Delete one Facture_bien
     * const Facture_bien = await prisma.facture_bien.delete({
     *   where: {
     *     // ... filter to delete one Facture_bien
     *   }
     * })
     * 
     */
    delete<T extends facture_bienDeleteArgs>(args: SelectSubset<T, facture_bienDeleteArgs<ExtArgs>>): Prisma__facture_bienClient<$Result.GetResult<Prisma.$facture_bienPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Facture_bien.
     * @param {facture_bienUpdateArgs} args - Arguments to update one Facture_bien.
     * @example
     * // Update one Facture_bien
     * const facture_bien = await prisma.facture_bien.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends facture_bienUpdateArgs>(args: SelectSubset<T, facture_bienUpdateArgs<ExtArgs>>): Prisma__facture_bienClient<$Result.GetResult<Prisma.$facture_bienPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Facture_biens.
     * @param {facture_bienDeleteManyArgs} args - Arguments to filter Facture_biens to delete.
     * @example
     * // Delete a few Facture_biens
     * const { count } = await prisma.facture_bien.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends facture_bienDeleteManyArgs>(args?: SelectSubset<T, facture_bienDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facture_biens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facture_bienUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Facture_biens
     * const facture_bien = await prisma.facture_bien.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends facture_bienUpdateManyArgs>(args: SelectSubset<T, facture_bienUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Facture_biens and returns the data updated in the database.
     * @param {facture_bienUpdateManyAndReturnArgs} args - Arguments to update many Facture_biens.
     * @example
     * // Update many Facture_biens
     * const facture_bien = await prisma.facture_bien.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Facture_biens and only return the `id`
     * const facture_bienWithIdOnly = await prisma.facture_bien.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends facture_bienUpdateManyAndReturnArgs>(args: SelectSubset<T, facture_bienUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$facture_bienPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Facture_bien.
     * @param {facture_bienUpsertArgs} args - Arguments to update or create a Facture_bien.
     * @example
     * // Update or create a Facture_bien
     * const facture_bien = await prisma.facture_bien.upsert({
     *   create: {
     *     // ... data to create a Facture_bien
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Facture_bien we want to update
     *   }
     * })
     */
    upsert<T extends facture_bienUpsertArgs>(args: SelectSubset<T, facture_bienUpsertArgs<ExtArgs>>): Prisma__facture_bienClient<$Result.GetResult<Prisma.$facture_bienPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Facture_biens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facture_bienCountArgs} args - Arguments to filter Facture_biens to count.
     * @example
     * // Count the number of Facture_biens
     * const count = await prisma.facture_bien.count({
     *   where: {
     *     // ... the filter for the Facture_biens we want to count
     *   }
     * })
    **/
    count<T extends facture_bienCountArgs>(
      args?: Subset<T, facture_bienCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Facture_bienCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Facture_bien.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Facture_bienAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Facture_bienAggregateArgs>(args: Subset<T, Facture_bienAggregateArgs>): Prisma.PrismaPromise<GetFacture_bienAggregateType<T>>

    /**
     * Group by Facture_bien.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facture_bienGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends facture_bienGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: facture_bienGroupByArgs['orderBy'] }
        : { orderBy?: facture_bienGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, facture_bienGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacture_bienGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the facture_bien model
   */
  readonly fields: facture_bienFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for facture_bien.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__facture_bienClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    facture<T extends factureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, factureDefaultArgs<ExtArgs>>): Prisma__factureClient<$Result.GetResult<Prisma.$facturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bien<T extends bienDefaultArgs<ExtArgs> = {}>(args?: Subset<T, bienDefaultArgs<ExtArgs>>): Prisma__bienClient<$Result.GetResult<Prisma.$bienPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    utilisateur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the facture_bien model
   */
  interface facture_bienFieldRefs {
    readonly id: FieldRef<"facture_bien", 'Int'>
    readonly id_facture: FieldRef<"facture_bien", 'Int'>
    readonly id_bien: FieldRef<"facture_bien", 'Int'>
    readonly type_bien: FieldRef<"facture_bien", 'BienType'>
    readonly quantite: FieldRef<"facture_bien", 'Int'>
    readonly Cree_par: FieldRef<"facture_bien", 'String'>
  }
    

  // Custom InputTypes
  /**
   * facture_bien findUnique
   */
  export type facture_bienFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facture_bien
     */
    select?: facture_bienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facture_bien
     */
    omit?: facture_bienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facture_bienInclude<ExtArgs> | null
    /**
     * Filter, which facture_bien to fetch.
     */
    where: facture_bienWhereUniqueInput
  }

  /**
   * facture_bien findUniqueOrThrow
   */
  export type facture_bienFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facture_bien
     */
    select?: facture_bienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facture_bien
     */
    omit?: facture_bienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facture_bienInclude<ExtArgs> | null
    /**
     * Filter, which facture_bien to fetch.
     */
    where: facture_bienWhereUniqueInput
  }

  /**
   * facture_bien findFirst
   */
  export type facture_bienFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facture_bien
     */
    select?: facture_bienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facture_bien
     */
    omit?: facture_bienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facture_bienInclude<ExtArgs> | null
    /**
     * Filter, which facture_bien to fetch.
     */
    where?: facture_bienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facture_biens to fetch.
     */
    orderBy?: facture_bienOrderByWithRelationInput | facture_bienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for facture_biens.
     */
    cursor?: facture_bienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facture_biens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facture_biens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of facture_biens.
     */
    distinct?: Facture_bienScalarFieldEnum | Facture_bienScalarFieldEnum[]
  }

  /**
   * facture_bien findFirstOrThrow
   */
  export type facture_bienFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facture_bien
     */
    select?: facture_bienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facture_bien
     */
    omit?: facture_bienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facture_bienInclude<ExtArgs> | null
    /**
     * Filter, which facture_bien to fetch.
     */
    where?: facture_bienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facture_biens to fetch.
     */
    orderBy?: facture_bienOrderByWithRelationInput | facture_bienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for facture_biens.
     */
    cursor?: facture_bienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facture_biens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facture_biens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of facture_biens.
     */
    distinct?: Facture_bienScalarFieldEnum | Facture_bienScalarFieldEnum[]
  }

  /**
   * facture_bien findMany
   */
  export type facture_bienFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facture_bien
     */
    select?: facture_bienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facture_bien
     */
    omit?: facture_bienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facture_bienInclude<ExtArgs> | null
    /**
     * Filter, which facture_biens to fetch.
     */
    where?: facture_bienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of facture_biens to fetch.
     */
    orderBy?: facture_bienOrderByWithRelationInput | facture_bienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing facture_biens.
     */
    cursor?: facture_bienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` facture_biens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` facture_biens.
     */
    skip?: number
    distinct?: Facture_bienScalarFieldEnum | Facture_bienScalarFieldEnum[]
  }

  /**
   * facture_bien create
   */
  export type facture_bienCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facture_bien
     */
    select?: facture_bienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facture_bien
     */
    omit?: facture_bienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facture_bienInclude<ExtArgs> | null
    /**
     * The data needed to create a facture_bien.
     */
    data: XOR<facture_bienCreateInput, facture_bienUncheckedCreateInput>
  }

  /**
   * facture_bien createMany
   */
  export type facture_bienCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many facture_biens.
     */
    data: facture_bienCreateManyInput | facture_bienCreateManyInput[]
  }

  /**
   * facture_bien createManyAndReturn
   */
  export type facture_bienCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facture_bien
     */
    select?: facture_bienSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the facture_bien
     */
    omit?: facture_bienOmit<ExtArgs> | null
    /**
     * The data used to create many facture_biens.
     */
    data: facture_bienCreateManyInput | facture_bienCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facture_bienIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * facture_bien update
   */
  export type facture_bienUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facture_bien
     */
    select?: facture_bienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facture_bien
     */
    omit?: facture_bienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facture_bienInclude<ExtArgs> | null
    /**
     * The data needed to update a facture_bien.
     */
    data: XOR<facture_bienUpdateInput, facture_bienUncheckedUpdateInput>
    /**
     * Choose, which facture_bien to update.
     */
    where: facture_bienWhereUniqueInput
  }

  /**
   * facture_bien updateMany
   */
  export type facture_bienUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update facture_biens.
     */
    data: XOR<facture_bienUpdateManyMutationInput, facture_bienUncheckedUpdateManyInput>
    /**
     * Filter which facture_biens to update
     */
    where?: facture_bienWhereInput
    /**
     * Limit how many facture_biens to update.
     */
    limit?: number
  }

  /**
   * facture_bien updateManyAndReturn
   */
  export type facture_bienUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facture_bien
     */
    select?: facture_bienSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the facture_bien
     */
    omit?: facture_bienOmit<ExtArgs> | null
    /**
     * The data used to update facture_biens.
     */
    data: XOR<facture_bienUpdateManyMutationInput, facture_bienUncheckedUpdateManyInput>
    /**
     * Filter which facture_biens to update
     */
    where?: facture_bienWhereInput
    /**
     * Limit how many facture_biens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facture_bienIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * facture_bien upsert
   */
  export type facture_bienUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facture_bien
     */
    select?: facture_bienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facture_bien
     */
    omit?: facture_bienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facture_bienInclude<ExtArgs> | null
    /**
     * The filter to search for the facture_bien to update in case it exists.
     */
    where: facture_bienWhereUniqueInput
    /**
     * In case the facture_bien found by the `where` argument doesn't exist, create a new facture_bien with this data.
     */
    create: XOR<facture_bienCreateInput, facture_bienUncheckedCreateInput>
    /**
     * In case the facture_bien was found with the provided `where` argument, update it with this data.
     */
    update: XOR<facture_bienUpdateInput, facture_bienUncheckedUpdateInput>
  }

  /**
   * facture_bien delete
   */
  export type facture_bienDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facture_bien
     */
    select?: facture_bienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facture_bien
     */
    omit?: facture_bienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facture_bienInclude<ExtArgs> | null
    /**
     * Filter which facture_bien to delete.
     */
    where: facture_bienWhereUniqueInput
  }

  /**
   * facture_bien deleteMany
   */
  export type facture_bienDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which facture_biens to delete
     */
    where?: facture_bienWhereInput
    /**
     * Limit how many facture_biens to delete.
     */
    limit?: number
  }

  /**
   * facture_bien without action
   */
  export type facture_bienDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facture_bien
     */
    select?: facture_bienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the facture_bien
     */
    omit?: facture_bienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facture_bienInclude<ExtArgs> | null
  }


  /**
   * Model paiment
   */

  export type AggregatePaiment = {
    _count: PaimentCountAggregateOutputType | null
    _avg: PaimentAvgAggregateOutputType | null
    _sum: PaimentSumAggregateOutputType | null
    _min: PaimentMinAggregateOutputType | null
    _max: PaimentMaxAggregateOutputType | null
  }

  export type PaimentAvgAggregateOutputType = {
    id: number | null
    id_facture: number | null
    montant_totale: number | null
  }

  export type PaimentSumAggregateOutputType = {
    id: number | null
    id_facture: number | null
    montant_totale: number | null
  }

  export type PaimentMinAggregateOutputType = {
    id: number | null
    id_facture: number | null
    date: Date | null
    montant_totale: number | null
    Cree_par: string | null
  }

  export type PaimentMaxAggregateOutputType = {
    id: number | null
    id_facture: number | null
    date: Date | null
    montant_totale: number | null
    Cree_par: string | null
  }

  export type PaimentCountAggregateOutputType = {
    id: number
    id_facture: number
    date: number
    montant_totale: number
    Cree_par: number
    _all: number
  }


  export type PaimentAvgAggregateInputType = {
    id?: true
    id_facture?: true
    montant_totale?: true
  }

  export type PaimentSumAggregateInputType = {
    id?: true
    id_facture?: true
    montant_totale?: true
  }

  export type PaimentMinAggregateInputType = {
    id?: true
    id_facture?: true
    date?: true
    montant_totale?: true
    Cree_par?: true
  }

  export type PaimentMaxAggregateInputType = {
    id?: true
    id_facture?: true
    date?: true
    montant_totale?: true
    Cree_par?: true
  }

  export type PaimentCountAggregateInputType = {
    id?: true
    id_facture?: true
    date?: true
    montant_totale?: true
    Cree_par?: true
    _all?: true
  }

  export type PaimentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which paiment to aggregate.
     */
    where?: paimentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of paiments to fetch.
     */
    orderBy?: paimentOrderByWithRelationInput | paimentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: paimentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` paiments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` paiments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned paiments
    **/
    _count?: true | PaimentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaimentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaimentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaimentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaimentMaxAggregateInputType
  }

  export type GetPaimentAggregateType<T extends PaimentAggregateArgs> = {
        [P in keyof T & keyof AggregatePaiment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaiment[P]>
      : GetScalarType<T[P], AggregatePaiment[P]>
  }




  export type paimentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paimentWhereInput
    orderBy?: paimentOrderByWithAggregationInput | paimentOrderByWithAggregationInput[]
    by: PaimentScalarFieldEnum[] | PaimentScalarFieldEnum
    having?: paimentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaimentCountAggregateInputType | true
    _avg?: PaimentAvgAggregateInputType
    _sum?: PaimentSumAggregateInputType
    _min?: PaimentMinAggregateInputType
    _max?: PaimentMaxAggregateInputType
  }

  export type PaimentGroupByOutputType = {
    id: number
    id_facture: number
    date: Date
    montant_totale: number
    Cree_par: string
    _count: PaimentCountAggregateOutputType | null
    _avg: PaimentAvgAggregateOutputType | null
    _sum: PaimentSumAggregateOutputType | null
    _min: PaimentMinAggregateOutputType | null
    _max: PaimentMaxAggregateOutputType | null
  }

  type GetPaimentGroupByPayload<T extends paimentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaimentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaimentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaimentGroupByOutputType[P]>
            : GetScalarType<T[P], PaimentGroupByOutputType[P]>
        }
      >
    >


  export type paimentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_facture?: boolean
    date?: boolean
    montant_totale?: boolean
    Cree_par?: boolean
    facture?: boolean | factureDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paiment"]>

  export type paimentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_facture?: boolean
    date?: boolean
    montant_totale?: boolean
    Cree_par?: boolean
    facture?: boolean | factureDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paiment"]>

  export type paimentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_facture?: boolean
    date?: boolean
    montant_totale?: boolean
    Cree_par?: boolean
    facture?: boolean | factureDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paiment"]>

  export type paimentSelectScalar = {
    id?: boolean
    id_facture?: boolean
    date?: boolean
    montant_totale?: boolean
    Cree_par?: boolean
  }

  export type paimentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_facture" | "date" | "montant_totale" | "Cree_par", ExtArgs["result"]["paiment"]>
  export type paimentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facture?: boolean | factureDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }
  export type paimentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facture?: boolean | factureDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }
  export type paimentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    facture?: boolean | factureDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }

  export type $paimentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "paiment"
    objects: {
      facture: Prisma.$facturePayload<ExtArgs>
      utilisateur: Prisma.$UtilisateurPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_facture: number
      date: Date
      montant_totale: number
      Cree_par: string
    }, ExtArgs["result"]["paiment"]>
    composites: {}
  }

  type paimentGetPayload<S extends boolean | null | undefined | paimentDefaultArgs> = $Result.GetResult<Prisma.$paimentPayload, S>

  type paimentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<paimentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaimentCountAggregateInputType | true
    }

  export interface paimentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['paiment'], meta: { name: 'paiment' } }
    /**
     * Find zero or one Paiment that matches the filter.
     * @param {paimentFindUniqueArgs} args - Arguments to find a Paiment
     * @example
     * // Get one Paiment
     * const paiment = await prisma.paiment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends paimentFindUniqueArgs>(args: SelectSubset<T, paimentFindUniqueArgs<ExtArgs>>): Prisma__paimentClient<$Result.GetResult<Prisma.$paimentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Paiment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {paimentFindUniqueOrThrowArgs} args - Arguments to find a Paiment
     * @example
     * // Get one Paiment
     * const paiment = await prisma.paiment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends paimentFindUniqueOrThrowArgs>(args: SelectSubset<T, paimentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__paimentClient<$Result.GetResult<Prisma.$paimentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paiment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paimentFindFirstArgs} args - Arguments to find a Paiment
     * @example
     * // Get one Paiment
     * const paiment = await prisma.paiment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends paimentFindFirstArgs>(args?: SelectSubset<T, paimentFindFirstArgs<ExtArgs>>): Prisma__paimentClient<$Result.GetResult<Prisma.$paimentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paiment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paimentFindFirstOrThrowArgs} args - Arguments to find a Paiment
     * @example
     * // Get one Paiment
     * const paiment = await prisma.paiment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends paimentFindFirstOrThrowArgs>(args?: SelectSubset<T, paimentFindFirstOrThrowArgs<ExtArgs>>): Prisma__paimentClient<$Result.GetResult<Prisma.$paimentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Paiments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paimentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Paiments
     * const paiments = await prisma.paiment.findMany()
     * 
     * // Get first 10 Paiments
     * const paiments = await prisma.paiment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paimentWithIdOnly = await prisma.paiment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends paimentFindManyArgs>(args?: SelectSubset<T, paimentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paimentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Paiment.
     * @param {paimentCreateArgs} args - Arguments to create a Paiment.
     * @example
     * // Create one Paiment
     * const Paiment = await prisma.paiment.create({
     *   data: {
     *     // ... data to create a Paiment
     *   }
     * })
     * 
     */
    create<T extends paimentCreateArgs>(args: SelectSubset<T, paimentCreateArgs<ExtArgs>>): Prisma__paimentClient<$Result.GetResult<Prisma.$paimentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Paiments.
     * @param {paimentCreateManyArgs} args - Arguments to create many Paiments.
     * @example
     * // Create many Paiments
     * const paiment = await prisma.paiment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends paimentCreateManyArgs>(args?: SelectSubset<T, paimentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Paiments and returns the data saved in the database.
     * @param {paimentCreateManyAndReturnArgs} args - Arguments to create many Paiments.
     * @example
     * // Create many Paiments
     * const paiment = await prisma.paiment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Paiments and only return the `id`
     * const paimentWithIdOnly = await prisma.paiment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends paimentCreateManyAndReturnArgs>(args?: SelectSubset<T, paimentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paimentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Paiment.
     * @param {paimentDeleteArgs} args - Arguments to delete one Paiment.
     * @example
     * // Delete one Paiment
     * const Paiment = await prisma.paiment.delete({
     *   where: {
     *     // ... filter to delete one Paiment
     *   }
     * })
     * 
     */
    delete<T extends paimentDeleteArgs>(args: SelectSubset<T, paimentDeleteArgs<ExtArgs>>): Prisma__paimentClient<$Result.GetResult<Prisma.$paimentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Paiment.
     * @param {paimentUpdateArgs} args - Arguments to update one Paiment.
     * @example
     * // Update one Paiment
     * const paiment = await prisma.paiment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends paimentUpdateArgs>(args: SelectSubset<T, paimentUpdateArgs<ExtArgs>>): Prisma__paimentClient<$Result.GetResult<Prisma.$paimentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Paiments.
     * @param {paimentDeleteManyArgs} args - Arguments to filter Paiments to delete.
     * @example
     * // Delete a few Paiments
     * const { count } = await prisma.paiment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends paimentDeleteManyArgs>(args?: SelectSubset<T, paimentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Paiments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paimentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Paiments
     * const paiment = await prisma.paiment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends paimentUpdateManyArgs>(args: SelectSubset<T, paimentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Paiments and returns the data updated in the database.
     * @param {paimentUpdateManyAndReturnArgs} args - Arguments to update many Paiments.
     * @example
     * // Update many Paiments
     * const paiment = await prisma.paiment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Paiments and only return the `id`
     * const paimentWithIdOnly = await prisma.paiment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends paimentUpdateManyAndReturnArgs>(args: SelectSubset<T, paimentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paimentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Paiment.
     * @param {paimentUpsertArgs} args - Arguments to update or create a Paiment.
     * @example
     * // Update or create a Paiment
     * const paiment = await prisma.paiment.upsert({
     *   create: {
     *     // ... data to create a Paiment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paiment we want to update
     *   }
     * })
     */
    upsert<T extends paimentUpsertArgs>(args: SelectSubset<T, paimentUpsertArgs<ExtArgs>>): Prisma__paimentClient<$Result.GetResult<Prisma.$paimentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Paiments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paimentCountArgs} args - Arguments to filter Paiments to count.
     * @example
     * // Count the number of Paiments
     * const count = await prisma.paiment.count({
     *   where: {
     *     // ... the filter for the Paiments we want to count
     *   }
     * })
    **/
    count<T extends paimentCountArgs>(
      args?: Subset<T, paimentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaimentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paiment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaimentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaimentAggregateArgs>(args: Subset<T, PaimentAggregateArgs>): Prisma.PrismaPromise<GetPaimentAggregateType<T>>

    /**
     * Group by Paiment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paimentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends paimentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paimentGroupByArgs['orderBy'] }
        : { orderBy?: paimentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, paimentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaimentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the paiment model
   */
  readonly fields: paimentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for paiment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paimentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    facture<T extends factureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, factureDefaultArgs<ExtArgs>>): Prisma__factureClient<$Result.GetResult<Prisma.$facturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    utilisateur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the paiment model
   */
  interface paimentFieldRefs {
    readonly id: FieldRef<"paiment", 'Int'>
    readonly id_facture: FieldRef<"paiment", 'Int'>
    readonly date: FieldRef<"paiment", 'DateTime'>
    readonly montant_totale: FieldRef<"paiment", 'Float'>
    readonly Cree_par: FieldRef<"paiment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * paiment findUnique
   */
  export type paimentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paiment
     */
    select?: paimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paiment
     */
    omit?: paimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paimentInclude<ExtArgs> | null
    /**
     * Filter, which paiment to fetch.
     */
    where: paimentWhereUniqueInput
  }

  /**
   * paiment findUniqueOrThrow
   */
  export type paimentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paiment
     */
    select?: paimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paiment
     */
    omit?: paimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paimentInclude<ExtArgs> | null
    /**
     * Filter, which paiment to fetch.
     */
    where: paimentWhereUniqueInput
  }

  /**
   * paiment findFirst
   */
  export type paimentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paiment
     */
    select?: paimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paiment
     */
    omit?: paimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paimentInclude<ExtArgs> | null
    /**
     * Filter, which paiment to fetch.
     */
    where?: paimentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of paiments to fetch.
     */
    orderBy?: paimentOrderByWithRelationInput | paimentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for paiments.
     */
    cursor?: paimentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` paiments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` paiments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of paiments.
     */
    distinct?: PaimentScalarFieldEnum | PaimentScalarFieldEnum[]
  }

  /**
   * paiment findFirstOrThrow
   */
  export type paimentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paiment
     */
    select?: paimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paiment
     */
    omit?: paimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paimentInclude<ExtArgs> | null
    /**
     * Filter, which paiment to fetch.
     */
    where?: paimentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of paiments to fetch.
     */
    orderBy?: paimentOrderByWithRelationInput | paimentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for paiments.
     */
    cursor?: paimentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` paiments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` paiments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of paiments.
     */
    distinct?: PaimentScalarFieldEnum | PaimentScalarFieldEnum[]
  }

  /**
   * paiment findMany
   */
  export type paimentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paiment
     */
    select?: paimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paiment
     */
    omit?: paimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paimentInclude<ExtArgs> | null
    /**
     * Filter, which paiments to fetch.
     */
    where?: paimentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of paiments to fetch.
     */
    orderBy?: paimentOrderByWithRelationInput | paimentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing paiments.
     */
    cursor?: paimentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` paiments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` paiments.
     */
    skip?: number
    distinct?: PaimentScalarFieldEnum | PaimentScalarFieldEnum[]
  }

  /**
   * paiment create
   */
  export type paimentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paiment
     */
    select?: paimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paiment
     */
    omit?: paimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paimentInclude<ExtArgs> | null
    /**
     * The data needed to create a paiment.
     */
    data: XOR<paimentCreateInput, paimentUncheckedCreateInput>
  }

  /**
   * paiment createMany
   */
  export type paimentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many paiments.
     */
    data: paimentCreateManyInput | paimentCreateManyInput[]
  }

  /**
   * paiment createManyAndReturn
   */
  export type paimentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paiment
     */
    select?: paimentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the paiment
     */
    omit?: paimentOmit<ExtArgs> | null
    /**
     * The data used to create many paiments.
     */
    data: paimentCreateManyInput | paimentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paimentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * paiment update
   */
  export type paimentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paiment
     */
    select?: paimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paiment
     */
    omit?: paimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paimentInclude<ExtArgs> | null
    /**
     * The data needed to update a paiment.
     */
    data: XOR<paimentUpdateInput, paimentUncheckedUpdateInput>
    /**
     * Choose, which paiment to update.
     */
    where: paimentWhereUniqueInput
  }

  /**
   * paiment updateMany
   */
  export type paimentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update paiments.
     */
    data: XOR<paimentUpdateManyMutationInput, paimentUncheckedUpdateManyInput>
    /**
     * Filter which paiments to update
     */
    where?: paimentWhereInput
    /**
     * Limit how many paiments to update.
     */
    limit?: number
  }

  /**
   * paiment updateManyAndReturn
   */
  export type paimentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paiment
     */
    select?: paimentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the paiment
     */
    omit?: paimentOmit<ExtArgs> | null
    /**
     * The data used to update paiments.
     */
    data: XOR<paimentUpdateManyMutationInput, paimentUncheckedUpdateManyInput>
    /**
     * Filter which paiments to update
     */
    where?: paimentWhereInput
    /**
     * Limit how many paiments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paimentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * paiment upsert
   */
  export type paimentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paiment
     */
    select?: paimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paiment
     */
    omit?: paimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paimentInclude<ExtArgs> | null
    /**
     * The filter to search for the paiment to update in case it exists.
     */
    where: paimentWhereUniqueInput
    /**
     * In case the paiment found by the `where` argument doesn't exist, create a new paiment with this data.
     */
    create: XOR<paimentCreateInput, paimentUncheckedCreateInput>
    /**
     * In case the paiment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paimentUpdateInput, paimentUncheckedUpdateInput>
  }

  /**
   * paiment delete
   */
  export type paimentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paiment
     */
    select?: paimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paiment
     */
    omit?: paimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paimentInclude<ExtArgs> | null
    /**
     * Filter which paiment to delete.
     */
    where: paimentWhereUniqueInput
  }

  /**
   * paiment deleteMany
   */
  export type paimentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which paiments to delete
     */
    where?: paimentWhereInput
    /**
     * Limit how many paiments to delete.
     */
    limit?: number
  }

  /**
   * paiment without action
   */
  export type paimentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the paiment
     */
    select?: paimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the paiment
     */
    omit?: paimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paimentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UtilisateurScalarFieldEnum: {
    id: 'id',
    CIN: 'CIN',
    nom: 'nom',
    prenom: 'prenom',
    date_naissance: 'date_naissance',
    adresse: 'adresse',
    numero_telephone: 'numero_telephone',
    email: 'email',
    password: 'password',
    role: 'role',
    created_at: 'created_at'
  };

  export type UtilisateurScalarFieldEnum = (typeof UtilisateurScalarFieldEnum)[keyof typeof UtilisateurScalarFieldEnum]


  export const EntrepriseScalarFieldEnum: {
    id: 'id',
    ICE: 'ICE',
    CNSS: 'CNSS',
    RC: 'RC',
    IF: 'IF',
    RIB: 'RIB',
    patente: 'patente',
    adresse: 'adresse',
    created_at: 'created_at'
  };

  export type EntrepriseScalarFieldEnum = (typeof EntrepriseScalarFieldEnum)[keyof typeof EntrepriseScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    CIN: 'CIN',
    nom: 'nom',
    prenom: 'prenom',
    date_naissance: 'date_naissance',
    adresse: 'adresse',
    numero_telephone: 'numero_telephone',
    email: 'email',
    groupe_sanguin: 'groupe_sanguin',
    antecedents: 'antecedents',
    allergies: 'allergies',
    commentaire: 'commentaire',
    created_at: 'created_at',
    Cree_par: 'Cree_par'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const Rendez_vousScalarFieldEnum: {
    id: 'id',
    CIN: 'CIN',
    sujet: 'sujet',
    date_rendez_vous: 'date_rendez_vous',
    created_at: 'created_at',
    Cree_par: 'Cree_par'
  };

  export type Rendez_vousScalarFieldEnum = (typeof Rendez_vousScalarFieldEnum)[keyof typeof Rendez_vousScalarFieldEnum]


  export const Document_templatesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    sections_json: 'sections_json',
    Cree_par: 'Cree_par'
  };

  export type Document_templatesScalarFieldEnum = (typeof Document_templatesScalarFieldEnum)[keyof typeof Document_templatesScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    template_id: 'template_id',
    CIN: 'CIN',
    data_json: 'data_json',
    Cree_par: 'Cree_par'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const BienScalarFieldEnum: {
    id: 'id',
    Nom: 'Nom',
    bien_type: 'bien_type',
    Type: 'Type',
    prix: 'prix',
    stock: 'stock',
    Cree_par: 'Cree_par'
  };

  export type BienScalarFieldEnum = (typeof BienScalarFieldEnum)[keyof typeof BienScalarFieldEnum]


  export const FactureScalarFieldEnum: {
    id: 'id',
    CIN: 'CIN',
    date: 'date',
    prix_total: 'prix_total',
    statut: 'statut',
    notes: 'notes',
    Cree_par: 'Cree_par'
  };

  export type FactureScalarFieldEnum = (typeof FactureScalarFieldEnum)[keyof typeof FactureScalarFieldEnum]


  export const Facture_bienScalarFieldEnum: {
    id: 'id',
    id_facture: 'id_facture',
    id_bien: 'id_bien',
    type_bien: 'type_bien',
    quantite: 'quantite',
    Cree_par: 'Cree_par'
  };

  export type Facture_bienScalarFieldEnum = (typeof Facture_bienScalarFieldEnum)[keyof typeof Facture_bienScalarFieldEnum]


  export const PaimentScalarFieldEnum: {
    id: 'id',
    id_facture: 'id_facture',
    date: 'date',
    montant_totale: 'montant_totale',
    Cree_par: 'Cree_par'
  };

  export type PaimentScalarFieldEnum = (typeof PaimentScalarFieldEnum)[keyof typeof PaimentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'BienType'
   */
  export type EnumBienTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BienType'>
    


  /**
   * Reference to a field of type 'ServiceType'
   */
  export type EnumServiceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'FactureStatus'
   */
  export type EnumFactureStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FactureStatus'>
    
  /**
   * Deep Input Types
   */


  export type UtilisateurWhereInput = {
    AND?: UtilisateurWhereInput | UtilisateurWhereInput[]
    OR?: UtilisateurWhereInput[]
    NOT?: UtilisateurWhereInput | UtilisateurWhereInput[]
    id?: IntFilter<"Utilisateur"> | number
    CIN?: StringFilter<"Utilisateur"> | string
    nom?: StringFilter<"Utilisateur"> | string
    prenom?: StringFilter<"Utilisateur"> | string
    date_naissance?: DateTimeFilter<"Utilisateur"> | Date | string
    adresse?: StringFilter<"Utilisateur"> | string
    numero_telephone?: StringFilter<"Utilisateur"> | string
    email?: StringFilter<"Utilisateur"> | string
    password?: StringFilter<"Utilisateur"> | string
    role?: EnumRoleFilter<"Utilisateur"> | $Enums.Role
    created_at?: DateTimeFilter<"Utilisateur"> | Date | string
    clients?: ClientListRelationFilter
    rendez_vous?: Rendez_vousListRelationFilter
    documentTemplates?: Document_templatesListRelationFilter
    documents?: DocumentListRelationFilter
    biens?: BienListRelationFilter
    factures?: FactureListRelationFilter
    factureBiens?: Facture_bienListRelationFilter
    paiements?: PaimentListRelationFilter
  }

  export type UtilisateurOrderByWithRelationInput = {
    id?: SortOrder
    CIN?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    date_naissance?: SortOrder
    adresse?: SortOrder
    numero_telephone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    clients?: ClientOrderByRelationAggregateInput
    rendez_vous?: rendez_vousOrderByRelationAggregateInput
    documentTemplates?: document_templatesOrderByRelationAggregateInput
    documents?: documentOrderByRelationAggregateInput
    biens?: bienOrderByRelationAggregateInput
    factures?: factureOrderByRelationAggregateInput
    factureBiens?: facture_bienOrderByRelationAggregateInput
    paiements?: paimentOrderByRelationAggregateInput
  }

  export type UtilisateurWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    CIN?: string
    email?: string
    AND?: UtilisateurWhereInput | UtilisateurWhereInput[]
    OR?: UtilisateurWhereInput[]
    NOT?: UtilisateurWhereInput | UtilisateurWhereInput[]
    nom?: StringFilter<"Utilisateur"> | string
    prenom?: StringFilter<"Utilisateur"> | string
    date_naissance?: DateTimeFilter<"Utilisateur"> | Date | string
    adresse?: StringFilter<"Utilisateur"> | string
    numero_telephone?: StringFilter<"Utilisateur"> | string
    password?: StringFilter<"Utilisateur"> | string
    role?: EnumRoleFilter<"Utilisateur"> | $Enums.Role
    created_at?: DateTimeFilter<"Utilisateur"> | Date | string
    clients?: ClientListRelationFilter
    rendez_vous?: Rendez_vousListRelationFilter
    documentTemplates?: Document_templatesListRelationFilter
    documents?: DocumentListRelationFilter
    biens?: BienListRelationFilter
    factures?: FactureListRelationFilter
    factureBiens?: Facture_bienListRelationFilter
    paiements?: PaimentListRelationFilter
  }, "id" | "CIN" | "email">

  export type UtilisateurOrderByWithAggregationInput = {
    id?: SortOrder
    CIN?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    date_naissance?: SortOrder
    adresse?: SortOrder
    numero_telephone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    _count?: UtilisateurCountOrderByAggregateInput
    _avg?: UtilisateurAvgOrderByAggregateInput
    _max?: UtilisateurMaxOrderByAggregateInput
    _min?: UtilisateurMinOrderByAggregateInput
    _sum?: UtilisateurSumOrderByAggregateInput
  }

  export type UtilisateurScalarWhereWithAggregatesInput = {
    AND?: UtilisateurScalarWhereWithAggregatesInput | UtilisateurScalarWhereWithAggregatesInput[]
    OR?: UtilisateurScalarWhereWithAggregatesInput[]
    NOT?: UtilisateurScalarWhereWithAggregatesInput | UtilisateurScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Utilisateur"> | number
    CIN?: StringWithAggregatesFilter<"Utilisateur"> | string
    nom?: StringWithAggregatesFilter<"Utilisateur"> | string
    prenom?: StringWithAggregatesFilter<"Utilisateur"> | string
    date_naissance?: DateTimeWithAggregatesFilter<"Utilisateur"> | Date | string
    adresse?: StringWithAggregatesFilter<"Utilisateur"> | string
    numero_telephone?: StringWithAggregatesFilter<"Utilisateur"> | string
    email?: StringWithAggregatesFilter<"Utilisateur"> | string
    password?: StringWithAggregatesFilter<"Utilisateur"> | string
    role?: EnumRoleWithAggregatesFilter<"Utilisateur"> | $Enums.Role
    created_at?: DateTimeWithAggregatesFilter<"Utilisateur"> | Date | string
  }

  export type EntrepriseWhereInput = {
    AND?: EntrepriseWhereInput | EntrepriseWhereInput[]
    OR?: EntrepriseWhereInput[]
    NOT?: EntrepriseWhereInput | EntrepriseWhereInput[]
    id?: IntFilter<"Entreprise"> | number
    ICE?: IntFilter<"Entreprise"> | number
    CNSS?: IntFilter<"Entreprise"> | number
    RC?: IntFilter<"Entreprise"> | number
    IF?: IntFilter<"Entreprise"> | number
    RIB?: IntFilter<"Entreprise"> | number
    patente?: IntFilter<"Entreprise"> | number
    adresse?: StringFilter<"Entreprise"> | string
    created_at?: DateTimeFilter<"Entreprise"> | Date | string
  }

  export type EntrepriseOrderByWithRelationInput = {
    id?: SortOrder
    ICE?: SortOrder
    CNSS?: SortOrder
    RC?: SortOrder
    IF?: SortOrder
    RIB?: SortOrder
    patente?: SortOrder
    adresse?: SortOrder
    created_at?: SortOrder
  }

  export type EntrepriseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EntrepriseWhereInput | EntrepriseWhereInput[]
    OR?: EntrepriseWhereInput[]
    NOT?: EntrepriseWhereInput | EntrepriseWhereInput[]
    ICE?: IntFilter<"Entreprise"> | number
    CNSS?: IntFilter<"Entreprise"> | number
    RC?: IntFilter<"Entreprise"> | number
    IF?: IntFilter<"Entreprise"> | number
    RIB?: IntFilter<"Entreprise"> | number
    patente?: IntFilter<"Entreprise"> | number
    adresse?: StringFilter<"Entreprise"> | string
    created_at?: DateTimeFilter<"Entreprise"> | Date | string
  }, "id">

  export type EntrepriseOrderByWithAggregationInput = {
    id?: SortOrder
    ICE?: SortOrder
    CNSS?: SortOrder
    RC?: SortOrder
    IF?: SortOrder
    RIB?: SortOrder
    patente?: SortOrder
    adresse?: SortOrder
    created_at?: SortOrder
    _count?: EntrepriseCountOrderByAggregateInput
    _avg?: EntrepriseAvgOrderByAggregateInput
    _max?: EntrepriseMaxOrderByAggregateInput
    _min?: EntrepriseMinOrderByAggregateInput
    _sum?: EntrepriseSumOrderByAggregateInput
  }

  export type EntrepriseScalarWhereWithAggregatesInput = {
    AND?: EntrepriseScalarWhereWithAggregatesInput | EntrepriseScalarWhereWithAggregatesInput[]
    OR?: EntrepriseScalarWhereWithAggregatesInput[]
    NOT?: EntrepriseScalarWhereWithAggregatesInput | EntrepriseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Entreprise"> | number
    ICE?: IntWithAggregatesFilter<"Entreprise"> | number
    CNSS?: IntWithAggregatesFilter<"Entreprise"> | number
    RC?: IntWithAggregatesFilter<"Entreprise"> | number
    IF?: IntWithAggregatesFilter<"Entreprise"> | number
    RIB?: IntWithAggregatesFilter<"Entreprise"> | number
    patente?: IntWithAggregatesFilter<"Entreprise"> | number
    adresse?: StringWithAggregatesFilter<"Entreprise"> | string
    created_at?: DateTimeWithAggregatesFilter<"Entreprise"> | Date | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: IntFilter<"Client"> | number
    CIN?: StringFilter<"Client"> | string
    nom?: StringFilter<"Client"> | string
    prenom?: StringFilter<"Client"> | string
    date_naissance?: DateTimeFilter<"Client"> | Date | string
    adresse?: StringFilter<"Client"> | string
    numero_telephone?: StringFilter<"Client"> | string
    email?: StringFilter<"Client"> | string
    groupe_sanguin?: StringFilter<"Client"> | string
    antecedents?: StringNullableFilter<"Client"> | string | null
    allergies?: StringNullableFilter<"Client"> | string | null
    commentaire?: StringNullableFilter<"Client"> | string | null
    created_at?: DateTimeFilter<"Client"> | Date | string
    Cree_par?: StringFilter<"Client"> | string
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    rendez_vous?: Rendez_vousListRelationFilter
    documents?: DocumentListRelationFilter
    factures?: FactureListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    CIN?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    date_naissance?: SortOrder
    adresse?: SortOrder
    numero_telephone?: SortOrder
    email?: SortOrder
    groupe_sanguin?: SortOrder
    antecedents?: SortOrderInput | SortOrder
    allergies?: SortOrderInput | SortOrder
    commentaire?: SortOrderInput | SortOrder
    created_at?: SortOrder
    Cree_par?: SortOrder
    utilisateur?: UtilisateurOrderByWithRelationInput
    rendez_vous?: rendez_vousOrderByRelationAggregateInput
    documents?: documentOrderByRelationAggregateInput
    factures?: factureOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    CIN?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    nom?: StringFilter<"Client"> | string
    prenom?: StringFilter<"Client"> | string
    date_naissance?: DateTimeFilter<"Client"> | Date | string
    adresse?: StringFilter<"Client"> | string
    numero_telephone?: StringFilter<"Client"> | string
    email?: StringFilter<"Client"> | string
    groupe_sanguin?: StringFilter<"Client"> | string
    antecedents?: StringNullableFilter<"Client"> | string | null
    allergies?: StringNullableFilter<"Client"> | string | null
    commentaire?: StringNullableFilter<"Client"> | string | null
    created_at?: DateTimeFilter<"Client"> | Date | string
    Cree_par?: StringFilter<"Client"> | string
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    rendez_vous?: Rendez_vousListRelationFilter
    documents?: DocumentListRelationFilter
    factures?: FactureListRelationFilter
  }, "id" | "CIN">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    CIN?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    date_naissance?: SortOrder
    adresse?: SortOrder
    numero_telephone?: SortOrder
    email?: SortOrder
    groupe_sanguin?: SortOrder
    antecedents?: SortOrderInput | SortOrder
    allergies?: SortOrderInput | SortOrder
    commentaire?: SortOrderInput | SortOrder
    created_at?: SortOrder
    Cree_par?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _avg?: ClientAvgOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
    _sum?: ClientSumOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Client"> | number
    CIN?: StringWithAggregatesFilter<"Client"> | string
    nom?: StringWithAggregatesFilter<"Client"> | string
    prenom?: StringWithAggregatesFilter<"Client"> | string
    date_naissance?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    adresse?: StringWithAggregatesFilter<"Client"> | string
    numero_telephone?: StringWithAggregatesFilter<"Client"> | string
    email?: StringWithAggregatesFilter<"Client"> | string
    groupe_sanguin?: StringWithAggregatesFilter<"Client"> | string
    antecedents?: StringNullableWithAggregatesFilter<"Client"> | string | null
    allergies?: StringNullableWithAggregatesFilter<"Client"> | string | null
    commentaire?: StringNullableWithAggregatesFilter<"Client"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    Cree_par?: StringWithAggregatesFilter<"Client"> | string
  }

  export type rendez_vousWhereInput = {
    AND?: rendez_vousWhereInput | rendez_vousWhereInput[]
    OR?: rendez_vousWhereInput[]
    NOT?: rendez_vousWhereInput | rendez_vousWhereInput[]
    id?: IntFilter<"rendez_vous"> | number
    CIN?: StringFilter<"rendez_vous"> | string
    sujet?: StringFilter<"rendez_vous"> | string
    date_rendez_vous?: DateTimeFilter<"rendez_vous"> | Date | string
    created_at?: DateTimeFilter<"rendez_vous"> | Date | string
    Cree_par?: StringFilter<"rendez_vous"> | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
  }

  export type rendez_vousOrderByWithRelationInput = {
    id?: SortOrder
    CIN?: SortOrder
    sujet?: SortOrder
    date_rendez_vous?: SortOrder
    created_at?: SortOrder
    Cree_par?: SortOrder
    client?: ClientOrderByWithRelationInput
    utilisateur?: UtilisateurOrderByWithRelationInput
  }

  export type rendez_vousWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: rendez_vousWhereInput | rendez_vousWhereInput[]
    OR?: rendez_vousWhereInput[]
    NOT?: rendez_vousWhereInput | rendez_vousWhereInput[]
    CIN?: StringFilter<"rendez_vous"> | string
    sujet?: StringFilter<"rendez_vous"> | string
    date_rendez_vous?: DateTimeFilter<"rendez_vous"> | Date | string
    created_at?: DateTimeFilter<"rendez_vous"> | Date | string
    Cree_par?: StringFilter<"rendez_vous"> | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
  }, "id">

  export type rendez_vousOrderByWithAggregationInput = {
    id?: SortOrder
    CIN?: SortOrder
    sujet?: SortOrder
    date_rendez_vous?: SortOrder
    created_at?: SortOrder
    Cree_par?: SortOrder
    _count?: rendez_vousCountOrderByAggregateInput
    _avg?: rendez_vousAvgOrderByAggregateInput
    _max?: rendez_vousMaxOrderByAggregateInput
    _min?: rendez_vousMinOrderByAggregateInput
    _sum?: rendez_vousSumOrderByAggregateInput
  }

  export type rendez_vousScalarWhereWithAggregatesInput = {
    AND?: rendez_vousScalarWhereWithAggregatesInput | rendez_vousScalarWhereWithAggregatesInput[]
    OR?: rendez_vousScalarWhereWithAggregatesInput[]
    NOT?: rendez_vousScalarWhereWithAggregatesInput | rendez_vousScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"rendez_vous"> | number
    CIN?: StringWithAggregatesFilter<"rendez_vous"> | string
    sujet?: StringWithAggregatesFilter<"rendez_vous"> | string
    date_rendez_vous?: DateTimeWithAggregatesFilter<"rendez_vous"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"rendez_vous"> | Date | string
    Cree_par?: StringWithAggregatesFilter<"rendez_vous"> | string
  }

  export type document_templatesWhereInput = {
    AND?: document_templatesWhereInput | document_templatesWhereInput[]
    OR?: document_templatesWhereInput[]
    NOT?: document_templatesWhereInput | document_templatesWhereInput[]
    id?: IntFilter<"document_templates"> | number
    name?: StringFilter<"document_templates"> | string
    sections_json?: StringFilter<"document_templates"> | string
    Cree_par?: StringFilter<"document_templates"> | string
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    documents?: DocumentListRelationFilter
  }

  export type document_templatesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    sections_json?: SortOrder
    Cree_par?: SortOrder
    utilisateur?: UtilisateurOrderByWithRelationInput
    documents?: documentOrderByRelationAggregateInput
  }

  export type document_templatesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: document_templatesWhereInput | document_templatesWhereInput[]
    OR?: document_templatesWhereInput[]
    NOT?: document_templatesWhereInput | document_templatesWhereInput[]
    name?: StringFilter<"document_templates"> | string
    sections_json?: StringFilter<"document_templates"> | string
    Cree_par?: StringFilter<"document_templates"> | string
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    documents?: DocumentListRelationFilter
  }, "id">

  export type document_templatesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    sections_json?: SortOrder
    Cree_par?: SortOrder
    _count?: document_templatesCountOrderByAggregateInput
    _avg?: document_templatesAvgOrderByAggregateInput
    _max?: document_templatesMaxOrderByAggregateInput
    _min?: document_templatesMinOrderByAggregateInput
    _sum?: document_templatesSumOrderByAggregateInput
  }

  export type document_templatesScalarWhereWithAggregatesInput = {
    AND?: document_templatesScalarWhereWithAggregatesInput | document_templatesScalarWhereWithAggregatesInput[]
    OR?: document_templatesScalarWhereWithAggregatesInput[]
    NOT?: document_templatesScalarWhereWithAggregatesInput | document_templatesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"document_templates"> | number
    name?: StringWithAggregatesFilter<"document_templates"> | string
    sections_json?: StringWithAggregatesFilter<"document_templates"> | string
    Cree_par?: StringWithAggregatesFilter<"document_templates"> | string
  }

  export type documentWhereInput = {
    AND?: documentWhereInput | documentWhereInput[]
    OR?: documentWhereInput[]
    NOT?: documentWhereInput | documentWhereInput[]
    id?: IntFilter<"document"> | number
    template_id?: IntFilter<"document"> | number
    CIN?: StringFilter<"document"> | string
    data_json?: StringFilter<"document"> | string
    Cree_par?: StringFilter<"document"> | string
    template?: XOR<Document_templatesScalarRelationFilter, document_templatesWhereInput>
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
  }

  export type documentOrderByWithRelationInput = {
    id?: SortOrder
    template_id?: SortOrder
    CIN?: SortOrder
    data_json?: SortOrder
    Cree_par?: SortOrder
    template?: document_templatesOrderByWithRelationInput
    client?: ClientOrderByWithRelationInput
    utilisateur?: UtilisateurOrderByWithRelationInput
  }

  export type documentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: documentWhereInput | documentWhereInput[]
    OR?: documentWhereInput[]
    NOT?: documentWhereInput | documentWhereInput[]
    template_id?: IntFilter<"document"> | number
    CIN?: StringFilter<"document"> | string
    data_json?: StringFilter<"document"> | string
    Cree_par?: StringFilter<"document"> | string
    template?: XOR<Document_templatesScalarRelationFilter, document_templatesWhereInput>
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
  }, "id">

  export type documentOrderByWithAggregationInput = {
    id?: SortOrder
    template_id?: SortOrder
    CIN?: SortOrder
    data_json?: SortOrder
    Cree_par?: SortOrder
    _count?: documentCountOrderByAggregateInput
    _avg?: documentAvgOrderByAggregateInput
    _max?: documentMaxOrderByAggregateInput
    _min?: documentMinOrderByAggregateInput
    _sum?: documentSumOrderByAggregateInput
  }

  export type documentScalarWhereWithAggregatesInput = {
    AND?: documentScalarWhereWithAggregatesInput | documentScalarWhereWithAggregatesInput[]
    OR?: documentScalarWhereWithAggregatesInput[]
    NOT?: documentScalarWhereWithAggregatesInput | documentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"document"> | number
    template_id?: IntWithAggregatesFilter<"document"> | number
    CIN?: StringWithAggregatesFilter<"document"> | string
    data_json?: StringWithAggregatesFilter<"document"> | string
    Cree_par?: StringWithAggregatesFilter<"document"> | string
  }

  export type bienWhereInput = {
    AND?: bienWhereInput | bienWhereInput[]
    OR?: bienWhereInput[]
    NOT?: bienWhereInput | bienWhereInput[]
    id?: IntFilter<"bien"> | number
    Nom?: StringFilter<"bien"> | string
    bien_type?: EnumBienTypeFilter<"bien"> | $Enums.BienType
    Type?: EnumServiceTypeFilter<"bien"> | $Enums.ServiceType
    prix?: FloatFilter<"bien"> | number
    stock?: IntFilter<"bien"> | number
    Cree_par?: StringFilter<"bien"> | string
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    factureBiens?: Facture_bienListRelationFilter
  }

  export type bienOrderByWithRelationInput = {
    id?: SortOrder
    Nom?: SortOrder
    bien_type?: SortOrder
    Type?: SortOrder
    prix?: SortOrder
    stock?: SortOrder
    Cree_par?: SortOrder
    utilisateur?: UtilisateurOrderByWithRelationInput
    factureBiens?: facture_bienOrderByRelationAggregateInput
  }

  export type bienWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: bienWhereInput | bienWhereInput[]
    OR?: bienWhereInput[]
    NOT?: bienWhereInput | bienWhereInput[]
    Nom?: StringFilter<"bien"> | string
    bien_type?: EnumBienTypeFilter<"bien"> | $Enums.BienType
    Type?: EnumServiceTypeFilter<"bien"> | $Enums.ServiceType
    prix?: FloatFilter<"bien"> | number
    stock?: IntFilter<"bien"> | number
    Cree_par?: StringFilter<"bien"> | string
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    factureBiens?: Facture_bienListRelationFilter
  }, "id">

  export type bienOrderByWithAggregationInput = {
    id?: SortOrder
    Nom?: SortOrder
    bien_type?: SortOrder
    Type?: SortOrder
    prix?: SortOrder
    stock?: SortOrder
    Cree_par?: SortOrder
    _count?: bienCountOrderByAggregateInput
    _avg?: bienAvgOrderByAggregateInput
    _max?: bienMaxOrderByAggregateInput
    _min?: bienMinOrderByAggregateInput
    _sum?: bienSumOrderByAggregateInput
  }

  export type bienScalarWhereWithAggregatesInput = {
    AND?: bienScalarWhereWithAggregatesInput | bienScalarWhereWithAggregatesInput[]
    OR?: bienScalarWhereWithAggregatesInput[]
    NOT?: bienScalarWhereWithAggregatesInput | bienScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"bien"> | number
    Nom?: StringWithAggregatesFilter<"bien"> | string
    bien_type?: EnumBienTypeWithAggregatesFilter<"bien"> | $Enums.BienType
    Type?: EnumServiceTypeWithAggregatesFilter<"bien"> | $Enums.ServiceType
    prix?: FloatWithAggregatesFilter<"bien"> | number
    stock?: IntWithAggregatesFilter<"bien"> | number
    Cree_par?: StringWithAggregatesFilter<"bien"> | string
  }

  export type factureWhereInput = {
    AND?: factureWhereInput | factureWhereInput[]
    OR?: factureWhereInput[]
    NOT?: factureWhereInput | factureWhereInput[]
    id?: IntFilter<"facture"> | number
    CIN?: StringFilter<"facture"> | string
    date?: DateTimeFilter<"facture"> | Date | string
    prix_total?: FloatFilter<"facture"> | number
    statut?: EnumFactureStatusFilter<"facture"> | $Enums.FactureStatus
    notes?: StringNullableFilter<"facture"> | string | null
    Cree_par?: StringFilter<"facture"> | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    factureBiens?: Facture_bienListRelationFilter
    paiements?: PaimentListRelationFilter
  }

  export type factureOrderByWithRelationInput = {
    id?: SortOrder
    CIN?: SortOrder
    date?: SortOrder
    prix_total?: SortOrder
    statut?: SortOrder
    notes?: SortOrderInput | SortOrder
    Cree_par?: SortOrder
    client?: ClientOrderByWithRelationInput
    utilisateur?: UtilisateurOrderByWithRelationInput
    factureBiens?: facture_bienOrderByRelationAggregateInput
    paiements?: paimentOrderByRelationAggregateInput
  }

  export type factureWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: factureWhereInput | factureWhereInput[]
    OR?: factureWhereInput[]
    NOT?: factureWhereInput | factureWhereInput[]
    CIN?: StringFilter<"facture"> | string
    date?: DateTimeFilter<"facture"> | Date | string
    prix_total?: FloatFilter<"facture"> | number
    statut?: EnumFactureStatusFilter<"facture"> | $Enums.FactureStatus
    notes?: StringNullableFilter<"facture"> | string | null
    Cree_par?: StringFilter<"facture"> | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    factureBiens?: Facture_bienListRelationFilter
    paiements?: PaimentListRelationFilter
  }, "id">

  export type factureOrderByWithAggregationInput = {
    id?: SortOrder
    CIN?: SortOrder
    date?: SortOrder
    prix_total?: SortOrder
    statut?: SortOrder
    notes?: SortOrderInput | SortOrder
    Cree_par?: SortOrder
    _count?: factureCountOrderByAggregateInput
    _avg?: factureAvgOrderByAggregateInput
    _max?: factureMaxOrderByAggregateInput
    _min?: factureMinOrderByAggregateInput
    _sum?: factureSumOrderByAggregateInput
  }

  export type factureScalarWhereWithAggregatesInput = {
    AND?: factureScalarWhereWithAggregatesInput | factureScalarWhereWithAggregatesInput[]
    OR?: factureScalarWhereWithAggregatesInput[]
    NOT?: factureScalarWhereWithAggregatesInput | factureScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"facture"> | number
    CIN?: StringWithAggregatesFilter<"facture"> | string
    date?: DateTimeWithAggregatesFilter<"facture"> | Date | string
    prix_total?: FloatWithAggregatesFilter<"facture"> | number
    statut?: EnumFactureStatusWithAggregatesFilter<"facture"> | $Enums.FactureStatus
    notes?: StringNullableWithAggregatesFilter<"facture"> | string | null
    Cree_par?: StringWithAggregatesFilter<"facture"> | string
  }

  export type facture_bienWhereInput = {
    AND?: facture_bienWhereInput | facture_bienWhereInput[]
    OR?: facture_bienWhereInput[]
    NOT?: facture_bienWhereInput | facture_bienWhereInput[]
    id?: IntFilter<"facture_bien"> | number
    id_facture?: IntFilter<"facture_bien"> | number
    id_bien?: IntFilter<"facture_bien"> | number
    type_bien?: EnumBienTypeFilter<"facture_bien"> | $Enums.BienType
    quantite?: IntFilter<"facture_bien"> | number
    Cree_par?: StringFilter<"facture_bien"> | string
    facture?: XOR<FactureScalarRelationFilter, factureWhereInput>
    bien?: XOR<BienScalarRelationFilter, bienWhereInput>
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
  }

  export type facture_bienOrderByWithRelationInput = {
    id?: SortOrder
    id_facture?: SortOrder
    id_bien?: SortOrder
    type_bien?: SortOrder
    quantite?: SortOrder
    Cree_par?: SortOrder
    facture?: factureOrderByWithRelationInput
    bien?: bienOrderByWithRelationInput
    utilisateur?: UtilisateurOrderByWithRelationInput
  }

  export type facture_bienWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: facture_bienWhereInput | facture_bienWhereInput[]
    OR?: facture_bienWhereInput[]
    NOT?: facture_bienWhereInput | facture_bienWhereInput[]
    id_facture?: IntFilter<"facture_bien"> | number
    id_bien?: IntFilter<"facture_bien"> | number
    type_bien?: EnumBienTypeFilter<"facture_bien"> | $Enums.BienType
    quantite?: IntFilter<"facture_bien"> | number
    Cree_par?: StringFilter<"facture_bien"> | string
    facture?: XOR<FactureScalarRelationFilter, factureWhereInput>
    bien?: XOR<BienScalarRelationFilter, bienWhereInput>
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
  }, "id">

  export type facture_bienOrderByWithAggregationInput = {
    id?: SortOrder
    id_facture?: SortOrder
    id_bien?: SortOrder
    type_bien?: SortOrder
    quantite?: SortOrder
    Cree_par?: SortOrder
    _count?: facture_bienCountOrderByAggregateInput
    _avg?: facture_bienAvgOrderByAggregateInput
    _max?: facture_bienMaxOrderByAggregateInput
    _min?: facture_bienMinOrderByAggregateInput
    _sum?: facture_bienSumOrderByAggregateInput
  }

  export type facture_bienScalarWhereWithAggregatesInput = {
    AND?: facture_bienScalarWhereWithAggregatesInput | facture_bienScalarWhereWithAggregatesInput[]
    OR?: facture_bienScalarWhereWithAggregatesInput[]
    NOT?: facture_bienScalarWhereWithAggregatesInput | facture_bienScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"facture_bien"> | number
    id_facture?: IntWithAggregatesFilter<"facture_bien"> | number
    id_bien?: IntWithAggregatesFilter<"facture_bien"> | number
    type_bien?: EnumBienTypeWithAggregatesFilter<"facture_bien"> | $Enums.BienType
    quantite?: IntWithAggregatesFilter<"facture_bien"> | number
    Cree_par?: StringWithAggregatesFilter<"facture_bien"> | string
  }

  export type paimentWhereInput = {
    AND?: paimentWhereInput | paimentWhereInput[]
    OR?: paimentWhereInput[]
    NOT?: paimentWhereInput | paimentWhereInput[]
    id?: IntFilter<"paiment"> | number
    id_facture?: IntFilter<"paiment"> | number
    date?: DateTimeFilter<"paiment"> | Date | string
    montant_totale?: FloatFilter<"paiment"> | number
    Cree_par?: StringFilter<"paiment"> | string
    facture?: XOR<FactureScalarRelationFilter, factureWhereInput>
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
  }

  export type paimentOrderByWithRelationInput = {
    id?: SortOrder
    id_facture?: SortOrder
    date?: SortOrder
    montant_totale?: SortOrder
    Cree_par?: SortOrder
    facture?: factureOrderByWithRelationInput
    utilisateur?: UtilisateurOrderByWithRelationInput
  }

  export type paimentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: paimentWhereInput | paimentWhereInput[]
    OR?: paimentWhereInput[]
    NOT?: paimentWhereInput | paimentWhereInput[]
    id_facture?: IntFilter<"paiment"> | number
    date?: DateTimeFilter<"paiment"> | Date | string
    montant_totale?: FloatFilter<"paiment"> | number
    Cree_par?: StringFilter<"paiment"> | string
    facture?: XOR<FactureScalarRelationFilter, factureWhereInput>
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
  }, "id">

  export type paimentOrderByWithAggregationInput = {
    id?: SortOrder
    id_facture?: SortOrder
    date?: SortOrder
    montant_totale?: SortOrder
    Cree_par?: SortOrder
    _count?: paimentCountOrderByAggregateInput
    _avg?: paimentAvgOrderByAggregateInput
    _max?: paimentMaxOrderByAggregateInput
    _min?: paimentMinOrderByAggregateInput
    _sum?: paimentSumOrderByAggregateInput
  }

  export type paimentScalarWhereWithAggregatesInput = {
    AND?: paimentScalarWhereWithAggregatesInput | paimentScalarWhereWithAggregatesInput[]
    OR?: paimentScalarWhereWithAggregatesInput[]
    NOT?: paimentScalarWhereWithAggregatesInput | paimentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"paiment"> | number
    id_facture?: IntWithAggregatesFilter<"paiment"> | number
    date?: DateTimeWithAggregatesFilter<"paiment"> | Date | string
    montant_totale?: FloatWithAggregatesFilter<"paiment"> | number
    Cree_par?: StringWithAggregatesFilter<"paiment"> | string
  }

  export type UtilisateurCreateInput = {
    CIN: string
    nom: string
    prenom: string
    date_naissance: Date | string
    adresse: string
    numero_telephone: string
    email: string
    password: string
    role: $Enums.Role
    created_at?: Date | string
    clients?: ClientCreateNestedManyWithoutUtilisateurInput
    rendez_vous?: rendez_vousCreateNestedManyWithoutUtilisateurInput
    documentTemplates?: document_templatesCreateNestedManyWithoutUtilisateurInput
    documents?: documentCreateNestedManyWithoutUtilisateurInput
    biens?: bienCreateNestedManyWithoutUtilisateurInput
    factures?: factureCreateNestedManyWithoutUtilisateurInput
    factureBiens?: facture_bienCreateNestedManyWithoutUtilisateurInput
    paiements?: paimentCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateInput = {
    id?: number
    CIN: string
    nom: string
    prenom: string
    date_naissance: Date | string
    adresse: string
    numero_telephone: string
    email: string
    password: string
    role: $Enums.Role
    created_at?: Date | string
    clients?: ClientUncheckedCreateNestedManyWithoutUtilisateurInput
    rendez_vous?: rendez_vousUncheckedCreateNestedManyWithoutUtilisateurInput
    documentTemplates?: document_templatesUncheckedCreateNestedManyWithoutUtilisateurInput
    documents?: documentUncheckedCreateNestedManyWithoutUtilisateurInput
    biens?: bienUncheckedCreateNestedManyWithoutUtilisateurInput
    factures?: factureUncheckedCreateNestedManyWithoutUtilisateurInput
    factureBiens?: facture_bienUncheckedCreateNestedManyWithoutUtilisateurInput
    paiements?: paimentUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUpdateInput = {
    CIN?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    adresse?: StringFieldUpdateOperationsInput | string
    numero_telephone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUpdateManyWithoutUtilisateurNestedInput
    rendez_vous?: rendez_vousUpdateManyWithoutUtilisateurNestedInput
    documentTemplates?: document_templatesUpdateManyWithoutUtilisateurNestedInput
    documents?: documentUpdateManyWithoutUtilisateurNestedInput
    biens?: bienUpdateManyWithoutUtilisateurNestedInput
    factures?: factureUpdateManyWithoutUtilisateurNestedInput
    factureBiens?: facture_bienUpdateManyWithoutUtilisateurNestedInput
    paiements?: paimentUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    CIN?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    adresse?: StringFieldUpdateOperationsInput | string
    numero_telephone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUncheckedUpdateManyWithoutUtilisateurNestedInput
    rendez_vous?: rendez_vousUncheckedUpdateManyWithoutUtilisateurNestedInput
    documentTemplates?: document_templatesUncheckedUpdateManyWithoutUtilisateurNestedInput
    documents?: documentUncheckedUpdateManyWithoutUtilisateurNestedInput
    biens?: bienUncheckedUpdateManyWithoutUtilisateurNestedInput
    factures?: factureUncheckedUpdateManyWithoutUtilisateurNestedInput
    factureBiens?: facture_bienUncheckedUpdateManyWithoutUtilisateurNestedInput
    paiements?: paimentUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurCreateManyInput = {
    id?: number
    CIN: string
    nom: string
    prenom: string
    date_naissance: Date | string
    adresse: string
    numero_telephone: string
    email: string
    password: string
    role: $Enums.Role
    created_at?: Date | string
  }

  export type UtilisateurUpdateManyMutationInput = {
    CIN?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    adresse?: StringFieldUpdateOperationsInput | string
    numero_telephone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UtilisateurUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    CIN?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    adresse?: StringFieldUpdateOperationsInput | string
    numero_telephone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntrepriseCreateInput = {
    ICE: number
    CNSS: number
    RC: number
    IF: number
    RIB: number
    patente: number
    adresse: string
    created_at?: Date | string
  }

  export type EntrepriseUncheckedCreateInput = {
    id?: number
    ICE: number
    CNSS: number
    RC: number
    IF: number
    RIB: number
    patente: number
    adresse: string
    created_at?: Date | string
  }

  export type EntrepriseUpdateInput = {
    ICE?: IntFieldUpdateOperationsInput | number
    CNSS?: IntFieldUpdateOperationsInput | number
    RC?: IntFieldUpdateOperationsInput | number
    IF?: IntFieldUpdateOperationsInput | number
    RIB?: IntFieldUpdateOperationsInput | number
    patente?: IntFieldUpdateOperationsInput | number
    adresse?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntrepriseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ICE?: IntFieldUpdateOperationsInput | number
    CNSS?: IntFieldUpdateOperationsInput | number
    RC?: IntFieldUpdateOperationsInput | number
    IF?: IntFieldUpdateOperationsInput | number
    RIB?: IntFieldUpdateOperationsInput | number
    patente?: IntFieldUpdateOperationsInput | number
    adresse?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntrepriseCreateManyInput = {
    id?: number
    ICE: number
    CNSS: number
    RC: number
    IF: number
    RIB: number
    patente: number
    adresse: string
    created_at?: Date | string
  }

  export type EntrepriseUpdateManyMutationInput = {
    ICE?: IntFieldUpdateOperationsInput | number
    CNSS?: IntFieldUpdateOperationsInput | number
    RC?: IntFieldUpdateOperationsInput | number
    IF?: IntFieldUpdateOperationsInput | number
    RIB?: IntFieldUpdateOperationsInput | number
    patente?: IntFieldUpdateOperationsInput | number
    adresse?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntrepriseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ICE?: IntFieldUpdateOperationsInput | number
    CNSS?: IntFieldUpdateOperationsInput | number
    RC?: IntFieldUpdateOperationsInput | number
    IF?: IntFieldUpdateOperationsInput | number
    RIB?: IntFieldUpdateOperationsInput | number
    patente?: IntFieldUpdateOperationsInput | number
    adresse?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateInput = {
    CIN: string
    nom: string
    prenom: string
    date_naissance: Date | string
    adresse: string
    numero_telephone: string
    email: string
    groupe_sanguin: string
    antecedents?: string | null
    allergies?: string | null
    commentaire?: string | null
    created_at?: Date | string
    utilisateur: UtilisateurCreateNestedOneWithoutClientsInput
    rendez_vous?: rendez_vousCreateNestedManyWithoutClientInput
    documents?: documentCreateNestedManyWithoutClientInput
    factures?: factureCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: number
    CIN: string
    nom: string
    prenom: string
    date_naissance: Date | string
    adresse: string
    numero_telephone: string
    email: string
    groupe_sanguin: string
    antecedents?: string | null
    allergies?: string | null
    commentaire?: string | null
    created_at?: Date | string
    Cree_par: string
    rendez_vous?: rendez_vousUncheckedCreateNestedManyWithoutClientInput
    documents?: documentUncheckedCreateNestedManyWithoutClientInput
    factures?: factureUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    CIN?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    adresse?: StringFieldUpdateOperationsInput | string
    numero_telephone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    groupe_sanguin?: StringFieldUpdateOperationsInput | string
    antecedents?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutClientsNestedInput
    rendez_vous?: rendez_vousUpdateManyWithoutClientNestedInput
    documents?: documentUpdateManyWithoutClientNestedInput
    factures?: factureUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    CIN?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    adresse?: StringFieldUpdateOperationsInput | string
    numero_telephone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    groupe_sanguin?: StringFieldUpdateOperationsInput | string
    antecedents?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Cree_par?: StringFieldUpdateOperationsInput | string
    rendez_vous?: rendez_vousUncheckedUpdateManyWithoutClientNestedInput
    documents?: documentUncheckedUpdateManyWithoutClientNestedInput
    factures?: factureUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: number
    CIN: string
    nom: string
    prenom: string
    date_naissance: Date | string
    adresse: string
    numero_telephone: string
    email: string
    groupe_sanguin: string
    antecedents?: string | null
    allergies?: string | null
    commentaire?: string | null
    created_at?: Date | string
    Cree_par: string
  }

  export type ClientUpdateManyMutationInput = {
    CIN?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    adresse?: StringFieldUpdateOperationsInput | string
    numero_telephone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    groupe_sanguin?: StringFieldUpdateOperationsInput | string
    antecedents?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    CIN?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    adresse?: StringFieldUpdateOperationsInput | string
    numero_telephone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    groupe_sanguin?: StringFieldUpdateOperationsInput | string
    antecedents?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Cree_par?: StringFieldUpdateOperationsInput | string
  }

  export type rendez_vousCreateInput = {
    sujet: string
    date_rendez_vous: Date | string
    created_at?: Date | string
    client: ClientCreateNestedOneWithoutRendez_vousInput
    utilisateur: UtilisateurCreateNestedOneWithoutRendez_vousInput
  }

  export type rendez_vousUncheckedCreateInput = {
    id?: number
    CIN: string
    sujet: string
    date_rendez_vous: Date | string
    created_at?: Date | string
    Cree_par: string
  }

  export type rendez_vousUpdateInput = {
    sujet?: StringFieldUpdateOperationsInput | string
    date_rendez_vous?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutRendez_vousNestedInput
    utilisateur?: UtilisateurUpdateOneRequiredWithoutRendez_vousNestedInput
  }

  export type rendez_vousUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    CIN?: StringFieldUpdateOperationsInput | string
    sujet?: StringFieldUpdateOperationsInput | string
    date_rendez_vous?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Cree_par?: StringFieldUpdateOperationsInput | string
  }

  export type rendez_vousCreateManyInput = {
    id?: number
    CIN: string
    sujet: string
    date_rendez_vous: Date | string
    created_at?: Date | string
    Cree_par: string
  }

  export type rendez_vousUpdateManyMutationInput = {
    sujet?: StringFieldUpdateOperationsInput | string
    date_rendez_vous?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rendez_vousUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    CIN?: StringFieldUpdateOperationsInput | string
    sujet?: StringFieldUpdateOperationsInput | string
    date_rendez_vous?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Cree_par?: StringFieldUpdateOperationsInput | string
  }

  export type document_templatesCreateInput = {
    name: string
    sections_json: string
    utilisateur: UtilisateurCreateNestedOneWithoutDocumentTemplatesInput
    documents?: documentCreateNestedManyWithoutTemplateInput
  }

  export type document_templatesUncheckedCreateInput = {
    id?: number
    name: string
    sections_json: string
    Cree_par: string
    documents?: documentUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type document_templatesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    sections_json?: StringFieldUpdateOperationsInput | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutDocumentTemplatesNestedInput
    documents?: documentUpdateManyWithoutTemplateNestedInput
  }

  export type document_templatesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sections_json?: StringFieldUpdateOperationsInput | string
    Cree_par?: StringFieldUpdateOperationsInput | string
    documents?: documentUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type document_templatesCreateManyInput = {
    id?: number
    name: string
    sections_json: string
    Cree_par: string
  }

  export type document_templatesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    sections_json?: StringFieldUpdateOperationsInput | string
  }

  export type document_templatesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sections_json?: StringFieldUpdateOperationsInput | string
    Cree_par?: StringFieldUpdateOperationsInput | string
  }

  export type documentCreateInput = {
    data_json: string
    template: document_templatesCreateNestedOneWithoutDocumentsInput
    client: ClientCreateNestedOneWithoutDocumentsInput
    utilisateur: UtilisateurCreateNestedOneWithoutDocumentsInput
  }

  export type documentUncheckedCreateInput = {
    id?: number
    template_id: number
    CIN: string
    data_json: string
    Cree_par: string
  }

  export type documentUpdateInput = {
    data_json?: StringFieldUpdateOperationsInput | string
    template?: document_templatesUpdateOneRequiredWithoutDocumentsNestedInput
    client?: ClientUpdateOneRequiredWithoutDocumentsNestedInput
    utilisateur?: UtilisateurUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type documentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    template_id?: IntFieldUpdateOperationsInput | number
    CIN?: StringFieldUpdateOperationsInput | string
    data_json?: StringFieldUpdateOperationsInput | string
    Cree_par?: StringFieldUpdateOperationsInput | string
  }

  export type documentCreateManyInput = {
    id?: number
    template_id: number
    CIN: string
    data_json: string
    Cree_par: string
  }

  export type documentUpdateManyMutationInput = {
    data_json?: StringFieldUpdateOperationsInput | string
  }

  export type documentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    template_id?: IntFieldUpdateOperationsInput | number
    CIN?: StringFieldUpdateOperationsInput | string
    data_json?: StringFieldUpdateOperationsInput | string
    Cree_par?: StringFieldUpdateOperationsInput | string
  }

  export type bienCreateInput = {
    Nom: string
    bien_type: $Enums.BienType
    Type: $Enums.ServiceType
    prix: number
    stock: number
    utilisateur: UtilisateurCreateNestedOneWithoutBiensInput
    factureBiens?: facture_bienCreateNestedManyWithoutBienInput
  }

  export type bienUncheckedCreateInput = {
    id?: number
    Nom: string
    bien_type: $Enums.BienType
    Type: $Enums.ServiceType
    prix: number
    stock: number
    Cree_par: string
    factureBiens?: facture_bienUncheckedCreateNestedManyWithoutBienInput
  }

  export type bienUpdateInput = {
    Nom?: StringFieldUpdateOperationsInput | string
    bien_type?: EnumBienTypeFieldUpdateOperationsInput | $Enums.BienType
    Type?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    prix?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    utilisateur?: UtilisateurUpdateOneRequiredWithoutBiensNestedInput
    factureBiens?: facture_bienUpdateManyWithoutBienNestedInput
  }

  export type bienUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Nom?: StringFieldUpdateOperationsInput | string
    bien_type?: EnumBienTypeFieldUpdateOperationsInput | $Enums.BienType
    Type?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    prix?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    Cree_par?: StringFieldUpdateOperationsInput | string
    factureBiens?: facture_bienUncheckedUpdateManyWithoutBienNestedInput
  }

  export type bienCreateManyInput = {
    id?: number
    Nom: string
    bien_type: $Enums.BienType
    Type: $Enums.ServiceType
    prix: number
    stock: number
    Cree_par: string
  }

  export type bienUpdateManyMutationInput = {
    Nom?: StringFieldUpdateOperationsInput | string
    bien_type?: EnumBienTypeFieldUpdateOperationsInput | $Enums.BienType
    Type?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    prix?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type bienUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    Nom?: StringFieldUpdateOperationsInput | string
    bien_type?: EnumBienTypeFieldUpdateOperationsInput | $Enums.BienType
    Type?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    prix?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    Cree_par?: StringFieldUpdateOperationsInput | string
  }

  export type factureCreateInput = {
    date: Date | string
    prix_total: number
    statut: $Enums.FactureStatus
    notes?: string | null
    client: ClientCreateNestedOneWithoutFacturesInput
    utilisateur: UtilisateurCreateNestedOneWithoutFacturesInput
    factureBiens?: facture_bienCreateNestedManyWithoutFactureInput
    paiements?: paimentCreateNestedManyWithoutFactureInput
  }

  export type factureUncheckedCreateInput = {
    id?: number
    CIN: string
    date: Date | string
    prix_total: number
    statut: $Enums.FactureStatus
    notes?: string | null
    Cree_par: string
    factureBiens?: facture_bienUncheckedCreateNestedManyWithoutFactureInput
    paiements?: paimentUncheckedCreateNestedManyWithoutFactureInput
  }

  export type factureUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    prix_total?: FloatFieldUpdateOperationsInput | number
    statut?: EnumFactureStatusFieldUpdateOperationsInput | $Enums.FactureStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    client?: ClientUpdateOneRequiredWithoutFacturesNestedInput
    utilisateur?: UtilisateurUpdateOneRequiredWithoutFacturesNestedInput
    factureBiens?: facture_bienUpdateManyWithoutFactureNestedInput
    paiements?: paimentUpdateManyWithoutFactureNestedInput
  }

  export type factureUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    CIN?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    prix_total?: FloatFieldUpdateOperationsInput | number
    statut?: EnumFactureStatusFieldUpdateOperationsInput | $Enums.FactureStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    Cree_par?: StringFieldUpdateOperationsInput | string
    factureBiens?: facture_bienUncheckedUpdateManyWithoutFactureNestedInput
    paiements?: paimentUncheckedUpdateManyWithoutFactureNestedInput
  }

  export type factureCreateManyInput = {
    id?: number
    CIN: string
    date: Date | string
    prix_total: number
    statut: $Enums.FactureStatus
    notes?: string | null
    Cree_par: string
  }

  export type factureUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    prix_total?: FloatFieldUpdateOperationsInput | number
    statut?: EnumFactureStatusFieldUpdateOperationsInput | $Enums.FactureStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type factureUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    CIN?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    prix_total?: FloatFieldUpdateOperationsInput | number
    statut?: EnumFactureStatusFieldUpdateOperationsInput | $Enums.FactureStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    Cree_par?: StringFieldUpdateOperationsInput | string
  }

  export type facture_bienCreateInput = {
    type_bien: $Enums.BienType
    quantite: number
    facture: factureCreateNestedOneWithoutFactureBiensInput
    bien: bienCreateNestedOneWithoutFactureBiensInput
    utilisateur: UtilisateurCreateNestedOneWithoutFactureBiensInput
  }

  export type facture_bienUncheckedCreateInput = {
    id?: number
    id_facture: number
    id_bien: number
    type_bien: $Enums.BienType
    quantite: number
    Cree_par: string
  }

  export type facture_bienUpdateInput = {
    type_bien?: EnumBienTypeFieldUpdateOperationsInput | $Enums.BienType
    quantite?: IntFieldUpdateOperationsInput | number
    facture?: factureUpdateOneRequiredWithoutFactureBiensNestedInput
    bien?: bienUpdateOneRequiredWithoutFactureBiensNestedInput
    utilisateur?: UtilisateurUpdateOneRequiredWithoutFactureBiensNestedInput
  }

  export type facture_bienUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_facture?: IntFieldUpdateOperationsInput | number
    id_bien?: IntFieldUpdateOperationsInput | number
    type_bien?: EnumBienTypeFieldUpdateOperationsInput | $Enums.BienType
    quantite?: IntFieldUpdateOperationsInput | number
    Cree_par?: StringFieldUpdateOperationsInput | string
  }

  export type facture_bienCreateManyInput = {
    id?: number
    id_facture: number
    id_bien: number
    type_bien: $Enums.BienType
    quantite: number
    Cree_par: string
  }

  export type facture_bienUpdateManyMutationInput = {
    type_bien?: EnumBienTypeFieldUpdateOperationsInput | $Enums.BienType
    quantite?: IntFieldUpdateOperationsInput | number
  }

  export type facture_bienUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_facture?: IntFieldUpdateOperationsInput | number
    id_bien?: IntFieldUpdateOperationsInput | number
    type_bien?: EnumBienTypeFieldUpdateOperationsInput | $Enums.BienType
    quantite?: IntFieldUpdateOperationsInput | number
    Cree_par?: StringFieldUpdateOperationsInput | string
  }

  export type paimentCreateInput = {
    date: Date | string
    montant_totale: number
    facture: factureCreateNestedOneWithoutPaiementsInput
    utilisateur: UtilisateurCreateNestedOneWithoutPaiementsInput
  }

  export type paimentUncheckedCreateInput = {
    id?: number
    id_facture: number
    date: Date | string
    montant_totale: number
    Cree_par: string
  }

  export type paimentUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    montant_totale?: FloatFieldUpdateOperationsInput | number
    facture?: factureUpdateOneRequiredWithoutPaiementsNestedInput
    utilisateur?: UtilisateurUpdateOneRequiredWithoutPaiementsNestedInput
  }

  export type paimentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_facture?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    montant_totale?: FloatFieldUpdateOperationsInput | number
    Cree_par?: StringFieldUpdateOperationsInput | string
  }

  export type paimentCreateManyInput = {
    id?: number
    id_facture: number
    date: Date | string
    montant_totale: number
    Cree_par: string
  }

  export type paimentUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    montant_totale?: FloatFieldUpdateOperationsInput | number
  }

  export type paimentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_facture?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    montant_totale?: FloatFieldUpdateOperationsInput | number
    Cree_par?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type ClientListRelationFilter = {
    every?: ClientWhereInput
    some?: ClientWhereInput
    none?: ClientWhereInput
  }

  export type Rendez_vousListRelationFilter = {
    every?: rendez_vousWhereInput
    some?: rendez_vousWhereInput
    none?: rendez_vousWhereInput
  }

  export type Document_templatesListRelationFilter = {
    every?: document_templatesWhereInput
    some?: document_templatesWhereInput
    none?: document_templatesWhereInput
  }

  export type DocumentListRelationFilter = {
    every?: documentWhereInput
    some?: documentWhereInput
    none?: documentWhereInput
  }

  export type BienListRelationFilter = {
    every?: bienWhereInput
    some?: bienWhereInput
    none?: bienWhereInput
  }

  export type FactureListRelationFilter = {
    every?: factureWhereInput
    some?: factureWhereInput
    none?: factureWhereInput
  }

  export type Facture_bienListRelationFilter = {
    every?: facture_bienWhereInput
    some?: facture_bienWhereInput
    none?: facture_bienWhereInput
  }

  export type PaimentListRelationFilter = {
    every?: paimentWhereInput
    some?: paimentWhereInput
    none?: paimentWhereInput
  }

  export type ClientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rendez_vousOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type document_templatesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type documentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type bienOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type factureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type facture_bienOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type paimentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UtilisateurCountOrderByAggregateInput = {
    id?: SortOrder
    CIN?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    date_naissance?: SortOrder
    adresse?: SortOrder
    numero_telephone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type UtilisateurAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UtilisateurMaxOrderByAggregateInput = {
    id?: SortOrder
    CIN?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    date_naissance?: SortOrder
    adresse?: SortOrder
    numero_telephone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type UtilisateurMinOrderByAggregateInput = {
    id?: SortOrder
    CIN?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    date_naissance?: SortOrder
    adresse?: SortOrder
    numero_telephone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type UtilisateurSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EntrepriseCountOrderByAggregateInput = {
    id?: SortOrder
    ICE?: SortOrder
    CNSS?: SortOrder
    RC?: SortOrder
    IF?: SortOrder
    RIB?: SortOrder
    patente?: SortOrder
    adresse?: SortOrder
    created_at?: SortOrder
  }

  export type EntrepriseAvgOrderByAggregateInput = {
    id?: SortOrder
    ICE?: SortOrder
    CNSS?: SortOrder
    RC?: SortOrder
    IF?: SortOrder
    RIB?: SortOrder
    patente?: SortOrder
  }

  export type EntrepriseMaxOrderByAggregateInput = {
    id?: SortOrder
    ICE?: SortOrder
    CNSS?: SortOrder
    RC?: SortOrder
    IF?: SortOrder
    RIB?: SortOrder
    patente?: SortOrder
    adresse?: SortOrder
    created_at?: SortOrder
  }

  export type EntrepriseMinOrderByAggregateInput = {
    id?: SortOrder
    ICE?: SortOrder
    CNSS?: SortOrder
    RC?: SortOrder
    IF?: SortOrder
    RIB?: SortOrder
    patente?: SortOrder
    adresse?: SortOrder
    created_at?: SortOrder
  }

  export type EntrepriseSumOrderByAggregateInput = {
    id?: SortOrder
    ICE?: SortOrder
    CNSS?: SortOrder
    RC?: SortOrder
    IF?: SortOrder
    RIB?: SortOrder
    patente?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UtilisateurScalarRelationFilter = {
    is?: UtilisateurWhereInput
    isNot?: UtilisateurWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    CIN?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    date_naissance?: SortOrder
    adresse?: SortOrder
    numero_telephone?: SortOrder
    email?: SortOrder
    groupe_sanguin?: SortOrder
    antecedents?: SortOrder
    allergies?: SortOrder
    commentaire?: SortOrder
    created_at?: SortOrder
    Cree_par?: SortOrder
  }

  export type ClientAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    CIN?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    date_naissance?: SortOrder
    adresse?: SortOrder
    numero_telephone?: SortOrder
    email?: SortOrder
    groupe_sanguin?: SortOrder
    antecedents?: SortOrder
    allergies?: SortOrder
    commentaire?: SortOrder
    created_at?: SortOrder
    Cree_par?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    CIN?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    date_naissance?: SortOrder
    adresse?: SortOrder
    numero_telephone?: SortOrder
    email?: SortOrder
    groupe_sanguin?: SortOrder
    antecedents?: SortOrder
    allergies?: SortOrder
    commentaire?: SortOrder
    created_at?: SortOrder
    Cree_par?: SortOrder
  }

  export type ClientSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type rendez_vousCountOrderByAggregateInput = {
    id?: SortOrder
    CIN?: SortOrder
    sujet?: SortOrder
    date_rendez_vous?: SortOrder
    created_at?: SortOrder
    Cree_par?: SortOrder
  }

  export type rendez_vousAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type rendez_vousMaxOrderByAggregateInput = {
    id?: SortOrder
    CIN?: SortOrder
    sujet?: SortOrder
    date_rendez_vous?: SortOrder
    created_at?: SortOrder
    Cree_par?: SortOrder
  }

  export type rendez_vousMinOrderByAggregateInput = {
    id?: SortOrder
    CIN?: SortOrder
    sujet?: SortOrder
    date_rendez_vous?: SortOrder
    created_at?: SortOrder
    Cree_par?: SortOrder
  }

  export type rendez_vousSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type document_templatesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sections_json?: SortOrder
    Cree_par?: SortOrder
  }

  export type document_templatesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type document_templatesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sections_json?: SortOrder
    Cree_par?: SortOrder
  }

  export type document_templatesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sections_json?: SortOrder
    Cree_par?: SortOrder
  }

  export type document_templatesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Document_templatesScalarRelationFilter = {
    is?: document_templatesWhereInput
    isNot?: document_templatesWhereInput
  }

  export type documentCountOrderByAggregateInput = {
    id?: SortOrder
    template_id?: SortOrder
    CIN?: SortOrder
    data_json?: SortOrder
    Cree_par?: SortOrder
  }

  export type documentAvgOrderByAggregateInput = {
    id?: SortOrder
    template_id?: SortOrder
  }

  export type documentMaxOrderByAggregateInput = {
    id?: SortOrder
    template_id?: SortOrder
    CIN?: SortOrder
    data_json?: SortOrder
    Cree_par?: SortOrder
  }

  export type documentMinOrderByAggregateInput = {
    id?: SortOrder
    template_id?: SortOrder
    CIN?: SortOrder
    data_json?: SortOrder
    Cree_par?: SortOrder
  }

  export type documentSumOrderByAggregateInput = {
    id?: SortOrder
    template_id?: SortOrder
  }

  export type EnumBienTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BienType | EnumBienTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BienType[]
    notIn?: $Enums.BienType[]
    not?: NestedEnumBienTypeFilter<$PrismaModel> | $Enums.BienType
  }

  export type EnumServiceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceType[]
    notIn?: $Enums.ServiceType[]
    not?: NestedEnumServiceTypeFilter<$PrismaModel> | $Enums.ServiceType
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type bienCountOrderByAggregateInput = {
    id?: SortOrder
    Nom?: SortOrder
    bien_type?: SortOrder
    Type?: SortOrder
    prix?: SortOrder
    stock?: SortOrder
    Cree_par?: SortOrder
  }

  export type bienAvgOrderByAggregateInput = {
    id?: SortOrder
    prix?: SortOrder
    stock?: SortOrder
  }

  export type bienMaxOrderByAggregateInput = {
    id?: SortOrder
    Nom?: SortOrder
    bien_type?: SortOrder
    Type?: SortOrder
    prix?: SortOrder
    stock?: SortOrder
    Cree_par?: SortOrder
  }

  export type bienMinOrderByAggregateInput = {
    id?: SortOrder
    Nom?: SortOrder
    bien_type?: SortOrder
    Type?: SortOrder
    prix?: SortOrder
    stock?: SortOrder
    Cree_par?: SortOrder
  }

  export type bienSumOrderByAggregateInput = {
    id?: SortOrder
    prix?: SortOrder
    stock?: SortOrder
  }

  export type EnumBienTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BienType | EnumBienTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BienType[]
    notIn?: $Enums.BienType[]
    not?: NestedEnumBienTypeWithAggregatesFilter<$PrismaModel> | $Enums.BienType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBienTypeFilter<$PrismaModel>
    _max?: NestedEnumBienTypeFilter<$PrismaModel>
  }

  export type EnumServiceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceType[]
    notIn?: $Enums.ServiceType[]
    not?: NestedEnumServiceTypeWithAggregatesFilter<$PrismaModel> | $Enums.ServiceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceTypeFilter<$PrismaModel>
    _max?: NestedEnumServiceTypeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumFactureStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FactureStatus | EnumFactureStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FactureStatus[]
    notIn?: $Enums.FactureStatus[]
    not?: NestedEnumFactureStatusFilter<$PrismaModel> | $Enums.FactureStatus
  }

  export type factureCountOrderByAggregateInput = {
    id?: SortOrder
    CIN?: SortOrder
    date?: SortOrder
    prix_total?: SortOrder
    statut?: SortOrder
    notes?: SortOrder
    Cree_par?: SortOrder
  }

  export type factureAvgOrderByAggregateInput = {
    id?: SortOrder
    prix_total?: SortOrder
  }

  export type factureMaxOrderByAggregateInput = {
    id?: SortOrder
    CIN?: SortOrder
    date?: SortOrder
    prix_total?: SortOrder
    statut?: SortOrder
    notes?: SortOrder
    Cree_par?: SortOrder
  }

  export type factureMinOrderByAggregateInput = {
    id?: SortOrder
    CIN?: SortOrder
    date?: SortOrder
    prix_total?: SortOrder
    statut?: SortOrder
    notes?: SortOrder
    Cree_par?: SortOrder
  }

  export type factureSumOrderByAggregateInput = {
    id?: SortOrder
    prix_total?: SortOrder
  }

  export type EnumFactureStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FactureStatus | EnumFactureStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FactureStatus[]
    notIn?: $Enums.FactureStatus[]
    not?: NestedEnumFactureStatusWithAggregatesFilter<$PrismaModel> | $Enums.FactureStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFactureStatusFilter<$PrismaModel>
    _max?: NestedEnumFactureStatusFilter<$PrismaModel>
  }

  export type FactureScalarRelationFilter = {
    is?: factureWhereInput
    isNot?: factureWhereInput
  }

  export type BienScalarRelationFilter = {
    is?: bienWhereInput
    isNot?: bienWhereInput
  }

  export type facture_bienCountOrderByAggregateInput = {
    id?: SortOrder
    id_facture?: SortOrder
    id_bien?: SortOrder
    type_bien?: SortOrder
    quantite?: SortOrder
    Cree_par?: SortOrder
  }

  export type facture_bienAvgOrderByAggregateInput = {
    id?: SortOrder
    id_facture?: SortOrder
    id_bien?: SortOrder
    quantite?: SortOrder
  }

  export type facture_bienMaxOrderByAggregateInput = {
    id?: SortOrder
    id_facture?: SortOrder
    id_bien?: SortOrder
    type_bien?: SortOrder
    quantite?: SortOrder
    Cree_par?: SortOrder
  }

  export type facture_bienMinOrderByAggregateInput = {
    id?: SortOrder
    id_facture?: SortOrder
    id_bien?: SortOrder
    type_bien?: SortOrder
    quantite?: SortOrder
    Cree_par?: SortOrder
  }

  export type facture_bienSumOrderByAggregateInput = {
    id?: SortOrder
    id_facture?: SortOrder
    id_bien?: SortOrder
    quantite?: SortOrder
  }

  export type paimentCountOrderByAggregateInput = {
    id?: SortOrder
    id_facture?: SortOrder
    date?: SortOrder
    montant_totale?: SortOrder
    Cree_par?: SortOrder
  }

  export type paimentAvgOrderByAggregateInput = {
    id?: SortOrder
    id_facture?: SortOrder
    montant_totale?: SortOrder
  }

  export type paimentMaxOrderByAggregateInput = {
    id?: SortOrder
    id_facture?: SortOrder
    date?: SortOrder
    montant_totale?: SortOrder
    Cree_par?: SortOrder
  }

  export type paimentMinOrderByAggregateInput = {
    id?: SortOrder
    id_facture?: SortOrder
    date?: SortOrder
    montant_totale?: SortOrder
    Cree_par?: SortOrder
  }

  export type paimentSumOrderByAggregateInput = {
    id?: SortOrder
    id_facture?: SortOrder
    montant_totale?: SortOrder
  }

  export type ClientCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<ClientCreateWithoutUtilisateurInput, ClientUncheckedCreateWithoutUtilisateurInput> | ClientCreateWithoutUtilisateurInput[] | ClientUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutUtilisateurInput | ClientCreateOrConnectWithoutUtilisateurInput[]
    createMany?: ClientCreateManyUtilisateurInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type rendez_vousCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<rendez_vousCreateWithoutUtilisateurInput, rendez_vousUncheckedCreateWithoutUtilisateurInput> | rendez_vousCreateWithoutUtilisateurInput[] | rendez_vousUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: rendez_vousCreateOrConnectWithoutUtilisateurInput | rendez_vousCreateOrConnectWithoutUtilisateurInput[]
    createMany?: rendez_vousCreateManyUtilisateurInputEnvelope
    connect?: rendez_vousWhereUniqueInput | rendez_vousWhereUniqueInput[]
  }

  export type document_templatesCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<document_templatesCreateWithoutUtilisateurInput, document_templatesUncheckedCreateWithoutUtilisateurInput> | document_templatesCreateWithoutUtilisateurInput[] | document_templatesUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: document_templatesCreateOrConnectWithoutUtilisateurInput | document_templatesCreateOrConnectWithoutUtilisateurInput[]
    createMany?: document_templatesCreateManyUtilisateurInputEnvelope
    connect?: document_templatesWhereUniqueInput | document_templatesWhereUniqueInput[]
  }

  export type documentCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<documentCreateWithoutUtilisateurInput, documentUncheckedCreateWithoutUtilisateurInput> | documentCreateWithoutUtilisateurInput[] | documentUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: documentCreateOrConnectWithoutUtilisateurInput | documentCreateOrConnectWithoutUtilisateurInput[]
    createMany?: documentCreateManyUtilisateurInputEnvelope
    connect?: documentWhereUniqueInput | documentWhereUniqueInput[]
  }

  export type bienCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<bienCreateWithoutUtilisateurInput, bienUncheckedCreateWithoutUtilisateurInput> | bienCreateWithoutUtilisateurInput[] | bienUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: bienCreateOrConnectWithoutUtilisateurInput | bienCreateOrConnectWithoutUtilisateurInput[]
    createMany?: bienCreateManyUtilisateurInputEnvelope
    connect?: bienWhereUniqueInput | bienWhereUniqueInput[]
  }

  export type factureCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<factureCreateWithoutUtilisateurInput, factureUncheckedCreateWithoutUtilisateurInput> | factureCreateWithoutUtilisateurInput[] | factureUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: factureCreateOrConnectWithoutUtilisateurInput | factureCreateOrConnectWithoutUtilisateurInput[]
    createMany?: factureCreateManyUtilisateurInputEnvelope
    connect?: factureWhereUniqueInput | factureWhereUniqueInput[]
  }

  export type facture_bienCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<facture_bienCreateWithoutUtilisateurInput, facture_bienUncheckedCreateWithoutUtilisateurInput> | facture_bienCreateWithoutUtilisateurInput[] | facture_bienUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: facture_bienCreateOrConnectWithoutUtilisateurInput | facture_bienCreateOrConnectWithoutUtilisateurInput[]
    createMany?: facture_bienCreateManyUtilisateurInputEnvelope
    connect?: facture_bienWhereUniqueInput | facture_bienWhereUniqueInput[]
  }

  export type paimentCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<paimentCreateWithoutUtilisateurInput, paimentUncheckedCreateWithoutUtilisateurInput> | paimentCreateWithoutUtilisateurInput[] | paimentUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: paimentCreateOrConnectWithoutUtilisateurInput | paimentCreateOrConnectWithoutUtilisateurInput[]
    createMany?: paimentCreateManyUtilisateurInputEnvelope
    connect?: paimentWhereUniqueInput | paimentWhereUniqueInput[]
  }

  export type ClientUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<ClientCreateWithoutUtilisateurInput, ClientUncheckedCreateWithoutUtilisateurInput> | ClientCreateWithoutUtilisateurInput[] | ClientUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutUtilisateurInput | ClientCreateOrConnectWithoutUtilisateurInput[]
    createMany?: ClientCreateManyUtilisateurInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type rendez_vousUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<rendez_vousCreateWithoutUtilisateurInput, rendez_vousUncheckedCreateWithoutUtilisateurInput> | rendez_vousCreateWithoutUtilisateurInput[] | rendez_vousUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: rendez_vousCreateOrConnectWithoutUtilisateurInput | rendez_vousCreateOrConnectWithoutUtilisateurInput[]
    createMany?: rendez_vousCreateManyUtilisateurInputEnvelope
    connect?: rendez_vousWhereUniqueInput | rendez_vousWhereUniqueInput[]
  }

  export type document_templatesUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<document_templatesCreateWithoutUtilisateurInput, document_templatesUncheckedCreateWithoutUtilisateurInput> | document_templatesCreateWithoutUtilisateurInput[] | document_templatesUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: document_templatesCreateOrConnectWithoutUtilisateurInput | document_templatesCreateOrConnectWithoutUtilisateurInput[]
    createMany?: document_templatesCreateManyUtilisateurInputEnvelope
    connect?: document_templatesWhereUniqueInput | document_templatesWhereUniqueInput[]
  }

  export type documentUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<documentCreateWithoutUtilisateurInput, documentUncheckedCreateWithoutUtilisateurInput> | documentCreateWithoutUtilisateurInput[] | documentUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: documentCreateOrConnectWithoutUtilisateurInput | documentCreateOrConnectWithoutUtilisateurInput[]
    createMany?: documentCreateManyUtilisateurInputEnvelope
    connect?: documentWhereUniqueInput | documentWhereUniqueInput[]
  }

  export type bienUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<bienCreateWithoutUtilisateurInput, bienUncheckedCreateWithoutUtilisateurInput> | bienCreateWithoutUtilisateurInput[] | bienUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: bienCreateOrConnectWithoutUtilisateurInput | bienCreateOrConnectWithoutUtilisateurInput[]
    createMany?: bienCreateManyUtilisateurInputEnvelope
    connect?: bienWhereUniqueInput | bienWhereUniqueInput[]
  }

  export type factureUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<factureCreateWithoutUtilisateurInput, factureUncheckedCreateWithoutUtilisateurInput> | factureCreateWithoutUtilisateurInput[] | factureUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: factureCreateOrConnectWithoutUtilisateurInput | factureCreateOrConnectWithoutUtilisateurInput[]
    createMany?: factureCreateManyUtilisateurInputEnvelope
    connect?: factureWhereUniqueInput | factureWhereUniqueInput[]
  }

  export type facture_bienUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<facture_bienCreateWithoutUtilisateurInput, facture_bienUncheckedCreateWithoutUtilisateurInput> | facture_bienCreateWithoutUtilisateurInput[] | facture_bienUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: facture_bienCreateOrConnectWithoutUtilisateurInput | facture_bienCreateOrConnectWithoutUtilisateurInput[]
    createMany?: facture_bienCreateManyUtilisateurInputEnvelope
    connect?: facture_bienWhereUniqueInput | facture_bienWhereUniqueInput[]
  }

  export type paimentUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<paimentCreateWithoutUtilisateurInput, paimentUncheckedCreateWithoutUtilisateurInput> | paimentCreateWithoutUtilisateurInput[] | paimentUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: paimentCreateOrConnectWithoutUtilisateurInput | paimentCreateOrConnectWithoutUtilisateurInput[]
    createMany?: paimentCreateManyUtilisateurInputEnvelope
    connect?: paimentWhereUniqueInput | paimentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type ClientUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<ClientCreateWithoutUtilisateurInput, ClientUncheckedCreateWithoutUtilisateurInput> | ClientCreateWithoutUtilisateurInput[] | ClientUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutUtilisateurInput | ClientCreateOrConnectWithoutUtilisateurInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutUtilisateurInput | ClientUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: ClientCreateManyUtilisateurInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutUtilisateurInput | ClientUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutUtilisateurInput | ClientUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type rendez_vousUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<rendez_vousCreateWithoutUtilisateurInput, rendez_vousUncheckedCreateWithoutUtilisateurInput> | rendez_vousCreateWithoutUtilisateurInput[] | rendez_vousUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: rendez_vousCreateOrConnectWithoutUtilisateurInput | rendez_vousCreateOrConnectWithoutUtilisateurInput[]
    upsert?: rendez_vousUpsertWithWhereUniqueWithoutUtilisateurInput | rendez_vousUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: rendez_vousCreateManyUtilisateurInputEnvelope
    set?: rendez_vousWhereUniqueInput | rendez_vousWhereUniqueInput[]
    disconnect?: rendez_vousWhereUniqueInput | rendez_vousWhereUniqueInput[]
    delete?: rendez_vousWhereUniqueInput | rendez_vousWhereUniqueInput[]
    connect?: rendez_vousWhereUniqueInput | rendez_vousWhereUniqueInput[]
    update?: rendez_vousUpdateWithWhereUniqueWithoutUtilisateurInput | rendez_vousUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: rendez_vousUpdateManyWithWhereWithoutUtilisateurInput | rendez_vousUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: rendez_vousScalarWhereInput | rendez_vousScalarWhereInput[]
  }

  export type document_templatesUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<document_templatesCreateWithoutUtilisateurInput, document_templatesUncheckedCreateWithoutUtilisateurInput> | document_templatesCreateWithoutUtilisateurInput[] | document_templatesUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: document_templatesCreateOrConnectWithoutUtilisateurInput | document_templatesCreateOrConnectWithoutUtilisateurInput[]
    upsert?: document_templatesUpsertWithWhereUniqueWithoutUtilisateurInput | document_templatesUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: document_templatesCreateManyUtilisateurInputEnvelope
    set?: document_templatesWhereUniqueInput | document_templatesWhereUniqueInput[]
    disconnect?: document_templatesWhereUniqueInput | document_templatesWhereUniqueInput[]
    delete?: document_templatesWhereUniqueInput | document_templatesWhereUniqueInput[]
    connect?: document_templatesWhereUniqueInput | document_templatesWhereUniqueInput[]
    update?: document_templatesUpdateWithWhereUniqueWithoutUtilisateurInput | document_templatesUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: document_templatesUpdateManyWithWhereWithoutUtilisateurInput | document_templatesUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: document_templatesScalarWhereInput | document_templatesScalarWhereInput[]
  }

  export type documentUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<documentCreateWithoutUtilisateurInput, documentUncheckedCreateWithoutUtilisateurInput> | documentCreateWithoutUtilisateurInput[] | documentUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: documentCreateOrConnectWithoutUtilisateurInput | documentCreateOrConnectWithoutUtilisateurInput[]
    upsert?: documentUpsertWithWhereUniqueWithoutUtilisateurInput | documentUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: documentCreateManyUtilisateurInputEnvelope
    set?: documentWhereUniqueInput | documentWhereUniqueInput[]
    disconnect?: documentWhereUniqueInput | documentWhereUniqueInput[]
    delete?: documentWhereUniqueInput | documentWhereUniqueInput[]
    connect?: documentWhereUniqueInput | documentWhereUniqueInput[]
    update?: documentUpdateWithWhereUniqueWithoutUtilisateurInput | documentUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: documentUpdateManyWithWhereWithoutUtilisateurInput | documentUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: documentScalarWhereInput | documentScalarWhereInput[]
  }

  export type bienUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<bienCreateWithoutUtilisateurInput, bienUncheckedCreateWithoutUtilisateurInput> | bienCreateWithoutUtilisateurInput[] | bienUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: bienCreateOrConnectWithoutUtilisateurInput | bienCreateOrConnectWithoutUtilisateurInput[]
    upsert?: bienUpsertWithWhereUniqueWithoutUtilisateurInput | bienUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: bienCreateManyUtilisateurInputEnvelope
    set?: bienWhereUniqueInput | bienWhereUniqueInput[]
    disconnect?: bienWhereUniqueInput | bienWhereUniqueInput[]
    delete?: bienWhereUniqueInput | bienWhereUniqueInput[]
    connect?: bienWhereUniqueInput | bienWhereUniqueInput[]
    update?: bienUpdateWithWhereUniqueWithoutUtilisateurInput | bienUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: bienUpdateManyWithWhereWithoutUtilisateurInput | bienUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: bienScalarWhereInput | bienScalarWhereInput[]
  }

  export type factureUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<factureCreateWithoutUtilisateurInput, factureUncheckedCreateWithoutUtilisateurInput> | factureCreateWithoutUtilisateurInput[] | factureUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: factureCreateOrConnectWithoutUtilisateurInput | factureCreateOrConnectWithoutUtilisateurInput[]
    upsert?: factureUpsertWithWhereUniqueWithoutUtilisateurInput | factureUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: factureCreateManyUtilisateurInputEnvelope
    set?: factureWhereUniqueInput | factureWhereUniqueInput[]
    disconnect?: factureWhereUniqueInput | factureWhereUniqueInput[]
    delete?: factureWhereUniqueInput | factureWhereUniqueInput[]
    connect?: factureWhereUniqueInput | factureWhereUniqueInput[]
    update?: factureUpdateWithWhereUniqueWithoutUtilisateurInput | factureUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: factureUpdateManyWithWhereWithoutUtilisateurInput | factureUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: factureScalarWhereInput | factureScalarWhereInput[]
  }

  export type facture_bienUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<facture_bienCreateWithoutUtilisateurInput, facture_bienUncheckedCreateWithoutUtilisateurInput> | facture_bienCreateWithoutUtilisateurInput[] | facture_bienUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: facture_bienCreateOrConnectWithoutUtilisateurInput | facture_bienCreateOrConnectWithoutUtilisateurInput[]
    upsert?: facture_bienUpsertWithWhereUniqueWithoutUtilisateurInput | facture_bienUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: facture_bienCreateManyUtilisateurInputEnvelope
    set?: facture_bienWhereUniqueInput | facture_bienWhereUniqueInput[]
    disconnect?: facture_bienWhereUniqueInput | facture_bienWhereUniqueInput[]
    delete?: facture_bienWhereUniqueInput | facture_bienWhereUniqueInput[]
    connect?: facture_bienWhereUniqueInput | facture_bienWhereUniqueInput[]
    update?: facture_bienUpdateWithWhereUniqueWithoutUtilisateurInput | facture_bienUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: facture_bienUpdateManyWithWhereWithoutUtilisateurInput | facture_bienUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: facture_bienScalarWhereInput | facture_bienScalarWhereInput[]
  }

  export type paimentUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<paimentCreateWithoutUtilisateurInput, paimentUncheckedCreateWithoutUtilisateurInput> | paimentCreateWithoutUtilisateurInput[] | paimentUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: paimentCreateOrConnectWithoutUtilisateurInput | paimentCreateOrConnectWithoutUtilisateurInput[]
    upsert?: paimentUpsertWithWhereUniqueWithoutUtilisateurInput | paimentUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: paimentCreateManyUtilisateurInputEnvelope
    set?: paimentWhereUniqueInput | paimentWhereUniqueInput[]
    disconnect?: paimentWhereUniqueInput | paimentWhereUniqueInput[]
    delete?: paimentWhereUniqueInput | paimentWhereUniqueInput[]
    connect?: paimentWhereUniqueInput | paimentWhereUniqueInput[]
    update?: paimentUpdateWithWhereUniqueWithoutUtilisateurInput | paimentUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: paimentUpdateManyWithWhereWithoutUtilisateurInput | paimentUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: paimentScalarWhereInput | paimentScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClientUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<ClientCreateWithoutUtilisateurInput, ClientUncheckedCreateWithoutUtilisateurInput> | ClientCreateWithoutUtilisateurInput[] | ClientUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutUtilisateurInput | ClientCreateOrConnectWithoutUtilisateurInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutUtilisateurInput | ClientUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: ClientCreateManyUtilisateurInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutUtilisateurInput | ClientUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutUtilisateurInput | ClientUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type rendez_vousUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<rendez_vousCreateWithoutUtilisateurInput, rendez_vousUncheckedCreateWithoutUtilisateurInput> | rendez_vousCreateWithoutUtilisateurInput[] | rendez_vousUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: rendez_vousCreateOrConnectWithoutUtilisateurInput | rendez_vousCreateOrConnectWithoutUtilisateurInput[]
    upsert?: rendez_vousUpsertWithWhereUniqueWithoutUtilisateurInput | rendez_vousUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: rendez_vousCreateManyUtilisateurInputEnvelope
    set?: rendez_vousWhereUniqueInput | rendez_vousWhereUniqueInput[]
    disconnect?: rendez_vousWhereUniqueInput | rendez_vousWhereUniqueInput[]
    delete?: rendez_vousWhereUniqueInput | rendez_vousWhereUniqueInput[]
    connect?: rendez_vousWhereUniqueInput | rendez_vousWhereUniqueInput[]
    update?: rendez_vousUpdateWithWhereUniqueWithoutUtilisateurInput | rendez_vousUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: rendez_vousUpdateManyWithWhereWithoutUtilisateurInput | rendez_vousUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: rendez_vousScalarWhereInput | rendez_vousScalarWhereInput[]
  }

  export type document_templatesUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<document_templatesCreateWithoutUtilisateurInput, document_templatesUncheckedCreateWithoutUtilisateurInput> | document_templatesCreateWithoutUtilisateurInput[] | document_templatesUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: document_templatesCreateOrConnectWithoutUtilisateurInput | document_templatesCreateOrConnectWithoutUtilisateurInput[]
    upsert?: document_templatesUpsertWithWhereUniqueWithoutUtilisateurInput | document_templatesUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: document_templatesCreateManyUtilisateurInputEnvelope
    set?: document_templatesWhereUniqueInput | document_templatesWhereUniqueInput[]
    disconnect?: document_templatesWhereUniqueInput | document_templatesWhereUniqueInput[]
    delete?: document_templatesWhereUniqueInput | document_templatesWhereUniqueInput[]
    connect?: document_templatesWhereUniqueInput | document_templatesWhereUniqueInput[]
    update?: document_templatesUpdateWithWhereUniqueWithoutUtilisateurInput | document_templatesUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: document_templatesUpdateManyWithWhereWithoutUtilisateurInput | document_templatesUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: document_templatesScalarWhereInput | document_templatesScalarWhereInput[]
  }

  export type documentUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<documentCreateWithoutUtilisateurInput, documentUncheckedCreateWithoutUtilisateurInput> | documentCreateWithoutUtilisateurInput[] | documentUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: documentCreateOrConnectWithoutUtilisateurInput | documentCreateOrConnectWithoutUtilisateurInput[]
    upsert?: documentUpsertWithWhereUniqueWithoutUtilisateurInput | documentUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: documentCreateManyUtilisateurInputEnvelope
    set?: documentWhereUniqueInput | documentWhereUniqueInput[]
    disconnect?: documentWhereUniqueInput | documentWhereUniqueInput[]
    delete?: documentWhereUniqueInput | documentWhereUniqueInput[]
    connect?: documentWhereUniqueInput | documentWhereUniqueInput[]
    update?: documentUpdateWithWhereUniqueWithoutUtilisateurInput | documentUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: documentUpdateManyWithWhereWithoutUtilisateurInput | documentUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: documentScalarWhereInput | documentScalarWhereInput[]
  }

  export type bienUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<bienCreateWithoutUtilisateurInput, bienUncheckedCreateWithoutUtilisateurInput> | bienCreateWithoutUtilisateurInput[] | bienUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: bienCreateOrConnectWithoutUtilisateurInput | bienCreateOrConnectWithoutUtilisateurInput[]
    upsert?: bienUpsertWithWhereUniqueWithoutUtilisateurInput | bienUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: bienCreateManyUtilisateurInputEnvelope
    set?: bienWhereUniqueInput | bienWhereUniqueInput[]
    disconnect?: bienWhereUniqueInput | bienWhereUniqueInput[]
    delete?: bienWhereUniqueInput | bienWhereUniqueInput[]
    connect?: bienWhereUniqueInput | bienWhereUniqueInput[]
    update?: bienUpdateWithWhereUniqueWithoutUtilisateurInput | bienUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: bienUpdateManyWithWhereWithoutUtilisateurInput | bienUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: bienScalarWhereInput | bienScalarWhereInput[]
  }

  export type factureUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<factureCreateWithoutUtilisateurInput, factureUncheckedCreateWithoutUtilisateurInput> | factureCreateWithoutUtilisateurInput[] | factureUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: factureCreateOrConnectWithoutUtilisateurInput | factureCreateOrConnectWithoutUtilisateurInput[]
    upsert?: factureUpsertWithWhereUniqueWithoutUtilisateurInput | factureUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: factureCreateManyUtilisateurInputEnvelope
    set?: factureWhereUniqueInput | factureWhereUniqueInput[]
    disconnect?: factureWhereUniqueInput | factureWhereUniqueInput[]
    delete?: factureWhereUniqueInput | factureWhereUniqueInput[]
    connect?: factureWhereUniqueInput | factureWhereUniqueInput[]
    update?: factureUpdateWithWhereUniqueWithoutUtilisateurInput | factureUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: factureUpdateManyWithWhereWithoutUtilisateurInput | factureUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: factureScalarWhereInput | factureScalarWhereInput[]
  }

  export type facture_bienUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<facture_bienCreateWithoutUtilisateurInput, facture_bienUncheckedCreateWithoutUtilisateurInput> | facture_bienCreateWithoutUtilisateurInput[] | facture_bienUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: facture_bienCreateOrConnectWithoutUtilisateurInput | facture_bienCreateOrConnectWithoutUtilisateurInput[]
    upsert?: facture_bienUpsertWithWhereUniqueWithoutUtilisateurInput | facture_bienUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: facture_bienCreateManyUtilisateurInputEnvelope
    set?: facture_bienWhereUniqueInput | facture_bienWhereUniqueInput[]
    disconnect?: facture_bienWhereUniqueInput | facture_bienWhereUniqueInput[]
    delete?: facture_bienWhereUniqueInput | facture_bienWhereUniqueInput[]
    connect?: facture_bienWhereUniqueInput | facture_bienWhereUniqueInput[]
    update?: facture_bienUpdateWithWhereUniqueWithoutUtilisateurInput | facture_bienUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: facture_bienUpdateManyWithWhereWithoutUtilisateurInput | facture_bienUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: facture_bienScalarWhereInput | facture_bienScalarWhereInput[]
  }

  export type paimentUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<paimentCreateWithoutUtilisateurInput, paimentUncheckedCreateWithoutUtilisateurInput> | paimentCreateWithoutUtilisateurInput[] | paimentUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: paimentCreateOrConnectWithoutUtilisateurInput | paimentCreateOrConnectWithoutUtilisateurInput[]
    upsert?: paimentUpsertWithWhereUniqueWithoutUtilisateurInput | paimentUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: paimentCreateManyUtilisateurInputEnvelope
    set?: paimentWhereUniqueInput | paimentWhereUniqueInput[]
    disconnect?: paimentWhereUniqueInput | paimentWhereUniqueInput[]
    delete?: paimentWhereUniqueInput | paimentWhereUniqueInput[]
    connect?: paimentWhereUniqueInput | paimentWhereUniqueInput[]
    update?: paimentUpdateWithWhereUniqueWithoutUtilisateurInput | paimentUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: paimentUpdateManyWithWhereWithoutUtilisateurInput | paimentUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: paimentScalarWhereInput | paimentScalarWhereInput[]
  }

  export type UtilisateurCreateNestedOneWithoutClientsInput = {
    create?: XOR<UtilisateurCreateWithoutClientsInput, UtilisateurUncheckedCreateWithoutClientsInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutClientsInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type rendez_vousCreateNestedManyWithoutClientInput = {
    create?: XOR<rendez_vousCreateWithoutClientInput, rendez_vousUncheckedCreateWithoutClientInput> | rendez_vousCreateWithoutClientInput[] | rendez_vousUncheckedCreateWithoutClientInput[]
    connectOrCreate?: rendez_vousCreateOrConnectWithoutClientInput | rendez_vousCreateOrConnectWithoutClientInput[]
    createMany?: rendez_vousCreateManyClientInputEnvelope
    connect?: rendez_vousWhereUniqueInput | rendez_vousWhereUniqueInput[]
  }

  export type documentCreateNestedManyWithoutClientInput = {
    create?: XOR<documentCreateWithoutClientInput, documentUncheckedCreateWithoutClientInput> | documentCreateWithoutClientInput[] | documentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: documentCreateOrConnectWithoutClientInput | documentCreateOrConnectWithoutClientInput[]
    createMany?: documentCreateManyClientInputEnvelope
    connect?: documentWhereUniqueInput | documentWhereUniqueInput[]
  }

  export type factureCreateNestedManyWithoutClientInput = {
    create?: XOR<factureCreateWithoutClientInput, factureUncheckedCreateWithoutClientInput> | factureCreateWithoutClientInput[] | factureUncheckedCreateWithoutClientInput[]
    connectOrCreate?: factureCreateOrConnectWithoutClientInput | factureCreateOrConnectWithoutClientInput[]
    createMany?: factureCreateManyClientInputEnvelope
    connect?: factureWhereUniqueInput | factureWhereUniqueInput[]
  }

  export type rendez_vousUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<rendez_vousCreateWithoutClientInput, rendez_vousUncheckedCreateWithoutClientInput> | rendez_vousCreateWithoutClientInput[] | rendez_vousUncheckedCreateWithoutClientInput[]
    connectOrCreate?: rendez_vousCreateOrConnectWithoutClientInput | rendez_vousCreateOrConnectWithoutClientInput[]
    createMany?: rendez_vousCreateManyClientInputEnvelope
    connect?: rendez_vousWhereUniqueInput | rendez_vousWhereUniqueInput[]
  }

  export type documentUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<documentCreateWithoutClientInput, documentUncheckedCreateWithoutClientInput> | documentCreateWithoutClientInput[] | documentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: documentCreateOrConnectWithoutClientInput | documentCreateOrConnectWithoutClientInput[]
    createMany?: documentCreateManyClientInputEnvelope
    connect?: documentWhereUniqueInput | documentWhereUniqueInput[]
  }

  export type factureUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<factureCreateWithoutClientInput, factureUncheckedCreateWithoutClientInput> | factureCreateWithoutClientInput[] | factureUncheckedCreateWithoutClientInput[]
    connectOrCreate?: factureCreateOrConnectWithoutClientInput | factureCreateOrConnectWithoutClientInput[]
    createMany?: factureCreateManyClientInputEnvelope
    connect?: factureWhereUniqueInput | factureWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UtilisateurUpdateOneRequiredWithoutClientsNestedInput = {
    create?: XOR<UtilisateurCreateWithoutClientsInput, UtilisateurUncheckedCreateWithoutClientsInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutClientsInput
    upsert?: UtilisateurUpsertWithoutClientsInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutClientsInput, UtilisateurUpdateWithoutClientsInput>, UtilisateurUncheckedUpdateWithoutClientsInput>
  }

  export type rendez_vousUpdateManyWithoutClientNestedInput = {
    create?: XOR<rendez_vousCreateWithoutClientInput, rendez_vousUncheckedCreateWithoutClientInput> | rendez_vousCreateWithoutClientInput[] | rendez_vousUncheckedCreateWithoutClientInput[]
    connectOrCreate?: rendez_vousCreateOrConnectWithoutClientInput | rendez_vousCreateOrConnectWithoutClientInput[]
    upsert?: rendez_vousUpsertWithWhereUniqueWithoutClientInput | rendez_vousUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: rendez_vousCreateManyClientInputEnvelope
    set?: rendez_vousWhereUniqueInput | rendez_vousWhereUniqueInput[]
    disconnect?: rendez_vousWhereUniqueInput | rendez_vousWhereUniqueInput[]
    delete?: rendez_vousWhereUniqueInput | rendez_vousWhereUniqueInput[]
    connect?: rendez_vousWhereUniqueInput | rendez_vousWhereUniqueInput[]
    update?: rendez_vousUpdateWithWhereUniqueWithoutClientInput | rendez_vousUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: rendez_vousUpdateManyWithWhereWithoutClientInput | rendez_vousUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: rendez_vousScalarWhereInput | rendez_vousScalarWhereInput[]
  }

  export type documentUpdateManyWithoutClientNestedInput = {
    create?: XOR<documentCreateWithoutClientInput, documentUncheckedCreateWithoutClientInput> | documentCreateWithoutClientInput[] | documentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: documentCreateOrConnectWithoutClientInput | documentCreateOrConnectWithoutClientInput[]
    upsert?: documentUpsertWithWhereUniqueWithoutClientInput | documentUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: documentCreateManyClientInputEnvelope
    set?: documentWhereUniqueInput | documentWhereUniqueInput[]
    disconnect?: documentWhereUniqueInput | documentWhereUniqueInput[]
    delete?: documentWhereUniqueInput | documentWhereUniqueInput[]
    connect?: documentWhereUniqueInput | documentWhereUniqueInput[]
    update?: documentUpdateWithWhereUniqueWithoutClientInput | documentUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: documentUpdateManyWithWhereWithoutClientInput | documentUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: documentScalarWhereInput | documentScalarWhereInput[]
  }

  export type factureUpdateManyWithoutClientNestedInput = {
    create?: XOR<factureCreateWithoutClientInput, factureUncheckedCreateWithoutClientInput> | factureCreateWithoutClientInput[] | factureUncheckedCreateWithoutClientInput[]
    connectOrCreate?: factureCreateOrConnectWithoutClientInput | factureCreateOrConnectWithoutClientInput[]
    upsert?: factureUpsertWithWhereUniqueWithoutClientInput | factureUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: factureCreateManyClientInputEnvelope
    set?: factureWhereUniqueInput | factureWhereUniqueInput[]
    disconnect?: factureWhereUniqueInput | factureWhereUniqueInput[]
    delete?: factureWhereUniqueInput | factureWhereUniqueInput[]
    connect?: factureWhereUniqueInput | factureWhereUniqueInput[]
    update?: factureUpdateWithWhereUniqueWithoutClientInput | factureUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: factureUpdateManyWithWhereWithoutClientInput | factureUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: factureScalarWhereInput | factureScalarWhereInput[]
  }

  export type rendez_vousUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<rendez_vousCreateWithoutClientInput, rendez_vousUncheckedCreateWithoutClientInput> | rendez_vousCreateWithoutClientInput[] | rendez_vousUncheckedCreateWithoutClientInput[]
    connectOrCreate?: rendez_vousCreateOrConnectWithoutClientInput | rendez_vousCreateOrConnectWithoutClientInput[]
    upsert?: rendez_vousUpsertWithWhereUniqueWithoutClientInput | rendez_vousUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: rendez_vousCreateManyClientInputEnvelope
    set?: rendez_vousWhereUniqueInput | rendez_vousWhereUniqueInput[]
    disconnect?: rendez_vousWhereUniqueInput | rendez_vousWhereUniqueInput[]
    delete?: rendez_vousWhereUniqueInput | rendez_vousWhereUniqueInput[]
    connect?: rendez_vousWhereUniqueInput | rendez_vousWhereUniqueInput[]
    update?: rendez_vousUpdateWithWhereUniqueWithoutClientInput | rendez_vousUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: rendez_vousUpdateManyWithWhereWithoutClientInput | rendez_vousUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: rendez_vousScalarWhereInput | rendez_vousScalarWhereInput[]
  }

  export type documentUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<documentCreateWithoutClientInput, documentUncheckedCreateWithoutClientInput> | documentCreateWithoutClientInput[] | documentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: documentCreateOrConnectWithoutClientInput | documentCreateOrConnectWithoutClientInput[]
    upsert?: documentUpsertWithWhereUniqueWithoutClientInput | documentUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: documentCreateManyClientInputEnvelope
    set?: documentWhereUniqueInput | documentWhereUniqueInput[]
    disconnect?: documentWhereUniqueInput | documentWhereUniqueInput[]
    delete?: documentWhereUniqueInput | documentWhereUniqueInput[]
    connect?: documentWhereUniqueInput | documentWhereUniqueInput[]
    update?: documentUpdateWithWhereUniqueWithoutClientInput | documentUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: documentUpdateManyWithWhereWithoutClientInput | documentUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: documentScalarWhereInput | documentScalarWhereInput[]
  }

  export type factureUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<factureCreateWithoutClientInput, factureUncheckedCreateWithoutClientInput> | factureCreateWithoutClientInput[] | factureUncheckedCreateWithoutClientInput[]
    connectOrCreate?: factureCreateOrConnectWithoutClientInput | factureCreateOrConnectWithoutClientInput[]
    upsert?: factureUpsertWithWhereUniqueWithoutClientInput | factureUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: factureCreateManyClientInputEnvelope
    set?: factureWhereUniqueInput | factureWhereUniqueInput[]
    disconnect?: factureWhereUniqueInput | factureWhereUniqueInput[]
    delete?: factureWhereUniqueInput | factureWhereUniqueInput[]
    connect?: factureWhereUniqueInput | factureWhereUniqueInput[]
    update?: factureUpdateWithWhereUniqueWithoutClientInput | factureUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: factureUpdateManyWithWhereWithoutClientInput | factureUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: factureScalarWhereInput | factureScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutRendez_vousInput = {
    create?: XOR<ClientCreateWithoutRendez_vousInput, ClientUncheckedCreateWithoutRendez_vousInput>
    connectOrCreate?: ClientCreateOrConnectWithoutRendez_vousInput
    connect?: ClientWhereUniqueInput
  }

  export type UtilisateurCreateNestedOneWithoutRendez_vousInput = {
    create?: XOR<UtilisateurCreateWithoutRendez_vousInput, UtilisateurUncheckedCreateWithoutRendez_vousInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutRendez_vousInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type ClientUpdateOneRequiredWithoutRendez_vousNestedInput = {
    create?: XOR<ClientCreateWithoutRendez_vousInput, ClientUncheckedCreateWithoutRendez_vousInput>
    connectOrCreate?: ClientCreateOrConnectWithoutRendez_vousInput
    upsert?: ClientUpsertWithoutRendez_vousInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutRendez_vousInput, ClientUpdateWithoutRendez_vousInput>, ClientUncheckedUpdateWithoutRendez_vousInput>
  }

  export type UtilisateurUpdateOneRequiredWithoutRendez_vousNestedInput = {
    create?: XOR<UtilisateurCreateWithoutRendez_vousInput, UtilisateurUncheckedCreateWithoutRendez_vousInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutRendez_vousInput
    upsert?: UtilisateurUpsertWithoutRendez_vousInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutRendez_vousInput, UtilisateurUpdateWithoutRendez_vousInput>, UtilisateurUncheckedUpdateWithoutRendez_vousInput>
  }

  export type UtilisateurCreateNestedOneWithoutDocumentTemplatesInput = {
    create?: XOR<UtilisateurCreateWithoutDocumentTemplatesInput, UtilisateurUncheckedCreateWithoutDocumentTemplatesInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutDocumentTemplatesInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type documentCreateNestedManyWithoutTemplateInput = {
    create?: XOR<documentCreateWithoutTemplateInput, documentUncheckedCreateWithoutTemplateInput> | documentCreateWithoutTemplateInput[] | documentUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: documentCreateOrConnectWithoutTemplateInput | documentCreateOrConnectWithoutTemplateInput[]
    createMany?: documentCreateManyTemplateInputEnvelope
    connect?: documentWhereUniqueInput | documentWhereUniqueInput[]
  }

  export type documentUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<documentCreateWithoutTemplateInput, documentUncheckedCreateWithoutTemplateInput> | documentCreateWithoutTemplateInput[] | documentUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: documentCreateOrConnectWithoutTemplateInput | documentCreateOrConnectWithoutTemplateInput[]
    createMany?: documentCreateManyTemplateInputEnvelope
    connect?: documentWhereUniqueInput | documentWhereUniqueInput[]
  }

  export type UtilisateurUpdateOneRequiredWithoutDocumentTemplatesNestedInput = {
    create?: XOR<UtilisateurCreateWithoutDocumentTemplatesInput, UtilisateurUncheckedCreateWithoutDocumentTemplatesInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutDocumentTemplatesInput
    upsert?: UtilisateurUpsertWithoutDocumentTemplatesInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutDocumentTemplatesInput, UtilisateurUpdateWithoutDocumentTemplatesInput>, UtilisateurUncheckedUpdateWithoutDocumentTemplatesInput>
  }

  export type documentUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<documentCreateWithoutTemplateInput, documentUncheckedCreateWithoutTemplateInput> | documentCreateWithoutTemplateInput[] | documentUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: documentCreateOrConnectWithoutTemplateInput | documentCreateOrConnectWithoutTemplateInput[]
    upsert?: documentUpsertWithWhereUniqueWithoutTemplateInput | documentUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: documentCreateManyTemplateInputEnvelope
    set?: documentWhereUniqueInput | documentWhereUniqueInput[]
    disconnect?: documentWhereUniqueInput | documentWhereUniqueInput[]
    delete?: documentWhereUniqueInput | documentWhereUniqueInput[]
    connect?: documentWhereUniqueInput | documentWhereUniqueInput[]
    update?: documentUpdateWithWhereUniqueWithoutTemplateInput | documentUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: documentUpdateManyWithWhereWithoutTemplateInput | documentUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: documentScalarWhereInput | documentScalarWhereInput[]
  }

  export type documentUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<documentCreateWithoutTemplateInput, documentUncheckedCreateWithoutTemplateInput> | documentCreateWithoutTemplateInput[] | documentUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: documentCreateOrConnectWithoutTemplateInput | documentCreateOrConnectWithoutTemplateInput[]
    upsert?: documentUpsertWithWhereUniqueWithoutTemplateInput | documentUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: documentCreateManyTemplateInputEnvelope
    set?: documentWhereUniqueInput | documentWhereUniqueInput[]
    disconnect?: documentWhereUniqueInput | documentWhereUniqueInput[]
    delete?: documentWhereUniqueInput | documentWhereUniqueInput[]
    connect?: documentWhereUniqueInput | documentWhereUniqueInput[]
    update?: documentUpdateWithWhereUniqueWithoutTemplateInput | documentUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: documentUpdateManyWithWhereWithoutTemplateInput | documentUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: documentScalarWhereInput | documentScalarWhereInput[]
  }

  export type document_templatesCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<document_templatesCreateWithoutDocumentsInput, document_templatesUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: document_templatesCreateOrConnectWithoutDocumentsInput
    connect?: document_templatesWhereUniqueInput
  }

  export type ClientCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<ClientCreateWithoutDocumentsInput, ClientUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutDocumentsInput
    connect?: ClientWhereUniqueInput
  }

  export type UtilisateurCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<UtilisateurCreateWithoutDocumentsInput, UtilisateurUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutDocumentsInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type document_templatesUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<document_templatesCreateWithoutDocumentsInput, document_templatesUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: document_templatesCreateOrConnectWithoutDocumentsInput
    upsert?: document_templatesUpsertWithoutDocumentsInput
    connect?: document_templatesWhereUniqueInput
    update?: XOR<XOR<document_templatesUpdateToOneWithWhereWithoutDocumentsInput, document_templatesUpdateWithoutDocumentsInput>, document_templatesUncheckedUpdateWithoutDocumentsInput>
  }

  export type ClientUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<ClientCreateWithoutDocumentsInput, ClientUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutDocumentsInput
    upsert?: ClientUpsertWithoutDocumentsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutDocumentsInput, ClientUpdateWithoutDocumentsInput>, ClientUncheckedUpdateWithoutDocumentsInput>
  }

  export type UtilisateurUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<UtilisateurCreateWithoutDocumentsInput, UtilisateurUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutDocumentsInput
    upsert?: UtilisateurUpsertWithoutDocumentsInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutDocumentsInput, UtilisateurUpdateWithoutDocumentsInput>, UtilisateurUncheckedUpdateWithoutDocumentsInput>
  }

  export type UtilisateurCreateNestedOneWithoutBiensInput = {
    create?: XOR<UtilisateurCreateWithoutBiensInput, UtilisateurUncheckedCreateWithoutBiensInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutBiensInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type facture_bienCreateNestedManyWithoutBienInput = {
    create?: XOR<facture_bienCreateWithoutBienInput, facture_bienUncheckedCreateWithoutBienInput> | facture_bienCreateWithoutBienInput[] | facture_bienUncheckedCreateWithoutBienInput[]
    connectOrCreate?: facture_bienCreateOrConnectWithoutBienInput | facture_bienCreateOrConnectWithoutBienInput[]
    createMany?: facture_bienCreateManyBienInputEnvelope
    connect?: facture_bienWhereUniqueInput | facture_bienWhereUniqueInput[]
  }

  export type facture_bienUncheckedCreateNestedManyWithoutBienInput = {
    create?: XOR<facture_bienCreateWithoutBienInput, facture_bienUncheckedCreateWithoutBienInput> | facture_bienCreateWithoutBienInput[] | facture_bienUncheckedCreateWithoutBienInput[]
    connectOrCreate?: facture_bienCreateOrConnectWithoutBienInput | facture_bienCreateOrConnectWithoutBienInput[]
    createMany?: facture_bienCreateManyBienInputEnvelope
    connect?: facture_bienWhereUniqueInput | facture_bienWhereUniqueInput[]
  }

  export type EnumBienTypeFieldUpdateOperationsInput = {
    set?: $Enums.BienType
  }

  export type EnumServiceTypeFieldUpdateOperationsInput = {
    set?: $Enums.ServiceType
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UtilisateurUpdateOneRequiredWithoutBiensNestedInput = {
    create?: XOR<UtilisateurCreateWithoutBiensInput, UtilisateurUncheckedCreateWithoutBiensInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutBiensInput
    upsert?: UtilisateurUpsertWithoutBiensInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutBiensInput, UtilisateurUpdateWithoutBiensInput>, UtilisateurUncheckedUpdateWithoutBiensInput>
  }

  export type facture_bienUpdateManyWithoutBienNestedInput = {
    create?: XOR<facture_bienCreateWithoutBienInput, facture_bienUncheckedCreateWithoutBienInput> | facture_bienCreateWithoutBienInput[] | facture_bienUncheckedCreateWithoutBienInput[]
    connectOrCreate?: facture_bienCreateOrConnectWithoutBienInput | facture_bienCreateOrConnectWithoutBienInput[]
    upsert?: facture_bienUpsertWithWhereUniqueWithoutBienInput | facture_bienUpsertWithWhereUniqueWithoutBienInput[]
    createMany?: facture_bienCreateManyBienInputEnvelope
    set?: facture_bienWhereUniqueInput | facture_bienWhereUniqueInput[]
    disconnect?: facture_bienWhereUniqueInput | facture_bienWhereUniqueInput[]
    delete?: facture_bienWhereUniqueInput | facture_bienWhereUniqueInput[]
    connect?: facture_bienWhereUniqueInput | facture_bienWhereUniqueInput[]
    update?: facture_bienUpdateWithWhereUniqueWithoutBienInput | facture_bienUpdateWithWhereUniqueWithoutBienInput[]
    updateMany?: facture_bienUpdateManyWithWhereWithoutBienInput | facture_bienUpdateManyWithWhereWithoutBienInput[]
    deleteMany?: facture_bienScalarWhereInput | facture_bienScalarWhereInput[]
  }

  export type facture_bienUncheckedUpdateManyWithoutBienNestedInput = {
    create?: XOR<facture_bienCreateWithoutBienInput, facture_bienUncheckedCreateWithoutBienInput> | facture_bienCreateWithoutBienInput[] | facture_bienUncheckedCreateWithoutBienInput[]
    connectOrCreate?: facture_bienCreateOrConnectWithoutBienInput | facture_bienCreateOrConnectWithoutBienInput[]
    upsert?: facture_bienUpsertWithWhereUniqueWithoutBienInput | facture_bienUpsertWithWhereUniqueWithoutBienInput[]
    createMany?: facture_bienCreateManyBienInputEnvelope
    set?: facture_bienWhereUniqueInput | facture_bienWhereUniqueInput[]
    disconnect?: facture_bienWhereUniqueInput | facture_bienWhereUniqueInput[]
    delete?: facture_bienWhereUniqueInput | facture_bienWhereUniqueInput[]
    connect?: facture_bienWhereUniqueInput | facture_bienWhereUniqueInput[]
    update?: facture_bienUpdateWithWhereUniqueWithoutBienInput | facture_bienUpdateWithWhereUniqueWithoutBienInput[]
    updateMany?: facture_bienUpdateManyWithWhereWithoutBienInput | facture_bienUpdateManyWithWhereWithoutBienInput[]
    deleteMany?: facture_bienScalarWhereInput | facture_bienScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutFacturesInput = {
    create?: XOR<ClientCreateWithoutFacturesInput, ClientUncheckedCreateWithoutFacturesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutFacturesInput
    connect?: ClientWhereUniqueInput
  }

  export type UtilisateurCreateNestedOneWithoutFacturesInput = {
    create?: XOR<UtilisateurCreateWithoutFacturesInput, UtilisateurUncheckedCreateWithoutFacturesInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutFacturesInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type facture_bienCreateNestedManyWithoutFactureInput = {
    create?: XOR<facture_bienCreateWithoutFactureInput, facture_bienUncheckedCreateWithoutFactureInput> | facture_bienCreateWithoutFactureInput[] | facture_bienUncheckedCreateWithoutFactureInput[]
    connectOrCreate?: facture_bienCreateOrConnectWithoutFactureInput | facture_bienCreateOrConnectWithoutFactureInput[]
    createMany?: facture_bienCreateManyFactureInputEnvelope
    connect?: facture_bienWhereUniqueInput | facture_bienWhereUniqueInput[]
  }

  export type paimentCreateNestedManyWithoutFactureInput = {
    create?: XOR<paimentCreateWithoutFactureInput, paimentUncheckedCreateWithoutFactureInput> | paimentCreateWithoutFactureInput[] | paimentUncheckedCreateWithoutFactureInput[]
    connectOrCreate?: paimentCreateOrConnectWithoutFactureInput | paimentCreateOrConnectWithoutFactureInput[]
    createMany?: paimentCreateManyFactureInputEnvelope
    connect?: paimentWhereUniqueInput | paimentWhereUniqueInput[]
  }

  export type facture_bienUncheckedCreateNestedManyWithoutFactureInput = {
    create?: XOR<facture_bienCreateWithoutFactureInput, facture_bienUncheckedCreateWithoutFactureInput> | facture_bienCreateWithoutFactureInput[] | facture_bienUncheckedCreateWithoutFactureInput[]
    connectOrCreate?: facture_bienCreateOrConnectWithoutFactureInput | facture_bienCreateOrConnectWithoutFactureInput[]
    createMany?: facture_bienCreateManyFactureInputEnvelope
    connect?: facture_bienWhereUniqueInput | facture_bienWhereUniqueInput[]
  }

  export type paimentUncheckedCreateNestedManyWithoutFactureInput = {
    create?: XOR<paimentCreateWithoutFactureInput, paimentUncheckedCreateWithoutFactureInput> | paimentCreateWithoutFactureInput[] | paimentUncheckedCreateWithoutFactureInput[]
    connectOrCreate?: paimentCreateOrConnectWithoutFactureInput | paimentCreateOrConnectWithoutFactureInput[]
    createMany?: paimentCreateManyFactureInputEnvelope
    connect?: paimentWhereUniqueInput | paimentWhereUniqueInput[]
  }

  export type EnumFactureStatusFieldUpdateOperationsInput = {
    set?: $Enums.FactureStatus
  }

  export type ClientUpdateOneRequiredWithoutFacturesNestedInput = {
    create?: XOR<ClientCreateWithoutFacturesInput, ClientUncheckedCreateWithoutFacturesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutFacturesInput
    upsert?: ClientUpsertWithoutFacturesInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutFacturesInput, ClientUpdateWithoutFacturesInput>, ClientUncheckedUpdateWithoutFacturesInput>
  }

  export type UtilisateurUpdateOneRequiredWithoutFacturesNestedInput = {
    create?: XOR<UtilisateurCreateWithoutFacturesInput, UtilisateurUncheckedCreateWithoutFacturesInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutFacturesInput
    upsert?: UtilisateurUpsertWithoutFacturesInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutFacturesInput, UtilisateurUpdateWithoutFacturesInput>, UtilisateurUncheckedUpdateWithoutFacturesInput>
  }

  export type facture_bienUpdateManyWithoutFactureNestedInput = {
    create?: XOR<facture_bienCreateWithoutFactureInput, facture_bienUncheckedCreateWithoutFactureInput> | facture_bienCreateWithoutFactureInput[] | facture_bienUncheckedCreateWithoutFactureInput[]
    connectOrCreate?: facture_bienCreateOrConnectWithoutFactureInput | facture_bienCreateOrConnectWithoutFactureInput[]
    upsert?: facture_bienUpsertWithWhereUniqueWithoutFactureInput | facture_bienUpsertWithWhereUniqueWithoutFactureInput[]
    createMany?: facture_bienCreateManyFactureInputEnvelope
    set?: facture_bienWhereUniqueInput | facture_bienWhereUniqueInput[]
    disconnect?: facture_bienWhereUniqueInput | facture_bienWhereUniqueInput[]
    delete?: facture_bienWhereUniqueInput | facture_bienWhereUniqueInput[]
    connect?: facture_bienWhereUniqueInput | facture_bienWhereUniqueInput[]
    update?: facture_bienUpdateWithWhereUniqueWithoutFactureInput | facture_bienUpdateWithWhereUniqueWithoutFactureInput[]
    updateMany?: facture_bienUpdateManyWithWhereWithoutFactureInput | facture_bienUpdateManyWithWhereWithoutFactureInput[]
    deleteMany?: facture_bienScalarWhereInput | facture_bienScalarWhereInput[]
  }

  export type paimentUpdateManyWithoutFactureNestedInput = {
    create?: XOR<paimentCreateWithoutFactureInput, paimentUncheckedCreateWithoutFactureInput> | paimentCreateWithoutFactureInput[] | paimentUncheckedCreateWithoutFactureInput[]
    connectOrCreate?: paimentCreateOrConnectWithoutFactureInput | paimentCreateOrConnectWithoutFactureInput[]
    upsert?: paimentUpsertWithWhereUniqueWithoutFactureInput | paimentUpsertWithWhereUniqueWithoutFactureInput[]
    createMany?: paimentCreateManyFactureInputEnvelope
    set?: paimentWhereUniqueInput | paimentWhereUniqueInput[]
    disconnect?: paimentWhereUniqueInput | paimentWhereUniqueInput[]
    delete?: paimentWhereUniqueInput | paimentWhereUniqueInput[]
    connect?: paimentWhereUniqueInput | paimentWhereUniqueInput[]
    update?: paimentUpdateWithWhereUniqueWithoutFactureInput | paimentUpdateWithWhereUniqueWithoutFactureInput[]
    updateMany?: paimentUpdateManyWithWhereWithoutFactureInput | paimentUpdateManyWithWhereWithoutFactureInput[]
    deleteMany?: paimentScalarWhereInput | paimentScalarWhereInput[]
  }

  export type facture_bienUncheckedUpdateManyWithoutFactureNestedInput = {
    create?: XOR<facture_bienCreateWithoutFactureInput, facture_bienUncheckedCreateWithoutFactureInput> | facture_bienCreateWithoutFactureInput[] | facture_bienUncheckedCreateWithoutFactureInput[]
    connectOrCreate?: facture_bienCreateOrConnectWithoutFactureInput | facture_bienCreateOrConnectWithoutFactureInput[]
    upsert?: facture_bienUpsertWithWhereUniqueWithoutFactureInput | facture_bienUpsertWithWhereUniqueWithoutFactureInput[]
    createMany?: facture_bienCreateManyFactureInputEnvelope
    set?: facture_bienWhereUniqueInput | facture_bienWhereUniqueInput[]
    disconnect?: facture_bienWhereUniqueInput | facture_bienWhereUniqueInput[]
    delete?: facture_bienWhereUniqueInput | facture_bienWhereUniqueInput[]
    connect?: facture_bienWhereUniqueInput | facture_bienWhereUniqueInput[]
    update?: facture_bienUpdateWithWhereUniqueWithoutFactureInput | facture_bienUpdateWithWhereUniqueWithoutFactureInput[]
    updateMany?: facture_bienUpdateManyWithWhereWithoutFactureInput | facture_bienUpdateManyWithWhereWithoutFactureInput[]
    deleteMany?: facture_bienScalarWhereInput | facture_bienScalarWhereInput[]
  }

  export type paimentUncheckedUpdateManyWithoutFactureNestedInput = {
    create?: XOR<paimentCreateWithoutFactureInput, paimentUncheckedCreateWithoutFactureInput> | paimentCreateWithoutFactureInput[] | paimentUncheckedCreateWithoutFactureInput[]
    connectOrCreate?: paimentCreateOrConnectWithoutFactureInput | paimentCreateOrConnectWithoutFactureInput[]
    upsert?: paimentUpsertWithWhereUniqueWithoutFactureInput | paimentUpsertWithWhereUniqueWithoutFactureInput[]
    createMany?: paimentCreateManyFactureInputEnvelope
    set?: paimentWhereUniqueInput | paimentWhereUniqueInput[]
    disconnect?: paimentWhereUniqueInput | paimentWhereUniqueInput[]
    delete?: paimentWhereUniqueInput | paimentWhereUniqueInput[]
    connect?: paimentWhereUniqueInput | paimentWhereUniqueInput[]
    update?: paimentUpdateWithWhereUniqueWithoutFactureInput | paimentUpdateWithWhereUniqueWithoutFactureInput[]
    updateMany?: paimentUpdateManyWithWhereWithoutFactureInput | paimentUpdateManyWithWhereWithoutFactureInput[]
    deleteMany?: paimentScalarWhereInput | paimentScalarWhereInput[]
  }

  export type factureCreateNestedOneWithoutFactureBiensInput = {
    create?: XOR<factureCreateWithoutFactureBiensInput, factureUncheckedCreateWithoutFactureBiensInput>
    connectOrCreate?: factureCreateOrConnectWithoutFactureBiensInput
    connect?: factureWhereUniqueInput
  }

  export type bienCreateNestedOneWithoutFactureBiensInput = {
    create?: XOR<bienCreateWithoutFactureBiensInput, bienUncheckedCreateWithoutFactureBiensInput>
    connectOrCreate?: bienCreateOrConnectWithoutFactureBiensInput
    connect?: bienWhereUniqueInput
  }

  export type UtilisateurCreateNestedOneWithoutFactureBiensInput = {
    create?: XOR<UtilisateurCreateWithoutFactureBiensInput, UtilisateurUncheckedCreateWithoutFactureBiensInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutFactureBiensInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type factureUpdateOneRequiredWithoutFactureBiensNestedInput = {
    create?: XOR<factureCreateWithoutFactureBiensInput, factureUncheckedCreateWithoutFactureBiensInput>
    connectOrCreate?: factureCreateOrConnectWithoutFactureBiensInput
    upsert?: factureUpsertWithoutFactureBiensInput
    connect?: factureWhereUniqueInput
    update?: XOR<XOR<factureUpdateToOneWithWhereWithoutFactureBiensInput, factureUpdateWithoutFactureBiensInput>, factureUncheckedUpdateWithoutFactureBiensInput>
  }

  export type bienUpdateOneRequiredWithoutFactureBiensNestedInput = {
    create?: XOR<bienCreateWithoutFactureBiensInput, bienUncheckedCreateWithoutFactureBiensInput>
    connectOrCreate?: bienCreateOrConnectWithoutFactureBiensInput
    upsert?: bienUpsertWithoutFactureBiensInput
    connect?: bienWhereUniqueInput
    update?: XOR<XOR<bienUpdateToOneWithWhereWithoutFactureBiensInput, bienUpdateWithoutFactureBiensInput>, bienUncheckedUpdateWithoutFactureBiensInput>
  }

  export type UtilisateurUpdateOneRequiredWithoutFactureBiensNestedInput = {
    create?: XOR<UtilisateurCreateWithoutFactureBiensInput, UtilisateurUncheckedCreateWithoutFactureBiensInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutFactureBiensInput
    upsert?: UtilisateurUpsertWithoutFactureBiensInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutFactureBiensInput, UtilisateurUpdateWithoutFactureBiensInput>, UtilisateurUncheckedUpdateWithoutFactureBiensInput>
  }

  export type factureCreateNestedOneWithoutPaiementsInput = {
    create?: XOR<factureCreateWithoutPaiementsInput, factureUncheckedCreateWithoutPaiementsInput>
    connectOrCreate?: factureCreateOrConnectWithoutPaiementsInput
    connect?: factureWhereUniqueInput
  }

  export type UtilisateurCreateNestedOneWithoutPaiementsInput = {
    create?: XOR<UtilisateurCreateWithoutPaiementsInput, UtilisateurUncheckedCreateWithoutPaiementsInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutPaiementsInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type factureUpdateOneRequiredWithoutPaiementsNestedInput = {
    create?: XOR<factureCreateWithoutPaiementsInput, factureUncheckedCreateWithoutPaiementsInput>
    connectOrCreate?: factureCreateOrConnectWithoutPaiementsInput
    upsert?: factureUpsertWithoutPaiementsInput
    connect?: factureWhereUniqueInput
    update?: XOR<XOR<factureUpdateToOneWithWhereWithoutPaiementsInput, factureUpdateWithoutPaiementsInput>, factureUncheckedUpdateWithoutPaiementsInput>
  }

  export type UtilisateurUpdateOneRequiredWithoutPaiementsNestedInput = {
    create?: XOR<UtilisateurCreateWithoutPaiementsInput, UtilisateurUncheckedCreateWithoutPaiementsInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutPaiementsInput
    upsert?: UtilisateurUpsertWithoutPaiementsInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutPaiementsInput, UtilisateurUpdateWithoutPaiementsInput>, UtilisateurUncheckedUpdateWithoutPaiementsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumBienTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BienType | EnumBienTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BienType[]
    notIn?: $Enums.BienType[]
    not?: NestedEnumBienTypeFilter<$PrismaModel> | $Enums.BienType
  }

  export type NestedEnumServiceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceType[]
    notIn?: $Enums.ServiceType[]
    not?: NestedEnumServiceTypeFilter<$PrismaModel> | $Enums.ServiceType
  }

  export type NestedEnumBienTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BienType | EnumBienTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BienType[]
    notIn?: $Enums.BienType[]
    not?: NestedEnumBienTypeWithAggregatesFilter<$PrismaModel> | $Enums.BienType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBienTypeFilter<$PrismaModel>
    _max?: NestedEnumBienTypeFilter<$PrismaModel>
  }

  export type NestedEnumServiceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceType | EnumServiceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceType[]
    notIn?: $Enums.ServiceType[]
    not?: NestedEnumServiceTypeWithAggregatesFilter<$PrismaModel> | $Enums.ServiceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceTypeFilter<$PrismaModel>
    _max?: NestedEnumServiceTypeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumFactureStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FactureStatus | EnumFactureStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FactureStatus[]
    notIn?: $Enums.FactureStatus[]
    not?: NestedEnumFactureStatusFilter<$PrismaModel> | $Enums.FactureStatus
  }

  export type NestedEnumFactureStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FactureStatus | EnumFactureStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FactureStatus[]
    notIn?: $Enums.FactureStatus[]
    not?: NestedEnumFactureStatusWithAggregatesFilter<$PrismaModel> | $Enums.FactureStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFactureStatusFilter<$PrismaModel>
    _max?: NestedEnumFactureStatusFilter<$PrismaModel>
  }

  export type ClientCreateWithoutUtilisateurInput = {
    CIN: string
    nom: string
    prenom: string
    date_naissance: Date | string
    adresse: string
    numero_telephone: string
    email: string
    groupe_sanguin: string
    antecedents?: string | null
    allergies?: string | null
    commentaire?: string | null
    created_at?: Date | string
    rendez_vous?: rendez_vousCreateNestedManyWithoutClientInput
    documents?: documentCreateNestedManyWithoutClientInput
    factures?: factureCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutUtilisateurInput = {
    id?: number
    CIN: string
    nom: string
    prenom: string
    date_naissance: Date | string
    adresse: string
    numero_telephone: string
    email: string
    groupe_sanguin: string
    antecedents?: string | null
    allergies?: string | null
    commentaire?: string | null
    created_at?: Date | string
    rendez_vous?: rendez_vousUncheckedCreateNestedManyWithoutClientInput
    documents?: documentUncheckedCreateNestedManyWithoutClientInput
    factures?: factureUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutUtilisateurInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutUtilisateurInput, ClientUncheckedCreateWithoutUtilisateurInput>
  }

  export type ClientCreateManyUtilisateurInputEnvelope = {
    data: ClientCreateManyUtilisateurInput | ClientCreateManyUtilisateurInput[]
  }

  export type rendez_vousCreateWithoutUtilisateurInput = {
    sujet: string
    date_rendez_vous: Date | string
    created_at?: Date | string
    client: ClientCreateNestedOneWithoutRendez_vousInput
  }

  export type rendez_vousUncheckedCreateWithoutUtilisateurInput = {
    id?: number
    CIN: string
    sujet: string
    date_rendez_vous: Date | string
    created_at?: Date | string
  }

  export type rendez_vousCreateOrConnectWithoutUtilisateurInput = {
    where: rendez_vousWhereUniqueInput
    create: XOR<rendez_vousCreateWithoutUtilisateurInput, rendez_vousUncheckedCreateWithoutUtilisateurInput>
  }

  export type rendez_vousCreateManyUtilisateurInputEnvelope = {
    data: rendez_vousCreateManyUtilisateurInput | rendez_vousCreateManyUtilisateurInput[]
  }

  export type document_templatesCreateWithoutUtilisateurInput = {
    name: string
    sections_json: string
    documents?: documentCreateNestedManyWithoutTemplateInput
  }

  export type document_templatesUncheckedCreateWithoutUtilisateurInput = {
    id?: number
    name: string
    sections_json: string
    documents?: documentUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type document_templatesCreateOrConnectWithoutUtilisateurInput = {
    where: document_templatesWhereUniqueInput
    create: XOR<document_templatesCreateWithoutUtilisateurInput, document_templatesUncheckedCreateWithoutUtilisateurInput>
  }

  export type document_templatesCreateManyUtilisateurInputEnvelope = {
    data: document_templatesCreateManyUtilisateurInput | document_templatesCreateManyUtilisateurInput[]
  }

  export type documentCreateWithoutUtilisateurInput = {
    data_json: string
    template: document_templatesCreateNestedOneWithoutDocumentsInput
    client: ClientCreateNestedOneWithoutDocumentsInput
  }

  export type documentUncheckedCreateWithoutUtilisateurInput = {
    id?: number
    template_id: number
    CIN: string
    data_json: string
  }

  export type documentCreateOrConnectWithoutUtilisateurInput = {
    where: documentWhereUniqueInput
    create: XOR<documentCreateWithoutUtilisateurInput, documentUncheckedCreateWithoutUtilisateurInput>
  }

  export type documentCreateManyUtilisateurInputEnvelope = {
    data: documentCreateManyUtilisateurInput | documentCreateManyUtilisateurInput[]
  }

  export type bienCreateWithoutUtilisateurInput = {
    Nom: string
    bien_type: $Enums.BienType
    Type: $Enums.ServiceType
    prix: number
    stock: number
    factureBiens?: facture_bienCreateNestedManyWithoutBienInput
  }

  export type bienUncheckedCreateWithoutUtilisateurInput = {
    id?: number
    Nom: string
    bien_type: $Enums.BienType
    Type: $Enums.ServiceType
    prix: number
    stock: number
    factureBiens?: facture_bienUncheckedCreateNestedManyWithoutBienInput
  }

  export type bienCreateOrConnectWithoutUtilisateurInput = {
    where: bienWhereUniqueInput
    create: XOR<bienCreateWithoutUtilisateurInput, bienUncheckedCreateWithoutUtilisateurInput>
  }

  export type bienCreateManyUtilisateurInputEnvelope = {
    data: bienCreateManyUtilisateurInput | bienCreateManyUtilisateurInput[]
  }

  export type factureCreateWithoutUtilisateurInput = {
    date: Date | string
    prix_total: number
    statut: $Enums.FactureStatus
    notes?: string | null
    client: ClientCreateNestedOneWithoutFacturesInput
    factureBiens?: facture_bienCreateNestedManyWithoutFactureInput
    paiements?: paimentCreateNestedManyWithoutFactureInput
  }

  export type factureUncheckedCreateWithoutUtilisateurInput = {
    id?: number
    CIN: string
    date: Date | string
    prix_total: number
    statut: $Enums.FactureStatus
    notes?: string | null
    factureBiens?: facture_bienUncheckedCreateNestedManyWithoutFactureInput
    paiements?: paimentUncheckedCreateNestedManyWithoutFactureInput
  }

  export type factureCreateOrConnectWithoutUtilisateurInput = {
    where: factureWhereUniqueInput
    create: XOR<factureCreateWithoutUtilisateurInput, factureUncheckedCreateWithoutUtilisateurInput>
  }

  export type factureCreateManyUtilisateurInputEnvelope = {
    data: factureCreateManyUtilisateurInput | factureCreateManyUtilisateurInput[]
  }

  export type facture_bienCreateWithoutUtilisateurInput = {
    type_bien: $Enums.BienType
    quantite: number
    facture: factureCreateNestedOneWithoutFactureBiensInput
    bien: bienCreateNestedOneWithoutFactureBiensInput
  }

  export type facture_bienUncheckedCreateWithoutUtilisateurInput = {
    id?: number
    id_facture: number
    id_bien: number
    type_bien: $Enums.BienType
    quantite: number
  }

  export type facture_bienCreateOrConnectWithoutUtilisateurInput = {
    where: facture_bienWhereUniqueInput
    create: XOR<facture_bienCreateWithoutUtilisateurInput, facture_bienUncheckedCreateWithoutUtilisateurInput>
  }

  export type facture_bienCreateManyUtilisateurInputEnvelope = {
    data: facture_bienCreateManyUtilisateurInput | facture_bienCreateManyUtilisateurInput[]
  }

  export type paimentCreateWithoutUtilisateurInput = {
    date: Date | string
    montant_totale: number
    facture: factureCreateNestedOneWithoutPaiementsInput
  }

  export type paimentUncheckedCreateWithoutUtilisateurInput = {
    id?: number
    id_facture: number
    date: Date | string
    montant_totale: number
  }

  export type paimentCreateOrConnectWithoutUtilisateurInput = {
    where: paimentWhereUniqueInput
    create: XOR<paimentCreateWithoutUtilisateurInput, paimentUncheckedCreateWithoutUtilisateurInput>
  }

  export type paimentCreateManyUtilisateurInputEnvelope = {
    data: paimentCreateManyUtilisateurInput | paimentCreateManyUtilisateurInput[]
  }

  export type ClientUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: ClientWhereUniqueInput
    update: XOR<ClientUpdateWithoutUtilisateurInput, ClientUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<ClientCreateWithoutUtilisateurInput, ClientUncheckedCreateWithoutUtilisateurInput>
  }

  export type ClientUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: ClientWhereUniqueInput
    data: XOR<ClientUpdateWithoutUtilisateurInput, ClientUncheckedUpdateWithoutUtilisateurInput>
  }

  export type ClientUpdateManyWithWhereWithoutUtilisateurInput = {
    where: ClientScalarWhereInput
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type ClientScalarWhereInput = {
    AND?: ClientScalarWhereInput | ClientScalarWhereInput[]
    OR?: ClientScalarWhereInput[]
    NOT?: ClientScalarWhereInput | ClientScalarWhereInput[]
    id?: IntFilter<"Client"> | number
    CIN?: StringFilter<"Client"> | string
    nom?: StringFilter<"Client"> | string
    prenom?: StringFilter<"Client"> | string
    date_naissance?: DateTimeFilter<"Client"> | Date | string
    adresse?: StringFilter<"Client"> | string
    numero_telephone?: StringFilter<"Client"> | string
    email?: StringFilter<"Client"> | string
    groupe_sanguin?: StringFilter<"Client"> | string
    antecedents?: StringNullableFilter<"Client"> | string | null
    allergies?: StringNullableFilter<"Client"> | string | null
    commentaire?: StringNullableFilter<"Client"> | string | null
    created_at?: DateTimeFilter<"Client"> | Date | string
    Cree_par?: StringFilter<"Client"> | string
  }

  export type rendez_vousUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: rendez_vousWhereUniqueInput
    update: XOR<rendez_vousUpdateWithoutUtilisateurInput, rendez_vousUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<rendez_vousCreateWithoutUtilisateurInput, rendez_vousUncheckedCreateWithoutUtilisateurInput>
  }

  export type rendez_vousUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: rendez_vousWhereUniqueInput
    data: XOR<rendez_vousUpdateWithoutUtilisateurInput, rendez_vousUncheckedUpdateWithoutUtilisateurInput>
  }

  export type rendez_vousUpdateManyWithWhereWithoutUtilisateurInput = {
    where: rendez_vousScalarWhereInput
    data: XOR<rendez_vousUpdateManyMutationInput, rendez_vousUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type rendez_vousScalarWhereInput = {
    AND?: rendez_vousScalarWhereInput | rendez_vousScalarWhereInput[]
    OR?: rendez_vousScalarWhereInput[]
    NOT?: rendez_vousScalarWhereInput | rendez_vousScalarWhereInput[]
    id?: IntFilter<"rendez_vous"> | number
    CIN?: StringFilter<"rendez_vous"> | string
    sujet?: StringFilter<"rendez_vous"> | string
    date_rendez_vous?: DateTimeFilter<"rendez_vous"> | Date | string
    created_at?: DateTimeFilter<"rendez_vous"> | Date | string
    Cree_par?: StringFilter<"rendez_vous"> | string
  }

  export type document_templatesUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: document_templatesWhereUniqueInput
    update: XOR<document_templatesUpdateWithoutUtilisateurInput, document_templatesUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<document_templatesCreateWithoutUtilisateurInput, document_templatesUncheckedCreateWithoutUtilisateurInput>
  }

  export type document_templatesUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: document_templatesWhereUniqueInput
    data: XOR<document_templatesUpdateWithoutUtilisateurInput, document_templatesUncheckedUpdateWithoutUtilisateurInput>
  }

  export type document_templatesUpdateManyWithWhereWithoutUtilisateurInput = {
    where: document_templatesScalarWhereInput
    data: XOR<document_templatesUpdateManyMutationInput, document_templatesUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type document_templatesScalarWhereInput = {
    AND?: document_templatesScalarWhereInput | document_templatesScalarWhereInput[]
    OR?: document_templatesScalarWhereInput[]
    NOT?: document_templatesScalarWhereInput | document_templatesScalarWhereInput[]
    id?: IntFilter<"document_templates"> | number
    name?: StringFilter<"document_templates"> | string
    sections_json?: StringFilter<"document_templates"> | string
    Cree_par?: StringFilter<"document_templates"> | string
  }

  export type documentUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: documentWhereUniqueInput
    update: XOR<documentUpdateWithoutUtilisateurInput, documentUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<documentCreateWithoutUtilisateurInput, documentUncheckedCreateWithoutUtilisateurInput>
  }

  export type documentUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: documentWhereUniqueInput
    data: XOR<documentUpdateWithoutUtilisateurInput, documentUncheckedUpdateWithoutUtilisateurInput>
  }

  export type documentUpdateManyWithWhereWithoutUtilisateurInput = {
    where: documentScalarWhereInput
    data: XOR<documentUpdateManyMutationInput, documentUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type documentScalarWhereInput = {
    AND?: documentScalarWhereInput | documentScalarWhereInput[]
    OR?: documentScalarWhereInput[]
    NOT?: documentScalarWhereInput | documentScalarWhereInput[]
    id?: IntFilter<"document"> | number
    template_id?: IntFilter<"document"> | number
    CIN?: StringFilter<"document"> | string
    data_json?: StringFilter<"document"> | string
    Cree_par?: StringFilter<"document"> | string
  }

  export type bienUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: bienWhereUniqueInput
    update: XOR<bienUpdateWithoutUtilisateurInput, bienUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<bienCreateWithoutUtilisateurInput, bienUncheckedCreateWithoutUtilisateurInput>
  }

  export type bienUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: bienWhereUniqueInput
    data: XOR<bienUpdateWithoutUtilisateurInput, bienUncheckedUpdateWithoutUtilisateurInput>
  }

  export type bienUpdateManyWithWhereWithoutUtilisateurInput = {
    where: bienScalarWhereInput
    data: XOR<bienUpdateManyMutationInput, bienUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type bienScalarWhereInput = {
    AND?: bienScalarWhereInput | bienScalarWhereInput[]
    OR?: bienScalarWhereInput[]
    NOT?: bienScalarWhereInput | bienScalarWhereInput[]
    id?: IntFilter<"bien"> | number
    Nom?: StringFilter<"bien"> | string
    bien_type?: EnumBienTypeFilter<"bien"> | $Enums.BienType
    Type?: EnumServiceTypeFilter<"bien"> | $Enums.ServiceType
    prix?: FloatFilter<"bien"> | number
    stock?: IntFilter<"bien"> | number
    Cree_par?: StringFilter<"bien"> | string
  }

  export type factureUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: factureWhereUniqueInput
    update: XOR<factureUpdateWithoutUtilisateurInput, factureUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<factureCreateWithoutUtilisateurInput, factureUncheckedCreateWithoutUtilisateurInput>
  }

  export type factureUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: factureWhereUniqueInput
    data: XOR<factureUpdateWithoutUtilisateurInput, factureUncheckedUpdateWithoutUtilisateurInput>
  }

  export type factureUpdateManyWithWhereWithoutUtilisateurInput = {
    where: factureScalarWhereInput
    data: XOR<factureUpdateManyMutationInput, factureUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type factureScalarWhereInput = {
    AND?: factureScalarWhereInput | factureScalarWhereInput[]
    OR?: factureScalarWhereInput[]
    NOT?: factureScalarWhereInput | factureScalarWhereInput[]
    id?: IntFilter<"facture"> | number
    CIN?: StringFilter<"facture"> | string
    date?: DateTimeFilter<"facture"> | Date | string
    prix_total?: FloatFilter<"facture"> | number
    statut?: EnumFactureStatusFilter<"facture"> | $Enums.FactureStatus
    notes?: StringNullableFilter<"facture"> | string | null
    Cree_par?: StringFilter<"facture"> | string
  }

  export type facture_bienUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: facture_bienWhereUniqueInput
    update: XOR<facture_bienUpdateWithoutUtilisateurInput, facture_bienUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<facture_bienCreateWithoutUtilisateurInput, facture_bienUncheckedCreateWithoutUtilisateurInput>
  }

  export type facture_bienUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: facture_bienWhereUniqueInput
    data: XOR<facture_bienUpdateWithoutUtilisateurInput, facture_bienUncheckedUpdateWithoutUtilisateurInput>
  }

  export type facture_bienUpdateManyWithWhereWithoutUtilisateurInput = {
    where: facture_bienScalarWhereInput
    data: XOR<facture_bienUpdateManyMutationInput, facture_bienUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type facture_bienScalarWhereInput = {
    AND?: facture_bienScalarWhereInput | facture_bienScalarWhereInput[]
    OR?: facture_bienScalarWhereInput[]
    NOT?: facture_bienScalarWhereInput | facture_bienScalarWhereInput[]
    id?: IntFilter<"facture_bien"> | number
    id_facture?: IntFilter<"facture_bien"> | number
    id_bien?: IntFilter<"facture_bien"> | number
    type_bien?: EnumBienTypeFilter<"facture_bien"> | $Enums.BienType
    quantite?: IntFilter<"facture_bien"> | number
    Cree_par?: StringFilter<"facture_bien"> | string
  }

  export type paimentUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: paimentWhereUniqueInput
    update: XOR<paimentUpdateWithoutUtilisateurInput, paimentUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<paimentCreateWithoutUtilisateurInput, paimentUncheckedCreateWithoutUtilisateurInput>
  }

  export type paimentUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: paimentWhereUniqueInput
    data: XOR<paimentUpdateWithoutUtilisateurInput, paimentUncheckedUpdateWithoutUtilisateurInput>
  }

  export type paimentUpdateManyWithWhereWithoutUtilisateurInput = {
    where: paimentScalarWhereInput
    data: XOR<paimentUpdateManyMutationInput, paimentUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type paimentScalarWhereInput = {
    AND?: paimentScalarWhereInput | paimentScalarWhereInput[]
    OR?: paimentScalarWhereInput[]
    NOT?: paimentScalarWhereInput | paimentScalarWhereInput[]
    id?: IntFilter<"paiment"> | number
    id_facture?: IntFilter<"paiment"> | number
    date?: DateTimeFilter<"paiment"> | Date | string
    montant_totale?: FloatFilter<"paiment"> | number
    Cree_par?: StringFilter<"paiment"> | string
  }

  export type UtilisateurCreateWithoutClientsInput = {
    CIN: string
    nom: string
    prenom: string
    date_naissance: Date | string
    adresse: string
    numero_telephone: string
    email: string
    password: string
    role: $Enums.Role
    created_at?: Date | string
    rendez_vous?: rendez_vousCreateNestedManyWithoutUtilisateurInput
    documentTemplates?: document_templatesCreateNestedManyWithoutUtilisateurInput
    documents?: documentCreateNestedManyWithoutUtilisateurInput
    biens?: bienCreateNestedManyWithoutUtilisateurInput
    factures?: factureCreateNestedManyWithoutUtilisateurInput
    factureBiens?: facture_bienCreateNestedManyWithoutUtilisateurInput
    paiements?: paimentCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateWithoutClientsInput = {
    id?: number
    CIN: string
    nom: string
    prenom: string
    date_naissance: Date | string
    adresse: string
    numero_telephone: string
    email: string
    password: string
    role: $Enums.Role
    created_at?: Date | string
    rendez_vous?: rendez_vousUncheckedCreateNestedManyWithoutUtilisateurInput
    documentTemplates?: document_templatesUncheckedCreateNestedManyWithoutUtilisateurInput
    documents?: documentUncheckedCreateNestedManyWithoutUtilisateurInput
    biens?: bienUncheckedCreateNestedManyWithoutUtilisateurInput
    factures?: factureUncheckedCreateNestedManyWithoutUtilisateurInput
    factureBiens?: facture_bienUncheckedCreateNestedManyWithoutUtilisateurInput
    paiements?: paimentUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurCreateOrConnectWithoutClientsInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutClientsInput, UtilisateurUncheckedCreateWithoutClientsInput>
  }

  export type rendez_vousCreateWithoutClientInput = {
    sujet: string
    date_rendez_vous: Date | string
    created_at?: Date | string
    utilisateur: UtilisateurCreateNestedOneWithoutRendez_vousInput
  }

  export type rendez_vousUncheckedCreateWithoutClientInput = {
    id?: number
    sujet: string
    date_rendez_vous: Date | string
    created_at?: Date | string
    Cree_par: string
  }

  export type rendez_vousCreateOrConnectWithoutClientInput = {
    where: rendez_vousWhereUniqueInput
    create: XOR<rendez_vousCreateWithoutClientInput, rendez_vousUncheckedCreateWithoutClientInput>
  }

  export type rendez_vousCreateManyClientInputEnvelope = {
    data: rendez_vousCreateManyClientInput | rendez_vousCreateManyClientInput[]
  }

  export type documentCreateWithoutClientInput = {
    data_json: string
    template: document_templatesCreateNestedOneWithoutDocumentsInput
    utilisateur: UtilisateurCreateNestedOneWithoutDocumentsInput
  }

  export type documentUncheckedCreateWithoutClientInput = {
    id?: number
    template_id: number
    data_json: string
    Cree_par: string
  }

  export type documentCreateOrConnectWithoutClientInput = {
    where: documentWhereUniqueInput
    create: XOR<documentCreateWithoutClientInput, documentUncheckedCreateWithoutClientInput>
  }

  export type documentCreateManyClientInputEnvelope = {
    data: documentCreateManyClientInput | documentCreateManyClientInput[]
  }

  export type factureCreateWithoutClientInput = {
    date: Date | string
    prix_total: number
    statut: $Enums.FactureStatus
    notes?: string | null
    utilisateur: UtilisateurCreateNestedOneWithoutFacturesInput
    factureBiens?: facture_bienCreateNestedManyWithoutFactureInput
    paiements?: paimentCreateNestedManyWithoutFactureInput
  }

  export type factureUncheckedCreateWithoutClientInput = {
    id?: number
    date: Date | string
    prix_total: number
    statut: $Enums.FactureStatus
    notes?: string | null
    Cree_par: string
    factureBiens?: facture_bienUncheckedCreateNestedManyWithoutFactureInput
    paiements?: paimentUncheckedCreateNestedManyWithoutFactureInput
  }

  export type factureCreateOrConnectWithoutClientInput = {
    where: factureWhereUniqueInput
    create: XOR<factureCreateWithoutClientInput, factureUncheckedCreateWithoutClientInput>
  }

  export type factureCreateManyClientInputEnvelope = {
    data: factureCreateManyClientInput | factureCreateManyClientInput[]
  }

  export type UtilisateurUpsertWithoutClientsInput = {
    update: XOR<UtilisateurUpdateWithoutClientsInput, UtilisateurUncheckedUpdateWithoutClientsInput>
    create: XOR<UtilisateurCreateWithoutClientsInput, UtilisateurUncheckedCreateWithoutClientsInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutClientsInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutClientsInput, UtilisateurUncheckedUpdateWithoutClientsInput>
  }

  export type UtilisateurUpdateWithoutClientsInput = {
    CIN?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    adresse?: StringFieldUpdateOperationsInput | string
    numero_telephone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rendez_vous?: rendez_vousUpdateManyWithoutUtilisateurNestedInput
    documentTemplates?: document_templatesUpdateManyWithoutUtilisateurNestedInput
    documents?: documentUpdateManyWithoutUtilisateurNestedInput
    biens?: bienUpdateManyWithoutUtilisateurNestedInput
    factures?: factureUpdateManyWithoutUtilisateurNestedInput
    factureBiens?: facture_bienUpdateManyWithoutUtilisateurNestedInput
    paiements?: paimentUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutClientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    CIN?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    adresse?: StringFieldUpdateOperationsInput | string
    numero_telephone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rendez_vous?: rendez_vousUncheckedUpdateManyWithoutUtilisateurNestedInput
    documentTemplates?: document_templatesUncheckedUpdateManyWithoutUtilisateurNestedInput
    documents?: documentUncheckedUpdateManyWithoutUtilisateurNestedInput
    biens?: bienUncheckedUpdateManyWithoutUtilisateurNestedInput
    factures?: factureUncheckedUpdateManyWithoutUtilisateurNestedInput
    factureBiens?: facture_bienUncheckedUpdateManyWithoutUtilisateurNestedInput
    paiements?: paimentUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type rendez_vousUpsertWithWhereUniqueWithoutClientInput = {
    where: rendez_vousWhereUniqueInput
    update: XOR<rendez_vousUpdateWithoutClientInput, rendez_vousUncheckedUpdateWithoutClientInput>
    create: XOR<rendez_vousCreateWithoutClientInput, rendez_vousUncheckedCreateWithoutClientInput>
  }

  export type rendez_vousUpdateWithWhereUniqueWithoutClientInput = {
    where: rendez_vousWhereUniqueInput
    data: XOR<rendez_vousUpdateWithoutClientInput, rendez_vousUncheckedUpdateWithoutClientInput>
  }

  export type rendez_vousUpdateManyWithWhereWithoutClientInput = {
    where: rendez_vousScalarWhereInput
    data: XOR<rendez_vousUpdateManyMutationInput, rendez_vousUncheckedUpdateManyWithoutClientInput>
  }

  export type documentUpsertWithWhereUniqueWithoutClientInput = {
    where: documentWhereUniqueInput
    update: XOR<documentUpdateWithoutClientInput, documentUncheckedUpdateWithoutClientInput>
    create: XOR<documentCreateWithoutClientInput, documentUncheckedCreateWithoutClientInput>
  }

  export type documentUpdateWithWhereUniqueWithoutClientInput = {
    where: documentWhereUniqueInput
    data: XOR<documentUpdateWithoutClientInput, documentUncheckedUpdateWithoutClientInput>
  }

  export type documentUpdateManyWithWhereWithoutClientInput = {
    where: documentScalarWhereInput
    data: XOR<documentUpdateManyMutationInput, documentUncheckedUpdateManyWithoutClientInput>
  }

  export type factureUpsertWithWhereUniqueWithoutClientInput = {
    where: factureWhereUniqueInput
    update: XOR<factureUpdateWithoutClientInput, factureUncheckedUpdateWithoutClientInput>
    create: XOR<factureCreateWithoutClientInput, factureUncheckedCreateWithoutClientInput>
  }

  export type factureUpdateWithWhereUniqueWithoutClientInput = {
    where: factureWhereUniqueInput
    data: XOR<factureUpdateWithoutClientInput, factureUncheckedUpdateWithoutClientInput>
  }

  export type factureUpdateManyWithWhereWithoutClientInput = {
    where: factureScalarWhereInput
    data: XOR<factureUpdateManyMutationInput, factureUncheckedUpdateManyWithoutClientInput>
  }

  export type ClientCreateWithoutRendez_vousInput = {
    CIN: string
    nom: string
    prenom: string
    date_naissance: Date | string
    adresse: string
    numero_telephone: string
    email: string
    groupe_sanguin: string
    antecedents?: string | null
    allergies?: string | null
    commentaire?: string | null
    created_at?: Date | string
    utilisateur: UtilisateurCreateNestedOneWithoutClientsInput
    documents?: documentCreateNestedManyWithoutClientInput
    factures?: factureCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutRendez_vousInput = {
    id?: number
    CIN: string
    nom: string
    prenom: string
    date_naissance: Date | string
    adresse: string
    numero_telephone: string
    email: string
    groupe_sanguin: string
    antecedents?: string | null
    allergies?: string | null
    commentaire?: string | null
    created_at?: Date | string
    Cree_par: string
    documents?: documentUncheckedCreateNestedManyWithoutClientInput
    factures?: factureUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutRendez_vousInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutRendez_vousInput, ClientUncheckedCreateWithoutRendez_vousInput>
  }

  export type UtilisateurCreateWithoutRendez_vousInput = {
    CIN: string
    nom: string
    prenom: string
    date_naissance: Date | string
    adresse: string
    numero_telephone: string
    email: string
    password: string
    role: $Enums.Role
    created_at?: Date | string
    clients?: ClientCreateNestedManyWithoutUtilisateurInput
    documentTemplates?: document_templatesCreateNestedManyWithoutUtilisateurInput
    documents?: documentCreateNestedManyWithoutUtilisateurInput
    biens?: bienCreateNestedManyWithoutUtilisateurInput
    factures?: factureCreateNestedManyWithoutUtilisateurInput
    factureBiens?: facture_bienCreateNestedManyWithoutUtilisateurInput
    paiements?: paimentCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateWithoutRendez_vousInput = {
    id?: number
    CIN: string
    nom: string
    prenom: string
    date_naissance: Date | string
    adresse: string
    numero_telephone: string
    email: string
    password: string
    role: $Enums.Role
    created_at?: Date | string
    clients?: ClientUncheckedCreateNestedManyWithoutUtilisateurInput
    documentTemplates?: document_templatesUncheckedCreateNestedManyWithoutUtilisateurInput
    documents?: documentUncheckedCreateNestedManyWithoutUtilisateurInput
    biens?: bienUncheckedCreateNestedManyWithoutUtilisateurInput
    factures?: factureUncheckedCreateNestedManyWithoutUtilisateurInput
    factureBiens?: facture_bienUncheckedCreateNestedManyWithoutUtilisateurInput
    paiements?: paimentUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurCreateOrConnectWithoutRendez_vousInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutRendez_vousInput, UtilisateurUncheckedCreateWithoutRendez_vousInput>
  }

  export type ClientUpsertWithoutRendez_vousInput = {
    update: XOR<ClientUpdateWithoutRendez_vousInput, ClientUncheckedUpdateWithoutRendez_vousInput>
    create: XOR<ClientCreateWithoutRendez_vousInput, ClientUncheckedCreateWithoutRendez_vousInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutRendez_vousInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutRendez_vousInput, ClientUncheckedUpdateWithoutRendez_vousInput>
  }

  export type ClientUpdateWithoutRendez_vousInput = {
    CIN?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    adresse?: StringFieldUpdateOperationsInput | string
    numero_telephone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    groupe_sanguin?: StringFieldUpdateOperationsInput | string
    antecedents?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutClientsNestedInput
    documents?: documentUpdateManyWithoutClientNestedInput
    factures?: factureUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutRendez_vousInput = {
    id?: IntFieldUpdateOperationsInput | number
    CIN?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    adresse?: StringFieldUpdateOperationsInput | string
    numero_telephone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    groupe_sanguin?: StringFieldUpdateOperationsInput | string
    antecedents?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Cree_par?: StringFieldUpdateOperationsInput | string
    documents?: documentUncheckedUpdateManyWithoutClientNestedInput
    factures?: factureUncheckedUpdateManyWithoutClientNestedInput
  }

  export type UtilisateurUpsertWithoutRendez_vousInput = {
    update: XOR<UtilisateurUpdateWithoutRendez_vousInput, UtilisateurUncheckedUpdateWithoutRendez_vousInput>
    create: XOR<UtilisateurCreateWithoutRendez_vousInput, UtilisateurUncheckedCreateWithoutRendez_vousInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutRendez_vousInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutRendez_vousInput, UtilisateurUncheckedUpdateWithoutRendez_vousInput>
  }

  export type UtilisateurUpdateWithoutRendez_vousInput = {
    CIN?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    adresse?: StringFieldUpdateOperationsInput | string
    numero_telephone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUpdateManyWithoutUtilisateurNestedInput
    documentTemplates?: document_templatesUpdateManyWithoutUtilisateurNestedInput
    documents?: documentUpdateManyWithoutUtilisateurNestedInput
    biens?: bienUpdateManyWithoutUtilisateurNestedInput
    factures?: factureUpdateManyWithoutUtilisateurNestedInput
    factureBiens?: facture_bienUpdateManyWithoutUtilisateurNestedInput
    paiements?: paimentUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutRendez_vousInput = {
    id?: IntFieldUpdateOperationsInput | number
    CIN?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    adresse?: StringFieldUpdateOperationsInput | string
    numero_telephone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUncheckedUpdateManyWithoutUtilisateurNestedInput
    documentTemplates?: document_templatesUncheckedUpdateManyWithoutUtilisateurNestedInput
    documents?: documentUncheckedUpdateManyWithoutUtilisateurNestedInput
    biens?: bienUncheckedUpdateManyWithoutUtilisateurNestedInput
    factures?: factureUncheckedUpdateManyWithoutUtilisateurNestedInput
    factureBiens?: facture_bienUncheckedUpdateManyWithoutUtilisateurNestedInput
    paiements?: paimentUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurCreateWithoutDocumentTemplatesInput = {
    CIN: string
    nom: string
    prenom: string
    date_naissance: Date | string
    adresse: string
    numero_telephone: string
    email: string
    password: string
    role: $Enums.Role
    created_at?: Date | string
    clients?: ClientCreateNestedManyWithoutUtilisateurInput
    rendez_vous?: rendez_vousCreateNestedManyWithoutUtilisateurInput
    documents?: documentCreateNestedManyWithoutUtilisateurInput
    biens?: bienCreateNestedManyWithoutUtilisateurInput
    factures?: factureCreateNestedManyWithoutUtilisateurInput
    factureBiens?: facture_bienCreateNestedManyWithoutUtilisateurInput
    paiements?: paimentCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateWithoutDocumentTemplatesInput = {
    id?: number
    CIN: string
    nom: string
    prenom: string
    date_naissance: Date | string
    adresse: string
    numero_telephone: string
    email: string
    password: string
    role: $Enums.Role
    created_at?: Date | string
    clients?: ClientUncheckedCreateNestedManyWithoutUtilisateurInput
    rendez_vous?: rendez_vousUncheckedCreateNestedManyWithoutUtilisateurInput
    documents?: documentUncheckedCreateNestedManyWithoutUtilisateurInput
    biens?: bienUncheckedCreateNestedManyWithoutUtilisateurInput
    factures?: factureUncheckedCreateNestedManyWithoutUtilisateurInput
    factureBiens?: facture_bienUncheckedCreateNestedManyWithoutUtilisateurInput
    paiements?: paimentUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurCreateOrConnectWithoutDocumentTemplatesInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutDocumentTemplatesInput, UtilisateurUncheckedCreateWithoutDocumentTemplatesInput>
  }

  export type documentCreateWithoutTemplateInput = {
    data_json: string
    client: ClientCreateNestedOneWithoutDocumentsInput
    utilisateur: UtilisateurCreateNestedOneWithoutDocumentsInput
  }

  export type documentUncheckedCreateWithoutTemplateInput = {
    id?: number
    CIN: string
    data_json: string
    Cree_par: string
  }

  export type documentCreateOrConnectWithoutTemplateInput = {
    where: documentWhereUniqueInput
    create: XOR<documentCreateWithoutTemplateInput, documentUncheckedCreateWithoutTemplateInput>
  }

  export type documentCreateManyTemplateInputEnvelope = {
    data: documentCreateManyTemplateInput | documentCreateManyTemplateInput[]
  }

  export type UtilisateurUpsertWithoutDocumentTemplatesInput = {
    update: XOR<UtilisateurUpdateWithoutDocumentTemplatesInput, UtilisateurUncheckedUpdateWithoutDocumentTemplatesInput>
    create: XOR<UtilisateurCreateWithoutDocumentTemplatesInput, UtilisateurUncheckedCreateWithoutDocumentTemplatesInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutDocumentTemplatesInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutDocumentTemplatesInput, UtilisateurUncheckedUpdateWithoutDocumentTemplatesInput>
  }

  export type UtilisateurUpdateWithoutDocumentTemplatesInput = {
    CIN?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    adresse?: StringFieldUpdateOperationsInput | string
    numero_telephone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUpdateManyWithoutUtilisateurNestedInput
    rendez_vous?: rendez_vousUpdateManyWithoutUtilisateurNestedInput
    documents?: documentUpdateManyWithoutUtilisateurNestedInput
    biens?: bienUpdateManyWithoutUtilisateurNestedInput
    factures?: factureUpdateManyWithoutUtilisateurNestedInput
    factureBiens?: facture_bienUpdateManyWithoutUtilisateurNestedInput
    paiements?: paimentUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutDocumentTemplatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    CIN?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    adresse?: StringFieldUpdateOperationsInput | string
    numero_telephone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUncheckedUpdateManyWithoutUtilisateurNestedInput
    rendez_vous?: rendez_vousUncheckedUpdateManyWithoutUtilisateurNestedInput
    documents?: documentUncheckedUpdateManyWithoutUtilisateurNestedInput
    biens?: bienUncheckedUpdateManyWithoutUtilisateurNestedInput
    factures?: factureUncheckedUpdateManyWithoutUtilisateurNestedInput
    factureBiens?: facture_bienUncheckedUpdateManyWithoutUtilisateurNestedInput
    paiements?: paimentUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type documentUpsertWithWhereUniqueWithoutTemplateInput = {
    where: documentWhereUniqueInput
    update: XOR<documentUpdateWithoutTemplateInput, documentUncheckedUpdateWithoutTemplateInput>
    create: XOR<documentCreateWithoutTemplateInput, documentUncheckedCreateWithoutTemplateInput>
  }

  export type documentUpdateWithWhereUniqueWithoutTemplateInput = {
    where: documentWhereUniqueInput
    data: XOR<documentUpdateWithoutTemplateInput, documentUncheckedUpdateWithoutTemplateInput>
  }

  export type documentUpdateManyWithWhereWithoutTemplateInput = {
    where: documentScalarWhereInput
    data: XOR<documentUpdateManyMutationInput, documentUncheckedUpdateManyWithoutTemplateInput>
  }

  export type document_templatesCreateWithoutDocumentsInput = {
    name: string
    sections_json: string
    utilisateur: UtilisateurCreateNestedOneWithoutDocumentTemplatesInput
  }

  export type document_templatesUncheckedCreateWithoutDocumentsInput = {
    id?: number
    name: string
    sections_json: string
    Cree_par: string
  }

  export type document_templatesCreateOrConnectWithoutDocumentsInput = {
    where: document_templatesWhereUniqueInput
    create: XOR<document_templatesCreateWithoutDocumentsInput, document_templatesUncheckedCreateWithoutDocumentsInput>
  }

  export type ClientCreateWithoutDocumentsInput = {
    CIN: string
    nom: string
    prenom: string
    date_naissance: Date | string
    adresse: string
    numero_telephone: string
    email: string
    groupe_sanguin: string
    antecedents?: string | null
    allergies?: string | null
    commentaire?: string | null
    created_at?: Date | string
    utilisateur: UtilisateurCreateNestedOneWithoutClientsInput
    rendez_vous?: rendez_vousCreateNestedManyWithoutClientInput
    factures?: factureCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutDocumentsInput = {
    id?: number
    CIN: string
    nom: string
    prenom: string
    date_naissance: Date | string
    adresse: string
    numero_telephone: string
    email: string
    groupe_sanguin: string
    antecedents?: string | null
    allergies?: string | null
    commentaire?: string | null
    created_at?: Date | string
    Cree_par: string
    rendez_vous?: rendez_vousUncheckedCreateNestedManyWithoutClientInput
    factures?: factureUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutDocumentsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutDocumentsInput, ClientUncheckedCreateWithoutDocumentsInput>
  }

  export type UtilisateurCreateWithoutDocumentsInput = {
    CIN: string
    nom: string
    prenom: string
    date_naissance: Date | string
    adresse: string
    numero_telephone: string
    email: string
    password: string
    role: $Enums.Role
    created_at?: Date | string
    clients?: ClientCreateNestedManyWithoutUtilisateurInput
    rendez_vous?: rendez_vousCreateNestedManyWithoutUtilisateurInput
    documentTemplates?: document_templatesCreateNestedManyWithoutUtilisateurInput
    biens?: bienCreateNestedManyWithoutUtilisateurInput
    factures?: factureCreateNestedManyWithoutUtilisateurInput
    factureBiens?: facture_bienCreateNestedManyWithoutUtilisateurInput
    paiements?: paimentCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateWithoutDocumentsInput = {
    id?: number
    CIN: string
    nom: string
    prenom: string
    date_naissance: Date | string
    adresse: string
    numero_telephone: string
    email: string
    password: string
    role: $Enums.Role
    created_at?: Date | string
    clients?: ClientUncheckedCreateNestedManyWithoutUtilisateurInput
    rendez_vous?: rendez_vousUncheckedCreateNestedManyWithoutUtilisateurInput
    documentTemplates?: document_templatesUncheckedCreateNestedManyWithoutUtilisateurInput
    biens?: bienUncheckedCreateNestedManyWithoutUtilisateurInput
    factures?: factureUncheckedCreateNestedManyWithoutUtilisateurInput
    factureBiens?: facture_bienUncheckedCreateNestedManyWithoutUtilisateurInput
    paiements?: paimentUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurCreateOrConnectWithoutDocumentsInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutDocumentsInput, UtilisateurUncheckedCreateWithoutDocumentsInput>
  }

  export type document_templatesUpsertWithoutDocumentsInput = {
    update: XOR<document_templatesUpdateWithoutDocumentsInput, document_templatesUncheckedUpdateWithoutDocumentsInput>
    create: XOR<document_templatesCreateWithoutDocumentsInput, document_templatesUncheckedCreateWithoutDocumentsInput>
    where?: document_templatesWhereInput
  }

  export type document_templatesUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: document_templatesWhereInput
    data: XOR<document_templatesUpdateWithoutDocumentsInput, document_templatesUncheckedUpdateWithoutDocumentsInput>
  }

  export type document_templatesUpdateWithoutDocumentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    sections_json?: StringFieldUpdateOperationsInput | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutDocumentTemplatesNestedInput
  }

  export type document_templatesUncheckedUpdateWithoutDocumentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sections_json?: StringFieldUpdateOperationsInput | string
    Cree_par?: StringFieldUpdateOperationsInput | string
  }

  export type ClientUpsertWithoutDocumentsInput = {
    update: XOR<ClientUpdateWithoutDocumentsInput, ClientUncheckedUpdateWithoutDocumentsInput>
    create: XOR<ClientCreateWithoutDocumentsInput, ClientUncheckedCreateWithoutDocumentsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutDocumentsInput, ClientUncheckedUpdateWithoutDocumentsInput>
  }

  export type ClientUpdateWithoutDocumentsInput = {
    CIN?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    adresse?: StringFieldUpdateOperationsInput | string
    numero_telephone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    groupe_sanguin?: StringFieldUpdateOperationsInput | string
    antecedents?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutClientsNestedInput
    rendez_vous?: rendez_vousUpdateManyWithoutClientNestedInput
    factures?: factureUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutDocumentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    CIN?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    adresse?: StringFieldUpdateOperationsInput | string
    numero_telephone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    groupe_sanguin?: StringFieldUpdateOperationsInput | string
    antecedents?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Cree_par?: StringFieldUpdateOperationsInput | string
    rendez_vous?: rendez_vousUncheckedUpdateManyWithoutClientNestedInput
    factures?: factureUncheckedUpdateManyWithoutClientNestedInput
  }

  export type UtilisateurUpsertWithoutDocumentsInput = {
    update: XOR<UtilisateurUpdateWithoutDocumentsInput, UtilisateurUncheckedUpdateWithoutDocumentsInput>
    create: XOR<UtilisateurCreateWithoutDocumentsInput, UtilisateurUncheckedCreateWithoutDocumentsInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutDocumentsInput, UtilisateurUncheckedUpdateWithoutDocumentsInput>
  }

  export type UtilisateurUpdateWithoutDocumentsInput = {
    CIN?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    adresse?: StringFieldUpdateOperationsInput | string
    numero_telephone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUpdateManyWithoutUtilisateurNestedInput
    rendez_vous?: rendez_vousUpdateManyWithoutUtilisateurNestedInput
    documentTemplates?: document_templatesUpdateManyWithoutUtilisateurNestedInput
    biens?: bienUpdateManyWithoutUtilisateurNestedInput
    factures?: factureUpdateManyWithoutUtilisateurNestedInput
    factureBiens?: facture_bienUpdateManyWithoutUtilisateurNestedInput
    paiements?: paimentUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutDocumentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    CIN?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    adresse?: StringFieldUpdateOperationsInput | string
    numero_telephone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUncheckedUpdateManyWithoutUtilisateurNestedInput
    rendez_vous?: rendez_vousUncheckedUpdateManyWithoutUtilisateurNestedInput
    documentTemplates?: document_templatesUncheckedUpdateManyWithoutUtilisateurNestedInput
    biens?: bienUncheckedUpdateManyWithoutUtilisateurNestedInput
    factures?: factureUncheckedUpdateManyWithoutUtilisateurNestedInput
    factureBiens?: facture_bienUncheckedUpdateManyWithoutUtilisateurNestedInput
    paiements?: paimentUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurCreateWithoutBiensInput = {
    CIN: string
    nom: string
    prenom: string
    date_naissance: Date | string
    adresse: string
    numero_telephone: string
    email: string
    password: string
    role: $Enums.Role
    created_at?: Date | string
    clients?: ClientCreateNestedManyWithoutUtilisateurInput
    rendez_vous?: rendez_vousCreateNestedManyWithoutUtilisateurInput
    documentTemplates?: document_templatesCreateNestedManyWithoutUtilisateurInput
    documents?: documentCreateNestedManyWithoutUtilisateurInput
    factures?: factureCreateNestedManyWithoutUtilisateurInput
    factureBiens?: facture_bienCreateNestedManyWithoutUtilisateurInput
    paiements?: paimentCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateWithoutBiensInput = {
    id?: number
    CIN: string
    nom: string
    prenom: string
    date_naissance: Date | string
    adresse: string
    numero_telephone: string
    email: string
    password: string
    role: $Enums.Role
    created_at?: Date | string
    clients?: ClientUncheckedCreateNestedManyWithoutUtilisateurInput
    rendez_vous?: rendez_vousUncheckedCreateNestedManyWithoutUtilisateurInput
    documentTemplates?: document_templatesUncheckedCreateNestedManyWithoutUtilisateurInput
    documents?: documentUncheckedCreateNestedManyWithoutUtilisateurInput
    factures?: factureUncheckedCreateNestedManyWithoutUtilisateurInput
    factureBiens?: facture_bienUncheckedCreateNestedManyWithoutUtilisateurInput
    paiements?: paimentUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurCreateOrConnectWithoutBiensInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutBiensInput, UtilisateurUncheckedCreateWithoutBiensInput>
  }

  export type facture_bienCreateWithoutBienInput = {
    type_bien: $Enums.BienType
    quantite: number
    facture: factureCreateNestedOneWithoutFactureBiensInput
    utilisateur: UtilisateurCreateNestedOneWithoutFactureBiensInput
  }

  export type facture_bienUncheckedCreateWithoutBienInput = {
    id?: number
    id_facture: number
    type_bien: $Enums.BienType
    quantite: number
    Cree_par: string
  }

  export type facture_bienCreateOrConnectWithoutBienInput = {
    where: facture_bienWhereUniqueInput
    create: XOR<facture_bienCreateWithoutBienInput, facture_bienUncheckedCreateWithoutBienInput>
  }

  export type facture_bienCreateManyBienInputEnvelope = {
    data: facture_bienCreateManyBienInput | facture_bienCreateManyBienInput[]
  }

  export type UtilisateurUpsertWithoutBiensInput = {
    update: XOR<UtilisateurUpdateWithoutBiensInput, UtilisateurUncheckedUpdateWithoutBiensInput>
    create: XOR<UtilisateurCreateWithoutBiensInput, UtilisateurUncheckedCreateWithoutBiensInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutBiensInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutBiensInput, UtilisateurUncheckedUpdateWithoutBiensInput>
  }

  export type UtilisateurUpdateWithoutBiensInput = {
    CIN?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    adresse?: StringFieldUpdateOperationsInput | string
    numero_telephone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUpdateManyWithoutUtilisateurNestedInput
    rendez_vous?: rendez_vousUpdateManyWithoutUtilisateurNestedInput
    documentTemplates?: document_templatesUpdateManyWithoutUtilisateurNestedInput
    documents?: documentUpdateManyWithoutUtilisateurNestedInput
    factures?: factureUpdateManyWithoutUtilisateurNestedInput
    factureBiens?: facture_bienUpdateManyWithoutUtilisateurNestedInput
    paiements?: paimentUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutBiensInput = {
    id?: IntFieldUpdateOperationsInput | number
    CIN?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    adresse?: StringFieldUpdateOperationsInput | string
    numero_telephone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUncheckedUpdateManyWithoutUtilisateurNestedInput
    rendez_vous?: rendez_vousUncheckedUpdateManyWithoutUtilisateurNestedInput
    documentTemplates?: document_templatesUncheckedUpdateManyWithoutUtilisateurNestedInput
    documents?: documentUncheckedUpdateManyWithoutUtilisateurNestedInput
    factures?: factureUncheckedUpdateManyWithoutUtilisateurNestedInput
    factureBiens?: facture_bienUncheckedUpdateManyWithoutUtilisateurNestedInput
    paiements?: paimentUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type facture_bienUpsertWithWhereUniqueWithoutBienInput = {
    where: facture_bienWhereUniqueInput
    update: XOR<facture_bienUpdateWithoutBienInput, facture_bienUncheckedUpdateWithoutBienInput>
    create: XOR<facture_bienCreateWithoutBienInput, facture_bienUncheckedCreateWithoutBienInput>
  }

  export type facture_bienUpdateWithWhereUniqueWithoutBienInput = {
    where: facture_bienWhereUniqueInput
    data: XOR<facture_bienUpdateWithoutBienInput, facture_bienUncheckedUpdateWithoutBienInput>
  }

  export type facture_bienUpdateManyWithWhereWithoutBienInput = {
    where: facture_bienScalarWhereInput
    data: XOR<facture_bienUpdateManyMutationInput, facture_bienUncheckedUpdateManyWithoutBienInput>
  }

  export type ClientCreateWithoutFacturesInput = {
    CIN: string
    nom: string
    prenom: string
    date_naissance: Date | string
    adresse: string
    numero_telephone: string
    email: string
    groupe_sanguin: string
    antecedents?: string | null
    allergies?: string | null
    commentaire?: string | null
    created_at?: Date | string
    utilisateur: UtilisateurCreateNestedOneWithoutClientsInput
    rendez_vous?: rendez_vousCreateNestedManyWithoutClientInput
    documents?: documentCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutFacturesInput = {
    id?: number
    CIN: string
    nom: string
    prenom: string
    date_naissance: Date | string
    adresse: string
    numero_telephone: string
    email: string
    groupe_sanguin: string
    antecedents?: string | null
    allergies?: string | null
    commentaire?: string | null
    created_at?: Date | string
    Cree_par: string
    rendez_vous?: rendez_vousUncheckedCreateNestedManyWithoutClientInput
    documents?: documentUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutFacturesInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutFacturesInput, ClientUncheckedCreateWithoutFacturesInput>
  }

  export type UtilisateurCreateWithoutFacturesInput = {
    CIN: string
    nom: string
    prenom: string
    date_naissance: Date | string
    adresse: string
    numero_telephone: string
    email: string
    password: string
    role: $Enums.Role
    created_at?: Date | string
    clients?: ClientCreateNestedManyWithoutUtilisateurInput
    rendez_vous?: rendez_vousCreateNestedManyWithoutUtilisateurInput
    documentTemplates?: document_templatesCreateNestedManyWithoutUtilisateurInput
    documents?: documentCreateNestedManyWithoutUtilisateurInput
    biens?: bienCreateNestedManyWithoutUtilisateurInput
    factureBiens?: facture_bienCreateNestedManyWithoutUtilisateurInput
    paiements?: paimentCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateWithoutFacturesInput = {
    id?: number
    CIN: string
    nom: string
    prenom: string
    date_naissance: Date | string
    adresse: string
    numero_telephone: string
    email: string
    password: string
    role: $Enums.Role
    created_at?: Date | string
    clients?: ClientUncheckedCreateNestedManyWithoutUtilisateurInput
    rendez_vous?: rendez_vousUncheckedCreateNestedManyWithoutUtilisateurInput
    documentTemplates?: document_templatesUncheckedCreateNestedManyWithoutUtilisateurInput
    documents?: documentUncheckedCreateNestedManyWithoutUtilisateurInput
    biens?: bienUncheckedCreateNestedManyWithoutUtilisateurInput
    factureBiens?: facture_bienUncheckedCreateNestedManyWithoutUtilisateurInput
    paiements?: paimentUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurCreateOrConnectWithoutFacturesInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutFacturesInput, UtilisateurUncheckedCreateWithoutFacturesInput>
  }

  export type facture_bienCreateWithoutFactureInput = {
    type_bien: $Enums.BienType
    quantite: number
    bien: bienCreateNestedOneWithoutFactureBiensInput
    utilisateur: UtilisateurCreateNestedOneWithoutFactureBiensInput
  }

  export type facture_bienUncheckedCreateWithoutFactureInput = {
    id?: number
    id_bien: number
    type_bien: $Enums.BienType
    quantite: number
    Cree_par: string
  }

  export type facture_bienCreateOrConnectWithoutFactureInput = {
    where: facture_bienWhereUniqueInput
    create: XOR<facture_bienCreateWithoutFactureInput, facture_bienUncheckedCreateWithoutFactureInput>
  }

  export type facture_bienCreateManyFactureInputEnvelope = {
    data: facture_bienCreateManyFactureInput | facture_bienCreateManyFactureInput[]
  }

  export type paimentCreateWithoutFactureInput = {
    date: Date | string
    montant_totale: number
    utilisateur: UtilisateurCreateNestedOneWithoutPaiementsInput
  }

  export type paimentUncheckedCreateWithoutFactureInput = {
    id?: number
    date: Date | string
    montant_totale: number
    Cree_par: string
  }

  export type paimentCreateOrConnectWithoutFactureInput = {
    where: paimentWhereUniqueInput
    create: XOR<paimentCreateWithoutFactureInput, paimentUncheckedCreateWithoutFactureInput>
  }

  export type paimentCreateManyFactureInputEnvelope = {
    data: paimentCreateManyFactureInput | paimentCreateManyFactureInput[]
  }

  export type ClientUpsertWithoutFacturesInput = {
    update: XOR<ClientUpdateWithoutFacturesInput, ClientUncheckedUpdateWithoutFacturesInput>
    create: XOR<ClientCreateWithoutFacturesInput, ClientUncheckedCreateWithoutFacturesInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutFacturesInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutFacturesInput, ClientUncheckedUpdateWithoutFacturesInput>
  }

  export type ClientUpdateWithoutFacturesInput = {
    CIN?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    adresse?: StringFieldUpdateOperationsInput | string
    numero_telephone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    groupe_sanguin?: StringFieldUpdateOperationsInput | string
    antecedents?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutClientsNestedInput
    rendez_vous?: rendez_vousUpdateManyWithoutClientNestedInput
    documents?: documentUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutFacturesInput = {
    id?: IntFieldUpdateOperationsInput | number
    CIN?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    adresse?: StringFieldUpdateOperationsInput | string
    numero_telephone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    groupe_sanguin?: StringFieldUpdateOperationsInput | string
    antecedents?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Cree_par?: StringFieldUpdateOperationsInput | string
    rendez_vous?: rendez_vousUncheckedUpdateManyWithoutClientNestedInput
    documents?: documentUncheckedUpdateManyWithoutClientNestedInput
  }

  export type UtilisateurUpsertWithoutFacturesInput = {
    update: XOR<UtilisateurUpdateWithoutFacturesInput, UtilisateurUncheckedUpdateWithoutFacturesInput>
    create: XOR<UtilisateurCreateWithoutFacturesInput, UtilisateurUncheckedCreateWithoutFacturesInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutFacturesInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutFacturesInput, UtilisateurUncheckedUpdateWithoutFacturesInput>
  }

  export type UtilisateurUpdateWithoutFacturesInput = {
    CIN?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    adresse?: StringFieldUpdateOperationsInput | string
    numero_telephone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUpdateManyWithoutUtilisateurNestedInput
    rendez_vous?: rendez_vousUpdateManyWithoutUtilisateurNestedInput
    documentTemplates?: document_templatesUpdateManyWithoutUtilisateurNestedInput
    documents?: documentUpdateManyWithoutUtilisateurNestedInput
    biens?: bienUpdateManyWithoutUtilisateurNestedInput
    factureBiens?: facture_bienUpdateManyWithoutUtilisateurNestedInput
    paiements?: paimentUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutFacturesInput = {
    id?: IntFieldUpdateOperationsInput | number
    CIN?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    adresse?: StringFieldUpdateOperationsInput | string
    numero_telephone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUncheckedUpdateManyWithoutUtilisateurNestedInput
    rendez_vous?: rendez_vousUncheckedUpdateManyWithoutUtilisateurNestedInput
    documentTemplates?: document_templatesUncheckedUpdateManyWithoutUtilisateurNestedInput
    documents?: documentUncheckedUpdateManyWithoutUtilisateurNestedInput
    biens?: bienUncheckedUpdateManyWithoutUtilisateurNestedInput
    factureBiens?: facture_bienUncheckedUpdateManyWithoutUtilisateurNestedInput
    paiements?: paimentUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type facture_bienUpsertWithWhereUniqueWithoutFactureInput = {
    where: facture_bienWhereUniqueInput
    update: XOR<facture_bienUpdateWithoutFactureInput, facture_bienUncheckedUpdateWithoutFactureInput>
    create: XOR<facture_bienCreateWithoutFactureInput, facture_bienUncheckedCreateWithoutFactureInput>
  }

  export type facture_bienUpdateWithWhereUniqueWithoutFactureInput = {
    where: facture_bienWhereUniqueInput
    data: XOR<facture_bienUpdateWithoutFactureInput, facture_bienUncheckedUpdateWithoutFactureInput>
  }

  export type facture_bienUpdateManyWithWhereWithoutFactureInput = {
    where: facture_bienScalarWhereInput
    data: XOR<facture_bienUpdateManyMutationInput, facture_bienUncheckedUpdateManyWithoutFactureInput>
  }

  export type paimentUpsertWithWhereUniqueWithoutFactureInput = {
    where: paimentWhereUniqueInput
    update: XOR<paimentUpdateWithoutFactureInput, paimentUncheckedUpdateWithoutFactureInput>
    create: XOR<paimentCreateWithoutFactureInput, paimentUncheckedCreateWithoutFactureInput>
  }

  export type paimentUpdateWithWhereUniqueWithoutFactureInput = {
    where: paimentWhereUniqueInput
    data: XOR<paimentUpdateWithoutFactureInput, paimentUncheckedUpdateWithoutFactureInput>
  }

  export type paimentUpdateManyWithWhereWithoutFactureInput = {
    where: paimentScalarWhereInput
    data: XOR<paimentUpdateManyMutationInput, paimentUncheckedUpdateManyWithoutFactureInput>
  }

  export type factureCreateWithoutFactureBiensInput = {
    date: Date | string
    prix_total: number
    statut: $Enums.FactureStatus
    notes?: string | null
    client: ClientCreateNestedOneWithoutFacturesInput
    utilisateur: UtilisateurCreateNestedOneWithoutFacturesInput
    paiements?: paimentCreateNestedManyWithoutFactureInput
  }

  export type factureUncheckedCreateWithoutFactureBiensInput = {
    id?: number
    CIN: string
    date: Date | string
    prix_total: number
    statut: $Enums.FactureStatus
    notes?: string | null
    Cree_par: string
    paiements?: paimentUncheckedCreateNestedManyWithoutFactureInput
  }

  export type factureCreateOrConnectWithoutFactureBiensInput = {
    where: factureWhereUniqueInput
    create: XOR<factureCreateWithoutFactureBiensInput, factureUncheckedCreateWithoutFactureBiensInput>
  }

  export type bienCreateWithoutFactureBiensInput = {
    Nom: string
    bien_type: $Enums.BienType
    Type: $Enums.ServiceType
    prix: number
    stock: number
    utilisateur: UtilisateurCreateNestedOneWithoutBiensInput
  }

  export type bienUncheckedCreateWithoutFactureBiensInput = {
    id?: number
    Nom: string
    bien_type: $Enums.BienType
    Type: $Enums.ServiceType
    prix: number
    stock: number
    Cree_par: string
  }

  export type bienCreateOrConnectWithoutFactureBiensInput = {
    where: bienWhereUniqueInput
    create: XOR<bienCreateWithoutFactureBiensInput, bienUncheckedCreateWithoutFactureBiensInput>
  }

  export type UtilisateurCreateWithoutFactureBiensInput = {
    CIN: string
    nom: string
    prenom: string
    date_naissance: Date | string
    adresse: string
    numero_telephone: string
    email: string
    password: string
    role: $Enums.Role
    created_at?: Date | string
    clients?: ClientCreateNestedManyWithoutUtilisateurInput
    rendez_vous?: rendez_vousCreateNestedManyWithoutUtilisateurInput
    documentTemplates?: document_templatesCreateNestedManyWithoutUtilisateurInput
    documents?: documentCreateNestedManyWithoutUtilisateurInput
    biens?: bienCreateNestedManyWithoutUtilisateurInput
    factures?: factureCreateNestedManyWithoutUtilisateurInput
    paiements?: paimentCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateWithoutFactureBiensInput = {
    id?: number
    CIN: string
    nom: string
    prenom: string
    date_naissance: Date | string
    adresse: string
    numero_telephone: string
    email: string
    password: string
    role: $Enums.Role
    created_at?: Date | string
    clients?: ClientUncheckedCreateNestedManyWithoutUtilisateurInput
    rendez_vous?: rendez_vousUncheckedCreateNestedManyWithoutUtilisateurInput
    documentTemplates?: document_templatesUncheckedCreateNestedManyWithoutUtilisateurInput
    documents?: documentUncheckedCreateNestedManyWithoutUtilisateurInput
    biens?: bienUncheckedCreateNestedManyWithoutUtilisateurInput
    factures?: factureUncheckedCreateNestedManyWithoutUtilisateurInput
    paiements?: paimentUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurCreateOrConnectWithoutFactureBiensInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutFactureBiensInput, UtilisateurUncheckedCreateWithoutFactureBiensInput>
  }

  export type factureUpsertWithoutFactureBiensInput = {
    update: XOR<factureUpdateWithoutFactureBiensInput, factureUncheckedUpdateWithoutFactureBiensInput>
    create: XOR<factureCreateWithoutFactureBiensInput, factureUncheckedCreateWithoutFactureBiensInput>
    where?: factureWhereInput
  }

  export type factureUpdateToOneWithWhereWithoutFactureBiensInput = {
    where?: factureWhereInput
    data: XOR<factureUpdateWithoutFactureBiensInput, factureUncheckedUpdateWithoutFactureBiensInput>
  }

  export type factureUpdateWithoutFactureBiensInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    prix_total?: FloatFieldUpdateOperationsInput | number
    statut?: EnumFactureStatusFieldUpdateOperationsInput | $Enums.FactureStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    client?: ClientUpdateOneRequiredWithoutFacturesNestedInput
    utilisateur?: UtilisateurUpdateOneRequiredWithoutFacturesNestedInput
    paiements?: paimentUpdateManyWithoutFactureNestedInput
  }

  export type factureUncheckedUpdateWithoutFactureBiensInput = {
    id?: IntFieldUpdateOperationsInput | number
    CIN?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    prix_total?: FloatFieldUpdateOperationsInput | number
    statut?: EnumFactureStatusFieldUpdateOperationsInput | $Enums.FactureStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    Cree_par?: StringFieldUpdateOperationsInput | string
    paiements?: paimentUncheckedUpdateManyWithoutFactureNestedInput
  }

  export type bienUpsertWithoutFactureBiensInput = {
    update: XOR<bienUpdateWithoutFactureBiensInput, bienUncheckedUpdateWithoutFactureBiensInput>
    create: XOR<bienCreateWithoutFactureBiensInput, bienUncheckedCreateWithoutFactureBiensInput>
    where?: bienWhereInput
  }

  export type bienUpdateToOneWithWhereWithoutFactureBiensInput = {
    where?: bienWhereInput
    data: XOR<bienUpdateWithoutFactureBiensInput, bienUncheckedUpdateWithoutFactureBiensInput>
  }

  export type bienUpdateWithoutFactureBiensInput = {
    Nom?: StringFieldUpdateOperationsInput | string
    bien_type?: EnumBienTypeFieldUpdateOperationsInput | $Enums.BienType
    Type?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    prix?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    utilisateur?: UtilisateurUpdateOneRequiredWithoutBiensNestedInput
  }

  export type bienUncheckedUpdateWithoutFactureBiensInput = {
    id?: IntFieldUpdateOperationsInput | number
    Nom?: StringFieldUpdateOperationsInput | string
    bien_type?: EnumBienTypeFieldUpdateOperationsInput | $Enums.BienType
    Type?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    prix?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    Cree_par?: StringFieldUpdateOperationsInput | string
  }

  export type UtilisateurUpsertWithoutFactureBiensInput = {
    update: XOR<UtilisateurUpdateWithoutFactureBiensInput, UtilisateurUncheckedUpdateWithoutFactureBiensInput>
    create: XOR<UtilisateurCreateWithoutFactureBiensInput, UtilisateurUncheckedCreateWithoutFactureBiensInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutFactureBiensInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutFactureBiensInput, UtilisateurUncheckedUpdateWithoutFactureBiensInput>
  }

  export type UtilisateurUpdateWithoutFactureBiensInput = {
    CIN?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    adresse?: StringFieldUpdateOperationsInput | string
    numero_telephone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUpdateManyWithoutUtilisateurNestedInput
    rendez_vous?: rendez_vousUpdateManyWithoutUtilisateurNestedInput
    documentTemplates?: document_templatesUpdateManyWithoutUtilisateurNestedInput
    documents?: documentUpdateManyWithoutUtilisateurNestedInput
    biens?: bienUpdateManyWithoutUtilisateurNestedInput
    factures?: factureUpdateManyWithoutUtilisateurNestedInput
    paiements?: paimentUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutFactureBiensInput = {
    id?: IntFieldUpdateOperationsInput | number
    CIN?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    adresse?: StringFieldUpdateOperationsInput | string
    numero_telephone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUncheckedUpdateManyWithoutUtilisateurNestedInput
    rendez_vous?: rendez_vousUncheckedUpdateManyWithoutUtilisateurNestedInput
    documentTemplates?: document_templatesUncheckedUpdateManyWithoutUtilisateurNestedInput
    documents?: documentUncheckedUpdateManyWithoutUtilisateurNestedInput
    biens?: bienUncheckedUpdateManyWithoutUtilisateurNestedInput
    factures?: factureUncheckedUpdateManyWithoutUtilisateurNestedInput
    paiements?: paimentUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type factureCreateWithoutPaiementsInput = {
    date: Date | string
    prix_total: number
    statut: $Enums.FactureStatus
    notes?: string | null
    client: ClientCreateNestedOneWithoutFacturesInput
    utilisateur: UtilisateurCreateNestedOneWithoutFacturesInput
    factureBiens?: facture_bienCreateNestedManyWithoutFactureInput
  }

  export type factureUncheckedCreateWithoutPaiementsInput = {
    id?: number
    CIN: string
    date: Date | string
    prix_total: number
    statut: $Enums.FactureStatus
    notes?: string | null
    Cree_par: string
    factureBiens?: facture_bienUncheckedCreateNestedManyWithoutFactureInput
  }

  export type factureCreateOrConnectWithoutPaiementsInput = {
    where: factureWhereUniqueInput
    create: XOR<factureCreateWithoutPaiementsInput, factureUncheckedCreateWithoutPaiementsInput>
  }

  export type UtilisateurCreateWithoutPaiementsInput = {
    CIN: string
    nom: string
    prenom: string
    date_naissance: Date | string
    adresse: string
    numero_telephone: string
    email: string
    password: string
    role: $Enums.Role
    created_at?: Date | string
    clients?: ClientCreateNestedManyWithoutUtilisateurInput
    rendez_vous?: rendez_vousCreateNestedManyWithoutUtilisateurInput
    documentTemplates?: document_templatesCreateNestedManyWithoutUtilisateurInput
    documents?: documentCreateNestedManyWithoutUtilisateurInput
    biens?: bienCreateNestedManyWithoutUtilisateurInput
    factures?: factureCreateNestedManyWithoutUtilisateurInput
    factureBiens?: facture_bienCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateWithoutPaiementsInput = {
    id?: number
    CIN: string
    nom: string
    prenom: string
    date_naissance: Date | string
    adresse: string
    numero_telephone: string
    email: string
    password: string
    role: $Enums.Role
    created_at?: Date | string
    clients?: ClientUncheckedCreateNestedManyWithoutUtilisateurInput
    rendez_vous?: rendez_vousUncheckedCreateNestedManyWithoutUtilisateurInput
    documentTemplates?: document_templatesUncheckedCreateNestedManyWithoutUtilisateurInput
    documents?: documentUncheckedCreateNestedManyWithoutUtilisateurInput
    biens?: bienUncheckedCreateNestedManyWithoutUtilisateurInput
    factures?: factureUncheckedCreateNestedManyWithoutUtilisateurInput
    factureBiens?: facture_bienUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurCreateOrConnectWithoutPaiementsInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutPaiementsInput, UtilisateurUncheckedCreateWithoutPaiementsInput>
  }

  export type factureUpsertWithoutPaiementsInput = {
    update: XOR<factureUpdateWithoutPaiementsInput, factureUncheckedUpdateWithoutPaiementsInput>
    create: XOR<factureCreateWithoutPaiementsInput, factureUncheckedCreateWithoutPaiementsInput>
    where?: factureWhereInput
  }

  export type factureUpdateToOneWithWhereWithoutPaiementsInput = {
    where?: factureWhereInput
    data: XOR<factureUpdateWithoutPaiementsInput, factureUncheckedUpdateWithoutPaiementsInput>
  }

  export type factureUpdateWithoutPaiementsInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    prix_total?: FloatFieldUpdateOperationsInput | number
    statut?: EnumFactureStatusFieldUpdateOperationsInput | $Enums.FactureStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    client?: ClientUpdateOneRequiredWithoutFacturesNestedInput
    utilisateur?: UtilisateurUpdateOneRequiredWithoutFacturesNestedInput
    factureBiens?: facture_bienUpdateManyWithoutFactureNestedInput
  }

  export type factureUncheckedUpdateWithoutPaiementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    CIN?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    prix_total?: FloatFieldUpdateOperationsInput | number
    statut?: EnumFactureStatusFieldUpdateOperationsInput | $Enums.FactureStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    Cree_par?: StringFieldUpdateOperationsInput | string
    factureBiens?: facture_bienUncheckedUpdateManyWithoutFactureNestedInput
  }

  export type UtilisateurUpsertWithoutPaiementsInput = {
    update: XOR<UtilisateurUpdateWithoutPaiementsInput, UtilisateurUncheckedUpdateWithoutPaiementsInput>
    create: XOR<UtilisateurCreateWithoutPaiementsInput, UtilisateurUncheckedCreateWithoutPaiementsInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutPaiementsInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutPaiementsInput, UtilisateurUncheckedUpdateWithoutPaiementsInput>
  }

  export type UtilisateurUpdateWithoutPaiementsInput = {
    CIN?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    adresse?: StringFieldUpdateOperationsInput | string
    numero_telephone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUpdateManyWithoutUtilisateurNestedInput
    rendez_vous?: rendez_vousUpdateManyWithoutUtilisateurNestedInput
    documentTemplates?: document_templatesUpdateManyWithoutUtilisateurNestedInput
    documents?: documentUpdateManyWithoutUtilisateurNestedInput
    biens?: bienUpdateManyWithoutUtilisateurNestedInput
    factures?: factureUpdateManyWithoutUtilisateurNestedInput
    factureBiens?: facture_bienUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutPaiementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    CIN?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    adresse?: StringFieldUpdateOperationsInput | string
    numero_telephone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUncheckedUpdateManyWithoutUtilisateurNestedInput
    rendez_vous?: rendez_vousUncheckedUpdateManyWithoutUtilisateurNestedInput
    documentTemplates?: document_templatesUncheckedUpdateManyWithoutUtilisateurNestedInput
    documents?: documentUncheckedUpdateManyWithoutUtilisateurNestedInput
    biens?: bienUncheckedUpdateManyWithoutUtilisateurNestedInput
    factures?: factureUncheckedUpdateManyWithoutUtilisateurNestedInput
    factureBiens?: facture_bienUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type ClientCreateManyUtilisateurInput = {
    id?: number
    CIN: string
    nom: string
    prenom: string
    date_naissance: Date | string
    adresse: string
    numero_telephone: string
    email: string
    groupe_sanguin: string
    antecedents?: string | null
    allergies?: string | null
    commentaire?: string | null
    created_at?: Date | string
  }

  export type rendez_vousCreateManyUtilisateurInput = {
    id?: number
    CIN: string
    sujet: string
    date_rendez_vous: Date | string
    created_at?: Date | string
  }

  export type document_templatesCreateManyUtilisateurInput = {
    id?: number
    name: string
    sections_json: string
  }

  export type documentCreateManyUtilisateurInput = {
    id?: number
    template_id: number
    CIN: string
    data_json: string
  }

  export type bienCreateManyUtilisateurInput = {
    id?: number
    Nom: string
    bien_type: $Enums.BienType
    Type: $Enums.ServiceType
    prix: number
    stock: number
  }

  export type factureCreateManyUtilisateurInput = {
    id?: number
    CIN: string
    date: Date | string
    prix_total: number
    statut: $Enums.FactureStatus
    notes?: string | null
  }

  export type facture_bienCreateManyUtilisateurInput = {
    id?: number
    id_facture: number
    id_bien: number
    type_bien: $Enums.BienType
    quantite: number
  }

  export type paimentCreateManyUtilisateurInput = {
    id?: number
    id_facture: number
    date: Date | string
    montant_totale: number
  }

  export type ClientUpdateWithoutUtilisateurInput = {
    CIN?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    adresse?: StringFieldUpdateOperationsInput | string
    numero_telephone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    groupe_sanguin?: StringFieldUpdateOperationsInput | string
    antecedents?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rendez_vous?: rendez_vousUpdateManyWithoutClientNestedInput
    documents?: documentUpdateManyWithoutClientNestedInput
    factures?: factureUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    CIN?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    adresse?: StringFieldUpdateOperationsInput | string
    numero_telephone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    groupe_sanguin?: StringFieldUpdateOperationsInput | string
    antecedents?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rendez_vous?: rendez_vousUncheckedUpdateManyWithoutClientNestedInput
    documents?: documentUncheckedUpdateManyWithoutClientNestedInput
    factures?: factureUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    CIN?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    date_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    adresse?: StringFieldUpdateOperationsInput | string
    numero_telephone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    groupe_sanguin?: StringFieldUpdateOperationsInput | string
    antecedents?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rendez_vousUpdateWithoutUtilisateurInput = {
    sujet?: StringFieldUpdateOperationsInput | string
    date_rendez_vous?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutRendez_vousNestedInput
  }

  export type rendez_vousUncheckedUpdateWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    CIN?: StringFieldUpdateOperationsInput | string
    sujet?: StringFieldUpdateOperationsInput | string
    date_rendez_vous?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rendez_vousUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    CIN?: StringFieldUpdateOperationsInput | string
    sujet?: StringFieldUpdateOperationsInput | string
    date_rendez_vous?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type document_templatesUpdateWithoutUtilisateurInput = {
    name?: StringFieldUpdateOperationsInput | string
    sections_json?: StringFieldUpdateOperationsInput | string
    documents?: documentUpdateManyWithoutTemplateNestedInput
  }

  export type document_templatesUncheckedUpdateWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sections_json?: StringFieldUpdateOperationsInput | string
    documents?: documentUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type document_templatesUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sections_json?: StringFieldUpdateOperationsInput | string
  }

  export type documentUpdateWithoutUtilisateurInput = {
    data_json?: StringFieldUpdateOperationsInput | string
    template?: document_templatesUpdateOneRequiredWithoutDocumentsNestedInput
    client?: ClientUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type documentUncheckedUpdateWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    template_id?: IntFieldUpdateOperationsInput | number
    CIN?: StringFieldUpdateOperationsInput | string
    data_json?: StringFieldUpdateOperationsInput | string
  }

  export type documentUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    template_id?: IntFieldUpdateOperationsInput | number
    CIN?: StringFieldUpdateOperationsInput | string
    data_json?: StringFieldUpdateOperationsInput | string
  }

  export type bienUpdateWithoutUtilisateurInput = {
    Nom?: StringFieldUpdateOperationsInput | string
    bien_type?: EnumBienTypeFieldUpdateOperationsInput | $Enums.BienType
    Type?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    prix?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    factureBiens?: facture_bienUpdateManyWithoutBienNestedInput
  }

  export type bienUncheckedUpdateWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    Nom?: StringFieldUpdateOperationsInput | string
    bien_type?: EnumBienTypeFieldUpdateOperationsInput | $Enums.BienType
    Type?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    prix?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    factureBiens?: facture_bienUncheckedUpdateManyWithoutBienNestedInput
  }

  export type bienUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    Nom?: StringFieldUpdateOperationsInput | string
    bien_type?: EnumBienTypeFieldUpdateOperationsInput | $Enums.BienType
    Type?: EnumServiceTypeFieldUpdateOperationsInput | $Enums.ServiceType
    prix?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type factureUpdateWithoutUtilisateurInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    prix_total?: FloatFieldUpdateOperationsInput | number
    statut?: EnumFactureStatusFieldUpdateOperationsInput | $Enums.FactureStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    client?: ClientUpdateOneRequiredWithoutFacturesNestedInput
    factureBiens?: facture_bienUpdateManyWithoutFactureNestedInput
    paiements?: paimentUpdateManyWithoutFactureNestedInput
  }

  export type factureUncheckedUpdateWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    CIN?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    prix_total?: FloatFieldUpdateOperationsInput | number
    statut?: EnumFactureStatusFieldUpdateOperationsInput | $Enums.FactureStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    factureBiens?: facture_bienUncheckedUpdateManyWithoutFactureNestedInput
    paiements?: paimentUncheckedUpdateManyWithoutFactureNestedInput
  }

  export type factureUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    CIN?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    prix_total?: FloatFieldUpdateOperationsInput | number
    statut?: EnumFactureStatusFieldUpdateOperationsInput | $Enums.FactureStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type facture_bienUpdateWithoutUtilisateurInput = {
    type_bien?: EnumBienTypeFieldUpdateOperationsInput | $Enums.BienType
    quantite?: IntFieldUpdateOperationsInput | number
    facture?: factureUpdateOneRequiredWithoutFactureBiensNestedInput
    bien?: bienUpdateOneRequiredWithoutFactureBiensNestedInput
  }

  export type facture_bienUncheckedUpdateWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_facture?: IntFieldUpdateOperationsInput | number
    id_bien?: IntFieldUpdateOperationsInput | number
    type_bien?: EnumBienTypeFieldUpdateOperationsInput | $Enums.BienType
    quantite?: IntFieldUpdateOperationsInput | number
  }

  export type facture_bienUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_facture?: IntFieldUpdateOperationsInput | number
    id_bien?: IntFieldUpdateOperationsInput | number
    type_bien?: EnumBienTypeFieldUpdateOperationsInput | $Enums.BienType
    quantite?: IntFieldUpdateOperationsInput | number
  }

  export type paimentUpdateWithoutUtilisateurInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    montant_totale?: FloatFieldUpdateOperationsInput | number
    facture?: factureUpdateOneRequiredWithoutPaiementsNestedInput
  }

  export type paimentUncheckedUpdateWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_facture?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    montant_totale?: FloatFieldUpdateOperationsInput | number
  }

  export type paimentUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_facture?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    montant_totale?: FloatFieldUpdateOperationsInput | number
  }

  export type rendez_vousCreateManyClientInput = {
    id?: number
    sujet: string
    date_rendez_vous: Date | string
    created_at?: Date | string
    Cree_par: string
  }

  export type documentCreateManyClientInput = {
    id?: number
    template_id: number
    data_json: string
    Cree_par: string
  }

  export type factureCreateManyClientInput = {
    id?: number
    date: Date | string
    prix_total: number
    statut: $Enums.FactureStatus
    notes?: string | null
    Cree_par: string
  }

  export type rendez_vousUpdateWithoutClientInput = {
    sujet?: StringFieldUpdateOperationsInput | string
    date_rendez_vous?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutRendez_vousNestedInput
  }

  export type rendez_vousUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    sujet?: StringFieldUpdateOperationsInput | string
    date_rendez_vous?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Cree_par?: StringFieldUpdateOperationsInput | string
  }

  export type rendez_vousUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    sujet?: StringFieldUpdateOperationsInput | string
    date_rendez_vous?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Cree_par?: StringFieldUpdateOperationsInput | string
  }

  export type documentUpdateWithoutClientInput = {
    data_json?: StringFieldUpdateOperationsInput | string
    template?: document_templatesUpdateOneRequiredWithoutDocumentsNestedInput
    utilisateur?: UtilisateurUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type documentUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    template_id?: IntFieldUpdateOperationsInput | number
    data_json?: StringFieldUpdateOperationsInput | string
    Cree_par?: StringFieldUpdateOperationsInput | string
  }

  export type documentUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    template_id?: IntFieldUpdateOperationsInput | number
    data_json?: StringFieldUpdateOperationsInput | string
    Cree_par?: StringFieldUpdateOperationsInput | string
  }

  export type factureUpdateWithoutClientInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    prix_total?: FloatFieldUpdateOperationsInput | number
    statut?: EnumFactureStatusFieldUpdateOperationsInput | $Enums.FactureStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    utilisateur?: UtilisateurUpdateOneRequiredWithoutFacturesNestedInput
    factureBiens?: facture_bienUpdateManyWithoutFactureNestedInput
    paiements?: paimentUpdateManyWithoutFactureNestedInput
  }

  export type factureUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    prix_total?: FloatFieldUpdateOperationsInput | number
    statut?: EnumFactureStatusFieldUpdateOperationsInput | $Enums.FactureStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    Cree_par?: StringFieldUpdateOperationsInput | string
    factureBiens?: facture_bienUncheckedUpdateManyWithoutFactureNestedInput
    paiements?: paimentUncheckedUpdateManyWithoutFactureNestedInput
  }

  export type factureUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    prix_total?: FloatFieldUpdateOperationsInput | number
    statut?: EnumFactureStatusFieldUpdateOperationsInput | $Enums.FactureStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    Cree_par?: StringFieldUpdateOperationsInput | string
  }

  export type documentCreateManyTemplateInput = {
    id?: number
    CIN: string
    data_json: string
    Cree_par: string
  }

  export type documentUpdateWithoutTemplateInput = {
    data_json?: StringFieldUpdateOperationsInput | string
    client?: ClientUpdateOneRequiredWithoutDocumentsNestedInput
    utilisateur?: UtilisateurUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type documentUncheckedUpdateWithoutTemplateInput = {
    id?: IntFieldUpdateOperationsInput | number
    CIN?: StringFieldUpdateOperationsInput | string
    data_json?: StringFieldUpdateOperationsInput | string
    Cree_par?: StringFieldUpdateOperationsInput | string
  }

  export type documentUncheckedUpdateManyWithoutTemplateInput = {
    id?: IntFieldUpdateOperationsInput | number
    CIN?: StringFieldUpdateOperationsInput | string
    data_json?: StringFieldUpdateOperationsInput | string
    Cree_par?: StringFieldUpdateOperationsInput | string
  }

  export type facture_bienCreateManyBienInput = {
    id?: number
    id_facture: number
    type_bien: $Enums.BienType
    quantite: number
    Cree_par: string
  }

  export type facture_bienUpdateWithoutBienInput = {
    type_bien?: EnumBienTypeFieldUpdateOperationsInput | $Enums.BienType
    quantite?: IntFieldUpdateOperationsInput | number
    facture?: factureUpdateOneRequiredWithoutFactureBiensNestedInput
    utilisateur?: UtilisateurUpdateOneRequiredWithoutFactureBiensNestedInput
  }

  export type facture_bienUncheckedUpdateWithoutBienInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_facture?: IntFieldUpdateOperationsInput | number
    type_bien?: EnumBienTypeFieldUpdateOperationsInput | $Enums.BienType
    quantite?: IntFieldUpdateOperationsInput | number
    Cree_par?: StringFieldUpdateOperationsInput | string
  }

  export type facture_bienUncheckedUpdateManyWithoutBienInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_facture?: IntFieldUpdateOperationsInput | number
    type_bien?: EnumBienTypeFieldUpdateOperationsInput | $Enums.BienType
    quantite?: IntFieldUpdateOperationsInput | number
    Cree_par?: StringFieldUpdateOperationsInput | string
  }

  export type facture_bienCreateManyFactureInput = {
    id?: number
    id_bien: number
    type_bien: $Enums.BienType
    quantite: number
    Cree_par: string
  }

  export type paimentCreateManyFactureInput = {
    id?: number
    date: Date | string
    montant_totale: number
    Cree_par: string
  }

  export type facture_bienUpdateWithoutFactureInput = {
    type_bien?: EnumBienTypeFieldUpdateOperationsInput | $Enums.BienType
    quantite?: IntFieldUpdateOperationsInput | number
    bien?: bienUpdateOneRequiredWithoutFactureBiensNestedInput
    utilisateur?: UtilisateurUpdateOneRequiredWithoutFactureBiensNestedInput
  }

  export type facture_bienUncheckedUpdateWithoutFactureInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_bien?: IntFieldUpdateOperationsInput | number
    type_bien?: EnumBienTypeFieldUpdateOperationsInput | $Enums.BienType
    quantite?: IntFieldUpdateOperationsInput | number
    Cree_par?: StringFieldUpdateOperationsInput | string
  }

  export type facture_bienUncheckedUpdateManyWithoutFactureInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_bien?: IntFieldUpdateOperationsInput | number
    type_bien?: EnumBienTypeFieldUpdateOperationsInput | $Enums.BienType
    quantite?: IntFieldUpdateOperationsInput | number
    Cree_par?: StringFieldUpdateOperationsInput | string
  }

  export type paimentUpdateWithoutFactureInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    montant_totale?: FloatFieldUpdateOperationsInput | number
    utilisateur?: UtilisateurUpdateOneRequiredWithoutPaiementsNestedInput
  }

  export type paimentUncheckedUpdateWithoutFactureInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    montant_totale?: FloatFieldUpdateOperationsInput | number
    Cree_par?: StringFieldUpdateOperationsInput | string
  }

  export type paimentUncheckedUpdateManyWithoutFactureInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    montant_totale?: FloatFieldUpdateOperationsInput | number
    Cree_par?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}