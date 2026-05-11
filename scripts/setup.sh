#!/bin/bash
# ============================================================
# Agency IA — Script de setup local
# Usage : bash scripts/setup.sh
# ============================================================

set -e

echo "╔══════════════════════════════════════╗"
echo "║  Agency IA — Setup initial           ║"
echo "╚══════════════════════════════════════╝"
echo ""

# Vérifier que .env existe
if [ ! -f ".env" ]; then
  echo "→ Création du fichier .env depuis .env.example..."
  cp .env.example .env
  echo "  ✓ .env créé. Renseignez vos clés avant de continuer."
  echo "  Fichier : $(pwd)/.env"
  echo ""
else
  echo "  ✓ .env déjà présent."
fi

# Vérifier que git est initialisé
if [ ! -d ".git" ]; then
  echo "→ Initialisation du repo git..."
  git init
  git add .
  git commit -m "Initial commit — Agency IA system"
  echo "  ✓ Repo git initialisé."
else
  echo "  ✓ Repo git déjà présent."
fi

# Vérifier la présence des dossiers clés
echo ""
echo "→ Vérification de la structure..."
DIRS=("docs/sop" "docs/qa" "docs/launch" "prompts/content" "prompts/website" "prompts/sales" "workflows/n8n" "templates/audit" "templates/proposal" "templates/content" "site" "config" "client-workspaces/template")

for dir in "${DIRS[@]}"; do
  if [ -d "$dir" ]; then
    echo "  ✓ $dir"
  else
    echo "  ✗ MANQUANT : $dir"
    mkdir -p "$dir"
    echo "    → Créé"
  fi
done

echo ""
echo "→ Vérification des fichiers critiques..."
FILES=("README.md" ".gitignore" ".env.example" "site/index.html" "site/assets/css/style.css")

for file in "${FILES[@]}"; do
  if [ -f "$file" ]; then
    echo "  ✓ $file"
  else
    echo "  ✗ MANQUANT : $file"
  fi
done

echo ""
echo "╔══════════════════════════════════════╗"
echo "║  Setup terminé                       ║"
echo "╠══════════════════════════════════════╣"
echo "║  Prochaines étapes :                 ║"
echo "║  1. Remplir .env avec vos clés       ║"
echo "║  2. Lire docs/launch/checklist-7j.md ║"
echo "║  3. Déployer le site sur Netlify     ║"
echo "║  4. Configurer n8n (config/n8n.md)   ║"
echo "╚══════════════════════════════════════╝"
