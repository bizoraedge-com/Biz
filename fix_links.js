const fs = require('fs');
const path = require('path');

function processFile(filePath) {
    if (!fs.existsSync(filePath)) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add import if not present
    if (!content.includes('import Link from "next/link"') && !content.includes("import Link from 'next/link'")) {
        if (content.includes('import { useState')) {
            content = content.replace(/(import { useState.*?;)/, "$1\nimport Link from 'next/link';");
        } else if (content.includes('import ')) {
            content = content.replace(/(import .*?;)/, "$1\nimport Link from 'next/link';");
        } else {
            content = "import Link from 'next/link';\n" + content;
        }
    }
    
    // Regex to match <a href="/something" ...>...</a>
    // We only want to target internal links starting with /
    const aTagRegex = /<a(\s+[^>]*href=["']\/[^"']*["'][^>]*)>([\s\S]*?)<\/a>/g;
    
    const newContent = content.replace(aTagRegex, '<Link$1>$2</Link>');
    
    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent);
        console.log('Fixed', filePath);
    }
}

const filesToFix = [
    'src/components/common/Navbar.tsx',
    'src/components/sections/WhyPartner.tsx',
    'src/components/sections/ProductPortfolio.tsx',
    'src/components/sections/AboutUs.tsx',
    'src/components/home/Hero.tsx',
    'src/app/(marketing)/services/custom-solutions/page.tsx',
    'src/app/(marketing)/portfolio/[slug]/page.tsx'
];

filesToFix.forEach(f => {
    processFile(path.join(__dirname, f));
});
