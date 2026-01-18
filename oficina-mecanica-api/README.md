# 🚗 Sistema de Gestão de Oficina Mecânica

Sistema integrado de atendimento e execução de serviços para oficina mecânica, desenvolvido com **Clean Architecture** e práticas modernas de DevOps.

**Tech Challenge - Fases 1 e 2**  
**Curso:** Pós-Tech Software Architecture - FIAP+Alura

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Arquitetura](#arquitetura)
- [Tecnologias](#tecnologias)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Execução Local](#execução-local)
- [Testes](#testes)
- [Deploy Kubernetes](#deploy-kubernetes)
- [Infraestrutura (Terraform)](#infraestrutura-terraform)
- [CI/CD](#cicd)
- [Documentação API](#documentação-api)
- [Event Storming](#event-storming)

---

## 🎯 Sobre o Projeto

Sistema desenvolvido para resolver os desafios de uma oficina mecânica de médio porte:

### Fase 1 - MVP Back-end
- ✅ Gestão de clientes, veículos, serviços e peças
- ✅ Criação e acompanhamento de Ordens de Serviço (OS)
- ✅ Controle de estoque
- ✅ Autenticação JWT
- ✅ Validações de segurança (CPF/CNPJ, Placa)
- ✅ Testes automatizados (>80% cobertura)

### Fase 2 - Evolução Cloud Native
- ✅ Clean Architecture / Arquitetura Hexagonal
- ✅ Containerização (Docker)
- ✅ Orquestração (Kubernetes)
- ✅ Infrastructure as Code (Terraform)
- ✅ CI/CD (GitHub Actions)
- ✅ Horizontal Pod Autoscaler (HPA)
- ✅ Monitoramento e observabilidade

---

## 🏗️ Arquitetura

### Clean Architecture (Camadas)

```
src/
├── domain/              # Entidades, Value Objects, Interfaces
│   ├── entities/        # Cliente, Veículo, OS, Peça, Serviço
│   ├── value-objects/   # CPF, Email, Placa, Money
│   └── repositories/    # Interfaces (ports)
├── application/         # Use Cases (regras de negócio)
│   ├── use-cases/       # Casos de uso
│   └── dtos/            # Data Transfer Objects
├── infrastructure/      # Implementações técnicas
│   ├── database/        # TypeORM, repositories
│   ├── security/        # JWT, bcrypt
│   └── config/          # Configurações
└── presentation/        # Controllers, DTOs de entrada/saída
    └── controllers/     # REST APIs
```

### Fluxo de Dados

```
HTTP Request → Controller → Use Case → Repository (Interface) → TypeORM → PostgreSQL
                    ↓
                Response ← DTO ← Domain Entity
```

---

## 🛠️ Tecnologias

### Core
- **Node.js** 22.x
- **NestJS** 10.x (Framework)
- **TypeScript** 5.x
- **PostgreSQL** 16.x (Banco de dados)
- **TypeORM** 0.3.x (ORM)

### Segurança
- **JWT** (Autenticação)
- **Bcrypt** (Hash de senhas)
- **Class-validator** (Validações)

### Testes
- **Jest** (Framework de testes)
- **Supertest** (Testes E2E)

### DevOps
- **Docker** & **Docker Compose**
- **Kubernetes** 1.28+
- **Terraform** 1.6+
- **GitHub Actions** (CI/CD)

---

## ✅ Pré-requisitos

- **Node.js** 22.x ou superior
- **npm** 10.x ou superior
- **Docker** & **Docker Compose**
- **kubectl** (para Kubernetes)
- **Terraform** (para IaC)
- **Git**

---

## 📦 Instalação

### 1. Clonar o repositório

```bash
git clone https://github.com/SEU-USUARIO/oficina-mecanica-api.git
cd oficina-mecanica-api
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Configurar variáveis de ambiente

```bash
cp .env.example .env
# Edite o .env com suas configurações
```

---

## 🚀 Execução Local

### Opção 1: Docker Compose (Recomendado)

```bash
# Subir todos os serviços (app + PostgreSQL + PgAdmin)
docker-compose up -d

# Ver logs
docker-compose logs -f app

# Parar serviços
docker-compose down

# Parar e remover volumes (limpa banco)
docker-compose down -v
```

**Acessos:**
- API: http://localhost:3000
- Swagger: http://localhost:3000/api/docs
- PgAdmin: http://localhost:5050
  - Email: `admin@oficina.com`
  - Senha: `admin123`

### Opção 2: Desenvolvimento Local (sem Docker)

```bash
# 1. Iniciar PostgreSQL localmente ou via Docker
docker run -d \
  --name oficina-postgres \
  -e POSTGRES_DB=oficina_mecanica \
  -e POSTGRES_USER=oficina \
  -e POSTGRES_PASSWORD=oficina123 \
  -p 5432:5432 \
  postgres:16-alpine

# 2. Rodar aplicação em modo desenvolvimento
npm run start:dev

# 3. Acessar
# API: http://localhost:3000
# Swagger: http://localhost:3000/api/docs
```

---

## 🧪 Testes

### Executar todos os testes

```bash
npm test
```

### Testes com cobertura

```bash
npm run test:cov
```

### Testes E2E

```bash
npm run test:e2e
```

### Testes em modo watch

```bash
npm run test:watch
```

**Meta de cobertura:** >80% (Fase 1) | >70% (Fase 2)

---

## ☸️ Deploy Kubernetes

### Pré-requisitos
- Cluster Kubernetes rodando (kind, minikube, EKS, GKE, AKS)
- `kubectl` configurado

### 1. Criar cluster local (kind)

```bash
kind create cluster --name oficina-cluster
```

### 2. Aplicar manifestos

```bash
# Criar namespace
kubectl apply -f k8s/namespace.yaml

# Aplicar ConfigMaps e Secrets
kubectl apply -f k8s/configmap.yaml
kubectl apply -f k8s/secret.yaml

# Deploy do banco de dados
kubectl apply -f k8s/db-pvc.yaml
kubectl apply -f k8s/db-deployment.yaml
kubectl apply -f k8s/db-service.yaml

# Deploy da aplicação
kubectl apply -f k8s/app-deployment.yaml
kubectl apply -f k8s/app-service.yaml

# Horizontal Pod Autoscaler
kubectl apply -f k8s/hpa.yaml
```

### 3. Verificar deploy

```bash
# Ver pods
kubectl get pods -n oficina

# Ver services
kubectl get svc -n oficina

# Ver HPA
kubectl get hpa -n oficina

# Logs da aplicação
kubectl logs -f -l app=oficina-api -n oficina
```

### 4. Acessar aplicação

```bash
# Port-forward
kubectl port-forward svc/oficina-api-service 3000:3000 -n oficina

# Acessar: http://localhost:3000
```

### 5. Testar escalabilidade (HPA)

```bash
# Gerar carga (Apache Bench)
ab -n 10000 -c 100 http://localhost:3000/api/v1/health

# Observar HPA escalando
kubectl get hpa -n oficina -w
```

---

## 🏗️ Infraestrutura (Terraform)

### Provisionamento

```bash
cd infra

# Inicializar Terraform
terraform init

# Ver plano de execução
terraform plan

# Aplicar infraestrutura
terraform apply

# Outputs (endpoints, IPs)
terraform output
```

### Destruir infraestrutura

```bash
terraform destroy
```

### Recursos provisionados
- ✅ Cluster Kubernetes (kind local ou cloud)
- ✅ PostgreSQL (RDS/CloudSQL ou local)
- ✅ Networking (VPC, Subnets, Security Groups)
- ✅ Load Balancer (se cloud)

---

## 🔄 CI/CD

Pipeline automatizado via **GitHub Actions**.

### Workflow

```
1. Trigger (push/PR) → 
2. Checkout código → 
3. Install dependencies → 
4. Run tests → 
5. Build Docker image → 
6. Push to registry → 
7. Deploy to K8s → 
8. Healthcheck
```

### Configuração

Arquivo: `.github/workflows/ci-cd.yml`

### Secrets necessários (GitHub)

```
DOCKER_USERNAME     # DockerHub username
DOCKER_PASSWORD     # DockerHub password
KUBE_CONFIG         # Kubernetes config (base64)
```

---

## 📚 Documentação API

### Swagger/OpenAPI

Acesse: http://localhost:3000/api/docs

### Collection Postman

Arquivo: `docs/postman-collection.json`

### Endpoints principais

#### Clientes
- `POST /api/v1/clientes` - Criar cliente
- `GET /api/v1/clientes` - Listar clientes
- `GET /api/v1/clientes/:id` - Buscar cliente
- `PUT /api/v1/clientes/:id` - Atualizar cliente
- `DELETE /api/v1/clientes/:id` - Deletar cliente

#### Veículos
- `POST /api/v1/veiculos` - Criar veículo
- `GET /api/v1/veiculos` - Listar veículos
- `GET /api/v1/veiculos/:id` - Buscar veículo
- `PUT /api/v1/veiculos/:id` - Atualizar veículo

#### Ordens de Serviço
- `POST /api/v1/ordens-servico` - Criar OS
- `GET /api/v1/ordens-servico` - Listar OS (ordenadas por prioridade)
- `GET /api/v1/ordens-servico/:id` - Buscar OS
- `GET /api/v1/ordens-servico/:id/status` - Consultar status
- `PATCH /api/v1/ordens-servico/:id/status` - Atualizar status
- `PATCH /api/v1/ordens-servico/:id/aprovar` - Aprovar orçamento

#### Serviços
- `POST /api/v1/servicos` - Criar serviço
- `GET /api/v1/servicos` - Listar serviços

#### Peças
- `POST /api/v1/pecas` - Criar peça
- `GET /api/v1/pecas` - Listar peças
- `PATCH /api/v1/pecas/:id/estoque` - Atualizar estoque

---

## 🎨 Event Storming

Documentação DDD completa disponível em:

📄 **Miro:** [Link para o board](#)

### Principais agregados
- **Cliente** (CPF/CNPJ, dados pessoais)
- **Veículo** (Placa, marca, modelo)
- **Ordem de Serviço** (Status, serviços, peças)
- **Serviço** (Descrição, valor)
- **Peça** (Código, estoque, valor)

### Eventos de domínio
- `OrdemServiçoCriada`
- `StatusAlterado`
- `OrcamentoAprovado`
- `ServiçoExecutado`
- `OrdemServiçoFinalizada`

---

## 🎥 Vídeo Demonstrativo

**Fase 1:** [YouTube - 15min](#)  
**Fase 2:** [YouTube - 15min](#)

---

## 📝 Relatório de Segurança

Análise de vulnerabilidades (OWASP, SonarQube):

📄 **Relatório:** `docs/security-report.pdf`

### Vulnerabilidades corrigidas
- ✅ SQL Injection (prevenido via TypeORM)
- ✅ XSS (sanitização de inputs)
- ✅ Exposição de dados sensíveis (secrets no K8s)
- ✅ Autenticação fraca (JWT com expiração)
- ✅ Validação de dados (class-validator)

---

## 👥 Equipe

- **Nome:** [Seu Nome]
- **RM:** [Seu RM]
- **Discord:** [Seu usuário]

---

## 📄 Licença

MIT License - Tech Challenge FIAP

---

## 🤝 Contato

**Dúvidas?** Discord do Tech Challenge

**Repositório:** [GitHub](#)


# Workflows enabled
dom 18 jan 2026 20:35:10 -03
dom 18 jan 2026 20:35:38 -03
# Test dom 18 jan 2026 20:42:06 -03
