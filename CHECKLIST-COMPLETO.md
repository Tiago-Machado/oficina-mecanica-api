# ✅ CHECKLIST COMPLETO - TECH CHALLENGE

## 📦 ENTREGAS OBRIGATÓRIAS

### FASE 1
- [ ] Código-fonte no repositório privado
- [ ] Dockerfile configurado
- [ ] docker-compose.yml funcional
- [ ] APIs REST documentadas (Swagger)
- [ ] Testes automatizados (>80% cobertura)
- [ ] Event Storming (Miro/similar)
- [ ] Relatório de vulnerabilidades
- [ ] README.md com instruções
- [ ] Vídeo demonstrativo (15min)
- [ ] PDF de entrega
- [ ] Acesso para `soat-architecture`

### FASE 2
- [ ] Código refatorado (Clean Architecture)
- [ ] Manifestos Kubernetes completos
- [ ] Scripts Terraform
- [ ] Pipeline CI/CD (GitHub Actions)
- [ ] HPA configurado
- [ ] Diagrama de arquitetura
- [ ] Collection de APIs (Postman)
- [ ] README atualizado
- [ ] Vídeo demonstrativo (15min)
- [ ] PDF de entrega

---

## 🔧 FUNCIONALIDADES OBRIGATÓRIAS

### APIs Fase 1
- [ ] CRUD Clientes
  - [ ] POST /api/v1/clientes
  - [ ] GET /api/v1/clientes
  - [ ] GET /api/v1/clientes/:id
  - [ ] PUT /api/v1/clientes/:id
  - [ ] DELETE /api/v1/clientes/:id
  
- [ ] CRUD Veículos
  - [ ] POST /api/v1/veiculos
  - [ ] GET /api/v1/veiculos
  - [ ] GET /api/v1/veiculos/:id
  - [ ] PUT /api/v1/veiculos/:id
  - [ ] DELETE /api/v1/veiculos/:id
  
- [ ] CRUD Serviços
  - [ ] POST /api/v1/servicos
  - [ ] GET /api/v1/servicos
  - [ ] GET /api/v1/servicos/:id
  - [ ] PUT /api/v1/servicos/:id
  - [ ] DELETE /api/v1/servicos/:id
  
- [ ] CRUD Peças
  - [ ] POST /api/v1/pecas
  - [ ] GET /api/v1/pecas
  - [ ] GET /api/v1/pecas/:id
  - [ ] PUT /api/v1/pecas/:id
  - [ ] DELETE /api/v1/pecas/:id
  - [ ] PATCH /api/v1/pecas/:id/estoque
  
- [ ] Ordens de Serviço
  - [ ] POST /api/v1/ordens-servico (criar OS)
  - [ ] GET /api/v1/ordens-servico (listar)
  - [ ] GET /api/v1/ordens-servico/:id
  - [ ] PATCH /api/v1/ordens-servico/:id/status

### APIs Fase 2 (adicionais)
- [ ] GET /api/v1/ordens-servico/:id/status (consulta específica)
- [ ] PATCH /api/v1/ordens-servico/:id/aprovar (aprovar orçamento)
- [ ] GET /api/v1/ordens-servico (com ordenação por prioridade)
- [ ] Filtro para excluir OS finalizadas/entregues da listagem

### Validações
- [ ] Validação CPF/CNPJ
- [ ] Validação Placa (formato antigo + Mercosul)
- [ ] Validação Email
- [ ] Validação de ano do veículo
- [ ] Validação de transição de status
- [ ] Validação de estoque (não permitir negativo)

### Segurança
- [ ] Autenticação JWT
- [ ] Proteção de rotas administrativas
- [ ] Sanitização de inputs
- [ ] Prevenção SQL Injection
- [ ] Secrets no Kubernetes
- [ ] Environment variables seguras

---

## 🏗️ ARQUITETURA

### Clean Architecture
- [ ] Camada Domain
  - [ ] Entidades (Cliente, Veículo, OS, Peça, Serviço)
  - [ ] Value Objects (CPF, Email, Placa, Money)
  - [ ] Interfaces de repositórios
  - [ ] Enums (StatusOS)
  
- [ ] Camada Application
  - [ ] Use Cases (regras de negócio)
  - [ ] DTOs
  - [ ] Interfaces de serviços
  
- [ ] Camada Infrastructure
  - [ ] Implementação TypeORM
  - [ ] Repositórios concretos
  - [ ] Configurações
  - [ ] JWT Service
  
- [ ] Camada Presentation
  - [ ] Controllers
  - [ ] DTOs de requisição/resposta
  - [ ] Exception filters
  - [ ] Swagger decorators

### DDD (Fase 1)
- [ ] Event Storming completo
- [ ] Contextos delimitados
- [ ] Agregados identificados
- [ ] Linguagem Ubíqua documentada
- [ ] Diagramas de fluxo

---

## ☸️ KUBERNETES

### Manifestos necessários
- [ ] namespace.yaml
- [ ] configmap.yaml
- [ ] secret.yaml
- [ ] db-pvc.yaml
- [ ] db-deployment.yaml
- [ ] db-service.yaml
- [ ] app-deployment.yaml
- [ ] app-service.yaml
- [ ] hpa.yaml
- [ ] ingress.yaml (opcional)

### Configurações
- [ ] Requests e limits de recursos
- [ ] Probes (liveness, readiness)
- [ ] Replica count
- [ ] HPA (CPU/Memory)
- [ ] Volumes persistentes (DB)
- [ ] Environment variables via ConfigMap/Secret

---

## 🏗️ TERRAFORM

### Scripts necessários
- [ ] main.tf (cluster + recursos)
- [ ] variables.tf (parametrização)
- [ ] outputs.tf (endpoints, IPs)
- [ ] provider.tf (AWS/GCP/Azure/local)
- [ ] database.tf (PostgreSQL)
- [ ] network.tf (VPC, subnets - se cloud)
- [ ] README.md (instruções)

### Comandos testados
- [ ] terraform init
- [ ] terraform validate
- [ ] terraform plan
- [ ] terraform apply
- [ ] terraform destroy

---

## 🔄 CI/CD

### GitHub Actions
- [ ] Workflow file criado (.github/workflows/ci-cd.yml)
- [ ] Trigger configurado (push, PR)
- [ ] Job de testes
- [ ] Job de build
- [ ] Job de segurança (scan)
- [ ] Job de deploy
- [ ] Secrets configurados no GitHub
  - [ ] DOCKER_USERNAME
  - [ ] DOCKER_PASSWORD
  - [ ] KUBE_CONFIG (se cloud)

### Pipeline deve executar
- [ ] Checkout do código
- [ ] Install dependencies
- [ ] Run tests
- [ ] Build Docker image
- [ ] Push to registry
- [ ] Apply K8s manifests
- [ ] Healthcheck

---

## 🧪 TESTES

### Unitários
- [ ] Testes de Value Objects (CPF, Email, Placa, Money)
- [ ] Testes de Entidades
- [ ] Testes de Use Cases
- [ ] Cobertura >70% (Fase 2) ou >80% (Fase 1)

### Integração
- [ ] Testes de APIs (E2E)
- [ ] Testes de repositórios
- [ ] Testes de autenticação

### Segurança
- [ ] Scan de vulnerabilidades (SonarQube/Snyk)
- [ ] Relatório gerado
- [ ] Vulnerabilidades documentadas

---

## 📚 DOCUMENTAÇÃO

### README.md
- [ ] Descrição do projeto
- [ ] Objetivos (Fase 1 e 2)
- [ ] Arquitetura (diagrama)
- [ ] Tecnologias usadas
- [ ] Pré-requisitos
- [ ] Instruções de instalação
- [ ] Instruções de execução local
- [ ] Instruções Docker
- [ ] Instruções Kubernetes
- [ ] Instruções Terraform
- [ ] Instruções CI/CD
- [ ] Link Swagger
- [ ] Link collection APIs
- [ ] Link vídeos
- [ ] Link Event Storming

### Event Storming (Fase 1)
- [ ] Board no Miro/Excalidraw
- [ ] Eventos identificados
- [ ] Comandos identificados
- [ ] Agregados definidos
- [ ] Políticas documentadas
- [ ] Linguagem Ubíqua
- [ ] Link público/compartilhado

### Diagramas (Fase 2)
- [ ] Diagrama Clean Architecture
- [ ] Diagrama Kubernetes
- [ ] Diagrama fluxo CI/CD
- [ ] Diagrama infraestrutura Terraform
- [ ] Formato: PNG/SVG/PDF

### Collection APIs
- [ ] Postman/Insomnia collection
- [ ] Todos os endpoints
- [ ] Exemplos de requisições
- [ ] Variáveis de ambiente
- [ ] Exportado e commitado

---

## 🎥 VÍDEOS

### Vídeo Fase 1 (15min)
- [ ] Introdução (1min)
- [ ] Event Storming (2min)
- [ ] Arquitetura DDD (2min)
- [ ] Demo APIs (5min)
- [ ] Docker rodando (2min)
- [ ] Testes + segurança (2min)
- [ ] Conclusão (1min)
- [ ] Publicado (YouTube/Vimeo unlisted)

### Vídeo Fase 2 (15min)
- [ ] Introdução (1min)
- [ ] Arquitetura Clean (2min)
- [ ] Terraform apply (2min)
- [ ] Kubernetes deploy (2min)
- [ ] CI/CD pipeline (2min)
- [ ] APIs funcionando (2min)
- [ ] HPA escalando (2min)
- [ ] Conclusão (2min)
- [ ] Publicado (YouTube/Vimeo unlisted)

---

## 📄 ENTREGAS FINAIS

### PDF Fase 1
- [ ] Nome do grupo
- [ ] Participantes + Discord usernames
- [ ] Link documentação DDD
- [ ] Link repositório GitHub
- [ ] Relatório vulnerabilidades
- [ ] Link vídeo

### PDF Fase 2
- [ ] Link repositório GitHub
- [ ] Diagrama arquitetura
- [ ] Link vídeo
- [ ] Descrição da solução

### Portal do Aluno
- [ ] PDF Fase 1 submetido
- [ ] PDF Fase 2 submetido
- [ ] Dentro do prazo

---

## 🎯 CRITÉRIOS DE NOTA

### Código (30%)
- [ ] Clean Code aplicado
- [ ] Arquitetura bem definida
- [ ] Sem code smells
- [ ] Comentários relevantes
- [ ] Nomenclatura clara

### Funcionalidades (25%)
- [ ] Todas as APIs funcionando
- [ ] Validações corretas
- [ ] Fluxos completos
- [ ] Tratamento de erros

### Infraestrutura (20%)
- [ ] Docker funcional
- [ ] Kubernetes completo
- [ ] Terraform funcional
- [ ] HPA escalando

### Testes (15%)
- [ ] Cobertura adequada
- [ ] Testes relevantes
- [ ] Testes passando

### Documentação (10%)
- [ ] README completo
- [ ] Diagramas claros
- [ ] Instruções funcionais
- [ ] Event Storming (Fase 1)

---

## ⚠️ PONTOS DE ATENÇÃO

### Não esquecer
- [ ] Compartilhar repo com `soat-architecture`
- [ ] Colocar vídeos como "unlisted" (não privado)
- [ ] Testar TUDO antes de gravar
- [ ] Verificar todos os links do PDF
- [ ] Submeter ANTES do prazo

### Possíveis problemas
- [ ] Portas já em uso (3000, 5432)
- [ ] Docker não iniciando
- [ ] Kubernetes sem recursos
- [ ] Pipeline falhando
- [ ] Vídeo muito longo (>15min)

---

## 🏁 STATUS GERAL

### Fase 1
- [ ] Iniciado
- [ ] Em andamento
- [ ] Concluído
- [ ] Entregue

### Fase 2
- [ ] Iniciado
- [ ] Em andamento
- [ ] Concluído
- [ ] Entregue

**PRAZO: 8 DIAS A PARTIR DE HOJE!**

Boa sorte! 🚀
