#!/bin/bash
set -e

# 1. Academic Papers
git checkout -b feature/academic-papers main
git checkout temp-work -- public/data/honours-papers.json public/data/papers src/app/\(main\)/honours src/app/\(main\)/masters src/components/ProgramsClient.tsx src/components/ProgramsSection.tsx
git commit -m "feat(academics): update honours, masters, papers and programs"

# 2. About Page
git checkout -b feature/about-page main
git checkout temp-work -- src/app/\(main\)/about src/components/AboutContent.tsx
git commit -m "feat(about): add responsive about page and content"

# 3. Study Method
git checkout -b feature/study-method main
git checkout temp-work -- src/app/\(main\)/study-method src/components/study-method src/components/InteractiveStudyMethod.tsx
git commit -m "feat(study-method): implement study method page with bilingual toggle"

# 4. Literary Terms
git checkout -b feature/literary-terms main
git rm -rf src/app/\(main\)/glossary || true
git checkout temp-work -- src/app/\(main\)/literary-terms src/components/LiteraryTermsContent.tsx src/components/TermDetailsContent.tsx src/components/TermTooltip.tsx src/components/hero-scenes/LiteraryTermsScene.tsx src/lib/data public/data/footer.json
git commit -m "feat(literary-terms): rename glossary to literary terms and expand database"

# 5. Core Layout
git checkout -b feature/core-layout main
git rm -f scripts/generate-data.js || true
git checkout temp-work -- package.json package-lock.json src/app/globals.css src/app/layout.tsx src/components/Footer.tsx src/components/Navbar.tsx
git commit -m "chore(core): update dependencies and global layout"

# Merge into main
git checkout main
git merge --no-ff feature/academic-papers -m "Merge branch 'feature/academic-papers'"
git merge --no-ff feature/about-page -m "Merge branch 'feature/about-page'"
git merge --no-ff feature/study-method -m "Merge branch 'feature/study-method'"
git merge --no-ff feature/literary-terms -m "Merge branch 'feature/literary-terms'"
git merge --no-ff feature/core-layout -m "Merge branch 'feature/core-layout'"

git branch -D temp-work
