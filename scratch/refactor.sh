#!/bin/bash
refactor() {
    local file=$1
    local name=$2
    local comp_name=$3
    local dest="src/components/$comp_name.tsx"
    
    # Copy file to component, keep 'use client'
    cp "$file" "$dest"
    
    # In the new component, we just rename the default export if needed, 
    # but the export default is usually fine.
    
    # In the page, we create a simple server component
    cat << PAGE_EOF > "$file"
import $comp_name from '@/components/$comp_name';

export const metadata = {
  title: '$name - LitAcademy',
};

export default function ${name}Page() {
  return <$comp_name />;
}
PAGE_EOF
}

refactor "src/app/(auth)/login/page.tsx" "Login" "LoginForm"
refactor "src/app/(auth)/register/page.tsx" "Register" "RegisterForm"
refactor "src/app/(main)/profile/page.tsx" "Profile" "ProfileView"
refactor "src/app/(main)/programs/page.tsx" "Programs" "ProgramsList"
