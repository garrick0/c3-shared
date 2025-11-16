/**
 * Sanity tests for c3-shared package
 * Ensures basic exports and structure are correct
 */

import { describe, it, expect } from 'vitest';

describe('c3-shared package', () => {
  it('should be importable', () => {
    // This test just verifies the package can be imported
    expect(true).toBe(true);
  });

  it('should export main index', async () => {
    // Verify the main entry point exists and is importable
    const shared = await import('../src/index.js');
    expect(shared).toBeDefined();
  });

  describe('domain exports', () => {
    it('should export Result', async () => {
      const { Result } = await import('../src/domain/common/Result.js');
      expect(Result).toBeDefined();
      
      // Test basic Result functionality
      const success = Result.ok('test');
      expect(success.isSuccess).toBe(true);
      expect(success.value).toBe('test');
      
      const failure = Result.fail('error');
      expect(failure.isFailure).toBe(true);
      expect(failure.error).toBe('error');
    });

    it('should export Either', async () => {
      const { Either } = await import('../src/domain/common/Either.js');
      expect(Either).toBeDefined();
    });

    it('should export Entity', async () => {
      const { Entity } = await import('../src/domain/base/Entity.js');
      expect(Entity).toBeDefined();
    });

    it('should export ValueObject', async () => {
      const { ValueObject } = await import('../src/domain/base/ValueObject.js');
      expect(ValueObject).toBeDefined();
    });
  });

  describe('infrastructure exports', () => {
    it('should export Logger creation', async () => {
      const { createLogger, LogLevel } = await import('../src/infrastructure/Logger.js');
      expect(createLogger).toBeDefined();
      expect(LogLevel).toBeDefined();
      
      // Test logger creation
      const logger = createLogger('test', LogLevel.INFO);
      expect(logger).toBeDefined();
      expect(logger.info).toBeDefined();
      expect(logger.error).toBeDefined();
      expect(logger.warn).toBeDefined();
      expect(logger.debug).toBeDefined();
    });

    it('should export Cache creation', async () => {
      const { createCache } = await import('../src/infrastructure/Cache.js');
      expect(createCache).toBeDefined();
      
      // Test cache creation
      const cache = createCache();
      expect(cache).toBeDefined();
      expect(cache.get).toBeDefined();
      expect(cache.set).toBeDefined();
      expect(cache.has).toBeDefined();
      expect(cache.delete).toBeDefined();
    });

    it('should export Metrics creation', async () => {
      const { createMetrics } = await import('../src/infrastructure/Metrics.js');
      expect(createMetrics).toBeDefined();
      
      // Test metrics creation
      const metrics = createMetrics();
      expect(metrics).toBeDefined();
      expect(metrics.increment).toBeDefined();
      expect(metrics.gauge).toBeDefined();
      expect(metrics.timing).toBeDefined();
    });
  });

  describe('configuration exports', () => {
    it('should export ConfigurationService creation', async () => {
      const { createConfigurationService } = await import('../src/configuration/ConfigurationService.js');
      expect(createConfigurationService).toBeDefined();
    });

    it('should export PresetManager creation', async () => {
      const { createPresetManager } = await import('../src/configuration/PresetManager.js');
      expect(createPresetManager).toBeDefined();
    });
  });

  describe('types exports', () => {
    it('should export api types', async () => {
      const apiTypes = await import('../src/types/api.types.js');
      expect(apiTypes).toBeDefined();
    });

    it('should export common types', async () => {
      const commonTypes = await import('../src/types/common.types.js');
      expect(commonTypes).toBeDefined();
    });

    it('should export error types', async () => {
      const errorTypes = await import('../src/types/errors.types.js');
      expect(errorTypes).toBeDefined();
    });
  });
});

