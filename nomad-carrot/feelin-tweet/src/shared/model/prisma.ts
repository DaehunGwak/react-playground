import {PrismaClientKnownRequestError} from "@prisma/client/runtime/binary";

export interface PrismaResult<T> {
  readonly result?: T;
  readonly error?: PrismaClientKnownRequestError;
}
