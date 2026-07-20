# Carimbos em 1H — Site Completo (Oficina das Chaves)

Landing page multi-página da **Oficina das Chaves** (Rio de Janeiro). Site institucional + catálogo de produtos + blog — tudo otimizado pra **Google Ads e SEO orgânico**.

Stack: **HTML + CSS + JS puro** (zero build). Deploy: **Vercel**.

---

## 🌐 Estrutura do site (18 páginas)

```
/                                       → Home
├── /carimbo-automatico-redondo/        → Página de serviço (SEO)
/carimbo-datador-automatico/
/carimbo-datador-padrao/
/carimbo-cnpj/
/carimbo-madeira/
/carimbo-medico/
/carimbo-bolso/
/carimbo-caneta/
/carimbo-fidelizacao/
/carimbo-assinatura/
/carimbo-automatico-quadrado/
/carimbo-mouse/
├── /contato/                           → Contato + formulário
├── /blog/                              → Índice do blog
│   ├── /blog/como-abrir-empresa-rio/   → Artigo SEO (long-tail "abrir empresa rio")
│   ├── /blog/carimbo-para-mei/         → Artigo SEO (long-tail "carimbo mei")
│   └── /blog/tipos-de-carimbo/         → Artigo SEO (long-tail "tipos de carimbo")
├── /sitemap.xml                        → Sitemap pro Google Search Console
├── /robots.txt                         → Permite indexação
└── /manifest.webmanifest               → PWA manifest (Android/desktop)
```

Cada página tem:
- `<title>` e `<meta description>` únicos, otimizados pra palavras-chave locais
- Schema.org `Service` (páginas de produto) / `LocalBusiness` (home/contato) / `Article` (blog)
- Open Graph + Twitter Card (preview bonito em redes sociais)
- Canonical URL apontando pro domínio final

---

## 🚀 Deploy na Vercel

### 1. Suba pro GitHub

```bash
git init && git add . && git commit -m "feat: site completo com páginas de serviço, contato e blog"
git branch -M main
git remote add origin https://github.com/SEU-USER/carimbo-oficinadaschaves.git
git push -u origin main
```

### 2. Importe na Vercel

Acesse [vercel.com/new](https://vercel.com/new) → **Import Project** → selecione o repo. Em **Framework Preset**, escolha **"Other"**. Mantenha Build Command e Output Directory vazios. Clique **Deploy**. URL gerada: `https://carimbo-oficinadaschaves.vercel.app`.

### 3. Adicione o domínio customizado

No painel: **Settings → Domains → Add** → digite `carimbos.oficinadaschaves.com` (e a versão com `www`). A Vercel mostra os registros DNS a adicionar no provedor:

| Tipo | Host | Valor |
|---|---|---|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

SSL gratuito (Let's Encrypt) é provisionado automaticamente.

---

## 📈 Estratégia SEO + Google Ads

### Palavras-chave já mapeadas (por página)

| Página | Keyword principal | Keyword secundária |
|---|---|---|
| Home | "carimbo rio de janeiro" | "carimbo em 1 hora rj", "carimbo zona sul" |
| `/carimbo-cnpj/` | "carimbo cnpj rio de janeiro" | "carimbo de cnpj", "carimbo para empresa" |
| `/carimbo-medico/` | "carimbo médico rio de janeiro" | "carimbo de médico", "carimbo crm" |
| `/carimbo-datador-automatico/` | "carimbo datador automático" | "carimbo com data" |
| `/carimbo-madeira/` | "carimbo de madeira" | "carimbo tradicional" |
| `/blog/como-abrir-empresa-rio/` | "como abrir empresa no rio" | "abrir mei no rio" |
| `/blog/carimbo-para-mei/` | "carimbo para mei" | "mei precisa de carimbo" |
| `/blog/tipos-de-carimbo/` | "tipos de carimbo" | "modelo de carimbo" |

### Checklist pós-deploy (Google Ads)

- [ ] **Google Search Console** — adicionar e verificar domínio, enviar sitemap
- [ ] **Google Ads** — criar conta, configurar primeira campanha
- [ ] **Google Analytics 4** (opcional) — adicionar tag antes do `</head>`
- [ ] **Google Meu Negócio** — criar/otimizar perfil (combina com schema.org LocalBusiness)
- [ ] **Meta tags de verificação** — adicionar em `<head>` da home quando tiver os códigos
- [ ] **Pixels de remarketing** (Facebook/Google Ads) quando decidir usar

### Estrutura sugerida de campanha no Google Ads

**Campanha 1 — Carimbo CNPJ (alto intent)**
- Anúncios: 3-4 variações, todas com "Pronto em 1 hora" + telefone
- Palavras-chave: [carimbo cnpj rio de janeiro], [carimbo cnpj], [carimbo para empresa rj]
- Landing page: `/carimbo-cnpj/`

**Campanha 2 — Carimbo Médico (alto intent)**
- Anúncios: foco em CRM e especialidade
- Palavras-chave: [carimbo médico rio], [carimbo médico rj], [carimbo crm]
- Landing page: `/carimbo-medico/`

**Campanha 3 — Carimbo Zona Sul (local)**
- Anúncios: foco em bairro + rapidez
- Palavras-chave: [carimbo copacabana], [carimbo ipanema], [carimbo botafogo]
- Landing page: `/` (home, que menciona todos os bairros)

**Campanha 4 — Blog / Awareness**
- Anúncios em Display/Discovery, low CPM
- Conteúdo: posts do blog
- Objetivo: remarketing pra quem leu

---

## 📁 Estrutura de arquivos

```
.
├── index.html                       → Home (com schema LocalBusiness)
├── vercel.json                      → Headers de segurança + cache imutável
├── sitemap.xml                      → 18 URLs
├── robots.txt                       → Permite indexação
├── manifest.webmanifest             → PWA
├── README.md                        → Este arquivo
│
├── contato/index.html               → Contato (form WhatsApp)
│
├── carimbo-*/index.html             → 12 páginas de serviço
│
├── blog/index.html                  → Índice do blog
├── blog/*/index.html                → 3 posts
│
└── assets/
    ├── css/styles.css               → CSS único compartilhado
    ├── js/main.js                   → Menu, FAQ accordion, form
    └── img/                         → Logo + 14 imagens
```

---

## ✏️ Como editar conteúdo

| O que mudar | Onde |
|---|---|
| Textos | Editar o `.html` correspondente |
| Cores da marca | `:root` em `assets/css/styles.css` |
| Telefone / WhatsApp | Buscar `552139527434` em todos os arquivos |
| Imagens | Substituir em `assets/img/` mantendo nomes |
| Meta tags (title/description) | `<head>` de cada página |
| Schema.org | JSON-LD no `<head>` |
| Páginas adicionadas | Não esqueça de adicionar URL no `sitemap.xml` |

---

## 🎨 Identidade visual

Cores extraídas do logo oficial:

| Token | Hex | Uso |
|---|---|---|
| `--preto` | `#0a0a0a` | Topo, hero, seções escuras |
| `--verde` | `#8BC34A` | CTAs, destaques, ícones |
| `--verde-2` | `#7CB342` | Hover, gradientes |
| `--branco` | `#ffffff` | Seções claras |

Fontes: **Poppins** (títulos/CTAs) + **Roboto** (corpo).

---

## 📞 Contato

- **Telefone/WhatsApp:** (21) 3952-7434
- **Atendimento:** Rio de Janeiro — Zona Sul e Zona Oeste

---

## 📜 Licença

Projeto do cliente — uso restrito.
