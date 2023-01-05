import NodeCache from 'node-cache';
import type { Logger } from 'pino';
import type { AuthenticationCreds, SignalKeyStore, SignalKeyStoreWithTransaction, TransactionCapabilityOptions } from '../Types';
/**
 * Adds caching capability to a SignalKeyStore
 * @param store the store to add caching to
 * @param logger to log trace events
 * @param opts NodeCache options
 */
export declare function makeCacheableSignalKeyStore(store: SignalKeyStore, logger: Logger, opts?: NodeCache.Options): SignalKeyStore;
/**
 * Adds DB like transaction capability (https://en.wikipedia.org/wiki/Database_transaction) to the SignalKeyStore,
 * this allows batch read & write operations & improves the performance of the lib
 * @param state the key store to apply this capability to
 * @param logger logger to log events
 * @returns SignalKeyStore with transaction capability
 */
export declare const addTransactionCapability: (state: SignalKeyStore, logger: Logger, { maxCommitRetries, delayBetweenTriesMs }: TransactionCapabilityOptions) => SignalKeyStoreWithTransaction;
export declare const initAuthCreds: () => AuthenticationCreds;
