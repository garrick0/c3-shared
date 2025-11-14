# c3-shared

> Core domain abstractions and infrastructure for C3

This package provides the foundational domain models and infrastructure shared across all C3 contexts.

## Installation

```bash
npm install c3-shared
```

## What's Included

### Domain Abstractions

- **Core Abstractions**: `Codebase`, `Project`, `AnalysisSession`, `Workspace`
- **Base Classes**: `Entity`, `ValueObject`, `AggregateRoot`
- **Common Types**: `Result`, `Either`, error handling

### Infrastructure

- **Logger**: Hierarchical logging service
- **Cache**: In-memory caching
- **FileSystem**: File system abstractions

### Configuration

- **ConfigurationService**: Load and validate architecture.config.ts
- **ConfigSchema**: Zod schemas for type-safe configuration

## Usage

```typescript
import { Result, Logger } from 'c3-shared';
import { Codebase } from 'c3-shared/domain';
import { ConfigurationService } from 'c3-shared/configuration';

// Use Result type for error handling
const result: Result<string, Error> = Result.ok("success");

// Create logger
const logger = Logger.create('MyService');
logger.info('Starting analysis');

// Use domain abstractions
const codebase = new Codebase(
  'id-123',
  '/path/to/code',
  'MyProject',
  {}
);
```

## Exports

```typescript
// Main export
import { ... } from 'c3-shared';

// Domain exports
import { ... } from 'c3-shared/domain';

// Infrastructure exports
import { ... } from 'c3-shared/infrastructure';

// Configuration exports
import { ... } from 'c3-shared/configuration';
```

## Development

```bash
# Build
npm run build

# Watch mode
npm run dev

# Test
npm test

# Type check
npm run typecheck
```

## Part of C3

This package is part of the C3 (Code Standards Management System) polyrepo:

- **Platform**: [c3-platform](https://github.com/garrick0/c3-platform)
- **Contexts**: c3-parsing, c3-compliance, c3-projection, c3-discovery
- **Apps**: c3-cli, c3-bff, c3-web

## License

MIT
