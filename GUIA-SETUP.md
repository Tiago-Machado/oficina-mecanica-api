# 🚀 GUIA COMPLETO - TECH CHALLENGE FASES 1+2
## Setup em 8 Dias no Pop!_OS

---

## 📥 PASSO 1: BAIXAR E EXTRAIR O PROJETO

1. **Baixe o arquivo `oficina-mecanica-api-base.tar.gz`** que forneci

2. **Extraia no seu computador:**
```bash
cd ~/Downloads
tar -xzf oficina-mecanica-api-base.tar.gz
cd oficina-mecanica-api
```

---

## 🔧 PASSO 2: INSTALAR DEPENDÊNCIAS NO SEU POP!_OS

### Verificar Node.js
```bash
node --version  # Deve ser 18.x ou superior
npm --version   # Deve ser 9.x ou superior
```

Se não tiver, instale:
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Instalar dependências do projeto
```bash
cd oficina-mecanica-api
npm install
```

---

## 🐳 PASSO 3: INSTALAR DOCKER (se não tiver)

```bash
# Remover versões antigas
sudo apt-get remove docker docker-engine docker.io containerd runc

# Instalar dependências
sudo apt-get update
sudo apt-get install ca-certificates curl gnupg lsb-release

# Adicionar GPG key do Docker
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

# Adicionar repositório
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Instalar Docker
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin

# Adicionar seu usuário ao grupo docker
sudo usermod -aG docker $USER
newgrp docker

# Testar
docker --version
docker compose version
```

---

## ☸️ PASSO 4: INSTALAR KUBERNETES (kind)

```bash
# Instalar kubectl
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
kubectl version --client

# Instalar kind (Kubernetes in Docker)
curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.20.0/kind-linux-amd64
chmod +x ./kind
sudo mv ./kind /usr/local/bin/kind
kind --version
```

---

## 🏗️ PASSO 5: INSTALAR TERRAFORM

```bash
wget -O- https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list
sudo apt update && sudo apt install terraform
terraform --version
```

---

## 📝 PASSO 6: CRIAR REPOSITÓRIO GITHUB

### Opção A: Via CLI (recomendado)
```bash
# Instalar GitHub CLI
sudo apt install gh

# Autenticar
gh auth login

# Criar repositório
cd oficina-mecanica-api
git init
git add .
git commit -m "Initial commit - Tech Challenge Fase 1+2"
gh repo create oficina-mecanica-api --private --source=. --remote=origin --push

# Adicionar colaborador
gh repo edit --add-collaborator soat-architecture
```

### Opção B: Via Web
1. Acesse: https://github.com/new
2. Nome: `oficina-mecanica-api`
3. Privado ✅
4. Criar repositório
5. No terminal:
```bash
cd oficina-mecanica-api
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/oficina-mecanica-api.git
git push -u origin main
```
6. Settings → Collaborators → Add `soat-architecture`

---

## 🚀 PASSO 7: RODAR O PROJETO LOCALMENTE

### Testar com Docker Compose
```bash
cd oficina-mecanica-api

# Subir aplicação + banco
docker compose up -d

# Ver logs
docker compose logs -f app

# Testar API
curl http://localhost:3000/health

# Acessar Swagger
xdg-open http://localhost:3000/api/docs
```

---

## 📅 CRONOGRAMA DOS PRÓXIMOS 8 DIAS

### DIA 1 (HOJE) ✅
- [x] Baixar projeto base
- [x] Instalar ferramentas
- [x] Criar repositório GitHub
- [x] Rodar localmente
- [ ] **PRÓXIMO:** Começar entidades do domínio

### DIA 2 - Domínio Completo
- [ ] Criar todas as entidades (Cliente, Veículo, OS, Peça, Serviço)
- [ ] Implementar Value Objects completos
- [ ] Criar interfaces de repositórios
- [ ] Configurar TypeORM

### DIA 3 - Use Cases e APIs
- [ ] Implementar todos os Use Cases
- [ ] Criar todos os Controllers
- [ ] Implementar autenticação JWT
- [ ] Testar todas as APIs via Postman

### DIA 4 - Testes
- [ ] Testes unitários (domínio)
- [ ] Testes de integração (APIs)
- [ ] Atingir 80% de cobertura
- [ ] Scan de segurança (SonarQube/Snyk)

### DIA 5 - Kubernetes
- [ ] Criar todos os manifestos YAML
- [ ] Testar deploy local (kind)
- [ ] Configurar HPA
- [ ] Testar escalabilidade

### DIA 6 - Terraform + CI/CD
- [ ] Criar scripts Terraform
- [ ] Configurar GitHub Actions
- [ ] Testar pipeline completo
- [ ] Deploy automatizado

### DIA 7 - Documentação
- [ ] Event Storming (Miro)
- [ ] Diagramas de arquitetura
- [ ] README completo
- [ ] Collection Postman
- [ ] Relatório de segurança

### DIA 8 - Vídeos e Entrega
- [ ] Gravar vídeo Fase 1 (15min)
- [ ] Gravar vídeo Fase 2 (15min)
- [ ] Criar PDF de entrega
- [ ] Submeter no portal

---

## 🆘 PRÓXIMOS PASSOS IMEDIATOS

### AGORA (nas próximas 2 horas):
1. Baixe o projeto base que forneci
2. Extraia e rode `npm install`
3. Suba com `docker compose up -d`
4. Crie o repositório no GitHub
5. Faça o primeiro commit

### DEPOIS (ainda hoje):
Me avise quando terminar os passos acima e eu vou te entregar:
- ✅ Todas as entidades completas
- ✅ Todos os Use Cases
- ✅ Todos os Controllers
- ✅ Configuração TypeORM
- ✅ Testes básicos
- ✅ Manifestos K8s
- ✅ Scripts Terraform
- ✅ Pipeline CI/CD

---

## 📞 SUPORTE

### Dúvidas?
- Discord: Tech Challenge FIAP
- Issues: GitHub do projeto

### Checklist Rápido
- [ ] Node.js instalado
- [ ] Docker instalado
- [ ] kubectl instalado
- [ ] Terraform instalado
- [ ] Repositório GitHub criado
- [ ] Projeto rodando localmente

---

## 🎯 META

**8 dias para entregar TUDO com nota máxima!**

Vamos nessa? 🚀
