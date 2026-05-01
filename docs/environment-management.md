# Environment Management Strategy

## Purpose

This document defines the environment management strategy for the
Portfolio Intelligence Platform ecosystem.

The goal is to ensure:

- predictable deployments
- environment isolation
- secrets protection
- stable configuration management
- CI/CD compatibility
- scalable operational governance

---

# Environment Types

The platform supports the following environments:

## Development

Used for:
- local engineering
- debugging
- rapid iteration

Characteristics:
- local MongoDB
- verbose logging
- hot reload
- mock telemetry allowed

---

## Testing

Used for:
- automated testing
- integration testing
- CI pipelines

Characteristics:
- isolated databases
- deterministic configuration
- telemetry disabled where appropriate

---

## Production

Used for:
- deployed portfolio systems
- public engineering observability

Characteristics:
- secure secrets handling
- optimized logging
- restricted debugging
- hardened infrastructure

---

# Environment Loading Policy

Environment variables must never be hardcoded inside domain logic.

Configuration loading responsibilities belong to:
- infrastructure layer
- application bootstrapping layer

Never inside:
- domain models
- aggregates
- entities
- value objects

---

# Secrets Policy

The following must NEVER be committed:

- production credentials
- API secrets
- database passwords
- access tokens
- deployment secrets

Only `.env.example` is committed.

Real environment files:
- .env
- .env.local
- .env.production

must remain gitignored.

---

# Frontend Environment Rules

Frontend variables exposed to the browser must use:

VITE_

prefixes.

Example:

VITE_API_BASE_URL

---

# Long-Term Direction

Future improvements may include:

- Vault integration
- Kubernetes secrets
- environment schema validation
- runtime configuration validation
- encrypted secrets management