import { motion } from 'framer-motion';

// Premium brand vectors for Tech Badges matching mockups exactly
export const getTechIcon = (name: string) => {
  const key = name.toLowerCase().replace(/[\s./-]/g, '');

  switch (key) {
    case 'java':
      return (
        <svg className="w-3 h-3 text-[#ED8B00]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.13 15.93c-1.33-.28-2.82-.44-4.22-.52.28-.27.53-.57.73-.9 2.22-.26 4.67-.84 5.37-2.35.5-1.07-.15-2.23-1.65-2.84-.71-.29-1.5-.47-2.29-.53.51-.55.91-1.18 1.18-1.87.69.04 1.35.15 1.97.35 1.98.63 2.91 2.2 2.3 4.02-.73 2.18-3.92 3.8-7.39 4.64zM6.66 18.84c-1.1-.31-1.92-.81-2.27-1.38-.45-.73-.25-1.6.53-2.38.74-.74 1.92-1.37 3.24-1.74.45-.13.88-.23 1.29-.32-.2.34-.34.73-.41 1.13-1.28.32-2.38.83-2.95 1.4-.33.34-.41.67-.22.95.23.35.95.73 1.99.98 1.02.25 2.45.39 3.85.39.29 0 .58 0 .86-.01-.06.39-.07.79-.04 1.19-.27 0-.55.01-.83.01-1.99 0-3.96-.34-5.05-.62zM14.01 1.33c-.22.95-.73 1.92-1.48 2.67-.93.93-1.99 1.4-2.45 2.14-.52.83-.24 1.83.67 2.19.46.18.91.17 1.29-.02 1.3-.65 1.8-2.09 2.22-3.41.42-1.33.82-2.65 1.76-3.79.23-.28.02-.49-.24-.44-.26.06-.51.13-.77.21zM9.54 4.54c-.16.71-.55 1.44-1.11 2-.7.7-1.49 1.05-1.84 1.6-.39.63-.18 1.38.5 1.65.35.14.68.13.97-.01.98-.49 1.35-1.57 1.67-2.56.32-1 .62-1.99 1.32-2.84.17-.21.01-.37-.18-.33-.19.04-.38.09-.58.15zm8.44 14.15c-1.62.24-3.52.37-5.4.37-2.6 0-5.06-.25-6.38-.63-1.59-.46-2.54-1.24-2.5-2.07.05-1.05 1.54-2.11 4.09-2.73a11.9 11.9 0 0 1 1.79-.31c-.08.44-.09.91-.04 1.37-.58.07-1.14.17-1.68.3-2.04.49-3.14 1.25-3.17 1.81-.04.66.99 1.34 2.59 1.73 1.2.29 3.51.52 5.92.52 1.77 0 3.54-.12 4.96-.32-.23-.42-.39-.88-.47-1.37h.03c-.23.02-.45.03-.68.04-1.62.06-3.23-.05-4.57-.31-.9-.18-1.54-.42-1.74-.69-.26-.35.01-.81.79-1.23.82-.44 2.19-.77 3.73-.88.6-.04 1.21-.05 1.81-.02-.02.43.02.87.12 1.3-.43-.02-.85-.01-1.27.02-1.27.09-2.34.34-2.85.62-.23.13-.3.26-.2.37.13.15.6.32 1.35.45 1.08.19 2.52.28 3.96.23.77-.03 1.53-.1 2.24-.22.25.46.57.87.97 1.23z" />
        </svg>
      );
    case 'go':
    case 'golang':
      return (
        <svg className="w-3 h-3 text-[#00ADD8]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.944 10.606c.092-2.187 1.353-3.69 3.197-3.69 2.015 0 3.018 1.488 2.875 3.743-.082 2.138-1.282 3.65-3.17 3.65-1.923 0-3.003-1.488-2.902-3.703zm17.962 1.358c-.066.866-.566 1.424-1.39 1.458-.87.036-1.332-.516-1.28-1.442.052-.942.593-1.503 1.394-1.536.812-.03 1.35.534 1.276 1.52zm.49-3.79c-.733-.553-1.747-.798-2.85-.75-2.585.11-4.08 1.93-4.223 4.398-.146 2.502 1.157 4.148 3.593 4.043.993-.043 1.84-.42 2.454-1.074l-.062 1.096c-.055.976-.575 1.583-1.503 1.625-.797.037-1.378-.344-1.614-.997l-2.072.582c.57 1.636 2.014 2.11 3.712 2.037 2.164-.09 3.568-1.376 3.687-3.504l.574-10.155h-2.316l-.38 2.738zm-11.75 3.784c-.053 1.238.455 1.933 1.246 1.902.775-.03 1.222-.767 1.275-2.007.054-1.244-.438-1.944-1.218-1.913-.775.03-1.25.753-1.303 2.018z" />
        </svg>
      );
    case 'python':
      return (
        <svg className="w-3 h-3 text-[#3776AB]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.25.18a8.8 8.8 0 0 0-4.3 1.18c-3.6 2.1-3 5.4-3 5.4h3.3s.1-1.7 1.7-2.1c1.5-.4 4.3-.4 5.1.7.9 1.2.6 3.4 0 4.2-.8 1.1-2.9 1.1-2.9 1.1h-5.6C5.5 10.6 3 12.3 2 15.6c-1 3.2.5 5.8 4.3 6.6a10.6 10.6 0 0 0 5.4-.1s3.2-.8 3.2-3.8V15h-3.3s-.1 1.7-1.7 2c-1.5.3-4.1.3-5-.9a3.8 3.8 0 0 1 0-4.1c1-1.2 3.1-1.2 3.1-1.2h5.6c3.1 0 5.4-1.7 6.4-5a6.4 6.4 0 0 0-.2-4.9c-.9-2.3-3.4-3.5-6.2-3.8zM9.5 2.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm5 16.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
      );
    case 'typescript':
      return (
        <svg className="w-3 h-3 text-[#3178C6]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.05 0h21.9c.58 0 1.05.47 1.05 1.05v21.9c0 .58-.47 1.05-1.05 1.05h-21.9C.47 24 0 23.53 0 22.95V1.05C0 .47.47 0 1.05 0zm11.22 17.56c-.05-.82-.6-1.42-1.74-1.42-.98 0-1.52.47-1.63 1.2-.1.6.43 1.05 1.25 1.27l1 .27c1.78.47 2.76 1.16 2.76 2.82 0 1.8-1.44 2.86-3.8 2.86-2.58 0-3.84-1.25-3.92-2.9h2.38c.08.97.83 1.48 1.6 1.48.97 0 1.47-.45 1.47-1.12 0-.69-.53-1.03-1.34-1.25l-.94-.27c-1.73-.48-2.6-1.25-2.6-2.73 0-1.6 1.34-2.68 3.52-2.68 2.37 0 3.58 1.12 3.68 2.68h-2.28zm8.7-4.66h-6.28V15h2.1v9h2.1v-9h2.08v-2.1z" />
        </svg>
      );
    case 'javascript':
      return (
        <svg className="w-3 h-3 text-[#F7DF1E]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0h24v24H0V0zm22.034 18.268c-.175-1.012-.829-1.706-2.077-2.238l-1.099-.481c-.66-.279-1.011-.531-1.011-.989 0-.4.32-.733.916-.733.586 0 .926.28 1.077.726h2.201c-.176-1.44-.963-2.32-2.378-2.662-.48-.12-1.066-.144-1.59-.062-.263.037-.513.111-.749.222-1.353.619-1.921 1.706-1.921 3.125 0 2.22 1.378 3.06 2.912 3.703l1.012.417c.844.359 1.201.732 1.201 1.288 0 .668-.504 1.085-1.252 1.085-.828 0-1.35-.418-1.514-1.17h-2.307c.19 1.745 1.137 2.87 2.87 3.197.459.088.948.088 1.385.013.263-.037.514-.112.75-.223 1.579-.73 2.148-2.029 2.148-3.791v-.013zM8.32 18.328c-.12-.767-.504-1.237-1.157-1.237-.6 0-.961.359-.961.944v5.474H3.9v-5.599c0-1.72 1.085-2.82 2.82-2.82.721 0 1.348.21 1.812.593l.492-2.126h2.493v9.429H9.006v-4.658z" />
        </svg>
      );
    case 'linux':
      return (
        <svg className="w-3 h-3 text-[#FCC624]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.03 16.14c-.66-1.21-1.38-2.22-2.07-3.15-1.42-1.92-2.8-3.79-3.08-6.19-.07-.63-.09-1.22-.09-1.78C16.79 2.27 14.81.79 12 .79s-4.79 1.48-4.79 4.23c0 .56-.02 1.15-.09 1.78-.28 2.4-1.66 4.27-3.08 6.19-.69.93-1.41 1.94-2.07 3.15-.7 1.28-.96 2.7-.35 3.99.64 1.36 2.19 1.92 3.84 1.92h16.98c1.65 0 3.2-.56 3.84-1.92.61-1.29.35-2.71-.35-3.99zM12 2.6c1.66 0 3 .95 3 2.12s-1.34 2.12-3 2.12-3-.95-3-2.12 1.34-2.12 3-2.12zm-3.3 9.4c-.66 0-1.2-.54-1.2-1.2s.54-1.2 1.2-1.2 1.2.54 1.2 1.2-.54 1.2-1.2 1.2zm6.6 0c-.66 0-1.2-.54-1.2-1.2s.54-1.2 1.2-1.2 1.2.54 1.2 1.2-.54 1.2-1.2 1.2z" />
        </svg>
      );
    case 'docker':
      return (
        <svg className="w-3 h-3 text-[#2496ED]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.983 8.871h-1.996v1.996h1.996V8.871zm-2.495 0H9.492v1.996h1.996V8.871zm-2.495 0H6.997v1.996h1.996V8.871zm-2.496 0H4.501v1.996h1.996V8.871zm0-2.49h1.996v1.996H4.501V6.381zm2.496 0h1.996v1.996H6.997V6.381zm2.495 0h1.996v1.996H9.492V6.381zm2.495 0h1.996v1.996h-1.996V6.381zm-9.98 5.89h1.996v1.996H4.501v-1.996zm2.496 0h1.996v1.996H6.997v-1.996zm2.495 0h1.996v1.996H9.492v-1.996zm2.495 0h1.996v1.996h-1.996v-1.996zm2.495-2.5h1.996v1.996h-1.996V9.771zm2.495 0h1.996v1.996h-1.996V9.771zm-2.495-2.39h1.996v1.996h-1.996V7.381zm0-2.5h1.996v1.996h-1.996V4.881zm-9.98 12.5c-.32 0-.62-.12-.85-.35-.23-.23-.35-.53-.35-.85V14.15h18c1.38 0 2.5-1.12 2.5-2.5v-1.5h1.5c1.38 0 2.5 1.12 2.5 2.5v.5c0 3.31-2.69 6-6 6h-11.3c-.32 0-.62-.12-.85-.35-.23-.23-.35-.53-.35-.85z" />
        </svg>
      );
    case 'microservices':
      return (
        <svg className="w-3 h-3 text-[#A855F7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="18" r="3" />
          <line x1="12" y1="9" x2="6" y2="15" />
          <line x1="12" y1="9" x2="18" y2="15" />
          <line x1="9" y1="18" x2="15" y2="18" />
        </svg>
      );
    case 'eventdrivendesign':
      return (
        <svg className="w-3 h-3 text-[#F97316]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <path d="M12 2a10 10 0 0 1 10 10M12 6a6 6 0 0 1 6 6M12 22a10 10 0 0 1-10-10M12 18a6 6 0 0 1-6-6" />
        </svg>
      );
    case 'systemdesign':
      return (
        <svg className="w-3 h-3 text-[#3B82F6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="9" rx="1" />
          <rect x="14" y="3" width="7" height="5" rx="1" />
          <rect x="14" y="12" width="7" height="9" rx="1" />
          <rect x="3" y="16" width="7" height="5" rx="1" />
          <path d="M10 7.5h4M7 12v4M17 8v4" />
        </svg>
      );
    case 'springboot':
      return (
        <svg className="w-3 h-3 text-[#6DB33F]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.61 14.88c-.83.84-2.05 1.34-3.32 1.54-.7.11-1.42.06-2.1-.14-1-.3-1.83-.97-2.38-1.81-.55-.84-.71-1.87-.46-2.88.24-.96.81-1.81 1.57-2.47a9.38 9.38 0 0 1 3.54-1.88c.95-.23 1.94-.25 2.9-.06.74.15 1.45.47 2 .98.54.51.9 1.2.98 1.93.07.72-.11 1.45-.48 2.07-.38.64-1 .99-1.75.9-.6-.07-1.12-.41-1.42-.92-.3-.51-.31-1.14-.04-1.65.27-.51.78-.85 1.36-.88.29-.02.58.07.79.25.21.18.32.45.3.73-.02.2-.1.38-.25.51a.63.63 0 0 1-.44.17c-.12 0-.24-.04-.33-.12-.05-.05-.12-.07-.19-.06s-.13.06-.15.12c-.06.18.01.37.16.48.24.16.54.21.82.13.28-.08.5-.27.6-.54.1-.27.07-.58-.1-.8a1.3 1.3 0 0 0-.96-.46c-.37 0-.72.16-.94.46a1.32 1.32 0 0 0-.1 1.34c.24.47.74.77 1.28.77.3 0 .59-.09.84-.27.25-.18.41-.46.46-.77.05-.31-.05-.62-.26-.83a1.3 1.3 0 0 0-.91-.39 1.32 1.32 0 0 0-1.28 1.35c.02.5.31.95.77 1.15.46.2.99.15 1.4-.13.28-.19.46-.5.48-.84.02-.34-.14-.66-.41-.86a1.3 1.3 0 0 0-1.57.1c-.26.24-.39.59-.35.94.04.35.24.66.54.83.3.17.67.18.98.02.13-.07.28-.05.39.04.11.09.16.24.12.38a.63.63 0 0 1-.58.45c-.32 0-.62-.12-.85-.35-.23-.23-.35-.53-.35-.85s.12-.62.35-.85a1.2 1.2 0 0 1 1.7 0c.23.23.35.53.35.85s-.12.62-.35.85z" />
        </svg>
      );
    case 'hibernate':
      return (
        <svg className="w-3 h-3 text-[#B7A169]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-3 5h2v4h2V7h2v10h-2v-4h-2v4H9V7z" />
        </svg>
      );
    case 'nestjs':
      return (
        <svg className="w-3 h-3 text-[#E0234E]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1.5l10.5 6v9L12 22.5l-10.5-6v-9L12 1.5zm8.5 7.02L12 3.82l-8.5 4.7v7.96l8.5 4.7 8.5-4.7V8.52zM12 6.5l6 3.5v4l-6 3.5-6-3.5v-4l6-3.5z" />
        </svg>
      );
    case 'express':
    case 'expressjs':
      return (
        <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M7 8h10M7 12h7M7 16h10" />
        </svg>
      );
    case 'node':
    case 'nodejs':
      return (
        <svg className="w-3 h-3 text-[#339933]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1l10.5 6v10L12 23 1.5 17V7L12 1zm0 2.2L3.5 8.2v7.6L12 20.8l8.5-5V8.2L12 3.2zm0 4.3a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9z" />
        </svg>
      );
    case 'redis':
      return (
        <svg className="w-3 h-3 text-[#DC382D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 22 7 22 17 12 22 2 17 2 7" />
          <polyline points="2 7 12 12 22 7" />
          <line x1="12" y1="12" x2="12" y2="22" />
          <line x1="2" y1="12" x2="12" y2="17" />
          <line x1="12" y1="17" x2="22" y2="12" />
        </svg>
      );
    case 'postgresql':
    case 'postgres':
      return (
        <svg className="w-3 h-3 text-[#4169E1]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.06 12.94c-.2-.14-.4-.3-.6-.46.3-.9.4-1.85.3-2.8-.18-1.72-.94-3.32-2.18-4.56a7.93 7.93 0 0 0-5.63-2.34c-.84 0-1.68.13-2.48.38a7.92 7.92 0 0 0-4.5 4.5 7.93 7.93 0 0 0-.38 2.48c0 2.1.82 4.08 2.3 5.56l.24.24v2.86c0 .48.39.87.87.87h1.4c.48 0 .87-.39.87-.87v-2.16c.38.16.78.29 1.19.38v2.65c0 .48.39.87.87.87h1.4c.48 0 .87-.39.87-.87v-2.65c.67-.14 1.32-.4 1.9-.76l.16-.1c.36.14.73.25 1.1.34v3.17c0 .48.39.87.87.87h1.4c.48 0 .87-.39.87-.87v-3.8c.84-.33 1.62-.82 2.27-1.46.22-.22.22-.58 0-.8z" />
        </svg>
      );
    case 'mysql':
      return (
        <svg className="w-3 h-3 text-[#00758F]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 4.24 2 7v10c0 2.76 4.48 5 10 5s10-2.24 10-5V7c0-2.76-4.48-5-10-5zm0 3c4.42 0 8 1.34 8 2.5S16.42 10 12 10 4 8.66 4 7.5 7.58 5 12 5zm0 14c-4.42 0-8-1.34-8-2.5v-2.3c1.55.95 4.55 1.3 8 1.3s6.45-.35 8-1.3v2.3c0 1.16-3.58 2.5-8 2.5zm0-4.5c-4.42 0-8-1.34-8-2.5v-2.3c1.55.95 4.55 1.3 8 1.3s6.45-.35 8-1.3v2.3c0 1.16-3.58 2.5-8 2.5z" />
        </svg>
      );
    case 'mongodb':
      return (
        <svg className="w-3 h-3 text-[#47A248]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1.5C9 4.5 8 9 8 12c0 4.5 3 9 4 10.5 1-1.5 4-6 4-10.5 0-3-1-7.5-4-10.5z" />
        </svg>
      );
    case 'dynamodb':
      return (
        <svg className="w-3 h-3 text-[#4053D6]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L2 6v12l10 5 10-5V6L12 1zm8 15.82L12 20.8l-8-3.98V8.18l8-3.98 8 3.98v8.64zM12 6.5L6 9.5v5l6 3 6-3v-5l-6-3z" />
        </svg>
      );
    case 'rabbitmq':
      return (
        <svg className="w-3 h-3 text-[#FF6600]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1c-1.3 0-2.5 1-2.8 2.3l-.7 3.5c-.3 1.5.5 3 2 3.3.5.1 1 .1 1.5 0 1.5-.3 2.3-1.8 2-3.3l-.7-3.5C14.5 2 13.3 1 12 1zm-5.5 8c-.8 0-1.5.7-1.5 1.5v3.5c0 1.4 1.1 2.5 2.5 2.5h9c1.4 0 2.5-1.1 2.5-2.5v-3.5c0-.8-.7-1.5-1.5-1.5H6.5z" />
        </svg>
      );
    case 'kafka':
      return (
        <svg className="w-3 h-3 text-[#E0E0E0]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zM9 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm0 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm4-4a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" />
        </svg>
      );
    case 'awslambda':
    case 'lambda':
      return (
        <svg className="w-3 h-3 text-[#FF9900]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 2h3l6 14.5L21.5 2h2.5L16.5 22h-3L7 2z" />
        </svg>
      );
    case 'stepfunctions':
      return (
        <svg className="w-3 h-3 text-[#FF9900]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="9" y="2" width="6" height="4" rx="1" />
          <rect x="2" y="14" width="6" height="4" rx="1" />
          <rect x="16" y="14" width="6" height="4" rx="1" />
          <path d="M12 6v4M12 10H5v4M12 10h7v4" />
        </svg>
      );
    case 'eventbridge':
      return (
        <svg className="w-3 h-3 text-[#FF9900]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="5" cy="6" r="2" />
          <circle cx="19" cy="6" r="2" />
          <circle cx="12" cy="18" r="2" />
          <path d="M5 8v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8M12 14v2" />
        </svg>
      );
    case 's3':
      return (
        <svg className="w-3 h-3 text-[#FF9900]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      );
    case 'sqs':
      return (
        <svg className="w-3 h-3 text-[#FF9900]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="4" height="10" rx="1" />
          <rect x="8" y="7" width="4" height="10" rx="1" />
          <rect x="14" y="7" width="4" height="10" rx="1" />
          <path d="M20 12h2M18 10l2 2-2 2" />
        </svg>
      );
    case 'sns':
      return (
        <svg className="w-3 h-3 text-[#FF9900]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      );
    case 'kinesis':
      return (
        <svg className="w-3 h-3 text-[#FF9900]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 17L12 22L22 17M2 12L12 17L22 12M12 2L2 7L12 12L22 7L12 2Z" />
        </svg>
      );
    case 'terraform':
      return (
        <svg className="w-3 h-3 text-[#844FBA]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.44 0v7.56h7.56V0H1.44zm9 4.32v7.56h7.56V4.32h-7.56zm9 4.32V16.2h7.56V8.64h-7.56zm-18 4.32v7.56h7.56V12.96H2.44z" />
        </svg>
      );
    case 'elasticsearch':
    case 'elastic':
      return (
        <svg className="w-3 h-3 text-[#005571]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      );
    case 'gitlab':
    case 'gitlabcicd':
      return (
        <svg className="w-3 h-3 text-[#FC6D26]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.955 13.587l-1.342-4.135a.653.653 0 0 0-.256-.357.66.66 0 0 0-.756.037L12 16.32 2.4 9.13a.662.662 0 0 0-.756-.037.653.653 0 0 0-.256.357L.045 13.59a.654.654 0 0 0 .235.736l11.4 8.52a.663.663 0 0 0 .76 0l11.4-8.52a.654.654 0 0 0 .235-.736z" />
        </svg>
      );
    case 'junit':
    case 'junitmockito':
    case 'mockito':
      return (
        <svg className="w-3 h-3 text-[#25A162]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      );
    case 'graphql':
    case 'rest':
    case 'restgraphql':
      return (
        <svg className="w-3 h-3 text-[#E10098]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
          <circle cx="12" cy="12" r="3" />
          <line x1="12" y1="2" x2="12" y2="22" />
          <line x1="2" y1="8.5" x2="22" y2="15.5" />
          <line x1="2" y1="15.5" x2="22" y2="8.5" />
        </svg>
      );
    case 'react':
      return (
        <svg className="w-3 h-3 text-[#61DAFB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );
    case 'next':
    case 'nextjs':
      return (
        <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.33 18.25l-4.9-7.23V18h-2.12V8.4h2.12l4.82 7.1V8.4h2.08v9.85z" />
        </svg>
      );
    case 'html':
    case 'html5':
      return (
        <svg className="w-3 h-3 text-[#E34F26]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17.3 5.7H7.1l.3 3.1h11.1l-.8 8.5-5.7 1.9-5.7-1.9-.4-4h2.7l.2 2.2 3.1 1 3.1-1 .3-3.6H5.4L4.5 3h14.5l-.2 2.7z" />
        </svg>
      );
    case 'css':
    case 'css3':
      return (
        <svg className="w-3 h-3 text-[#1572B6]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm15.8 5.7H7.1l.3 3h8.3l-.3 3.3-3.4 1.1-3.4-1.1-.2-2H5.7l.4 4.5 5.9 1.9 5.9-1.9.7-7.8H8.8l-.2-2h8.9l-.2.9z" />
        </svg>
      );
    case 'tailwind':
    case 'tailwindcss':
      return (
        <svg className="w-3 h-3 text-[#06B6D4]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.91.23 1.57.9 2.29 1.62C13.673 10.6 15.228 12 18.8 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.91-.23-1.57-.9-2.29-1.62C17.129 6.2 15.574 4.8 12.001 4.8zm-6.8 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.91.23 1.57.9 2.29 1.62C7.873 17.8 9.428 19.2 13 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.91-.23-1.57-.9-2.29-1.62C11.329 13.4 9.774 12 5.201 12z" />
        </svg>
      );
    case 'framer':
    case 'framermotion':
      return (
        <svg className="w-3 h-3 text-[#0055FF]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0h12v12H0V0zm12 12h12v12H12V12zm0-12h12l-12 12V0zM0 12h12l-12 12V12z" />
        </svg>
      );
    case 'c':
    case 'cpp':
      return (
        <svg className="w-3 h-3 text-[#00599C]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 11h-2v2h-2v-2h-2v-2h2V9h2v2h2v2zm5-1h-2v2h-2v-2h-2v-2h2V9h2v2h2v2z" />
        </svg>
      );
    case 'aws':
      return (
        <svg className="w-3 h-3 text-[#FF9900]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.88 12.81c-1.12.92-2.73 1.39-4.32 1.39-1.95 0-3.6-.68-4.54-1.91-.42-.55-.66-1.22-.66-1.92 0-.69.24-1.35.66-1.9 1-1.26 2.65-1.91 4.54-1.91 1.58 0 3.2.47 4.32 1.39.2.16.22.46.06.66l-.77.94c-.15.18-.42.2-.6.04-.68-.53-1.63-.84-2.58-.84-1.33 0-2.45.47-3.07 1.33-.24.33-.37.74-.37 1.18 0 .43.13.84.37 1.18.62.86 1.74 1.33 3.07 1.33.95 0 1.9-.31 2.58-.84.18-.16.45-.14.6.04l.77.94c.16.2.14.5-.06.66z" />
        </svg>
      );
    case 'stockfish':
      return (
        <svg className="w-3 h-3 text-[#E2A638]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5Z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      );
    case 'webspeechapi':
      return (
        <svg className="w-3 h-3 text-[#EA4335]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" y1="19" x2="12" y2="22" />
        </svg>
      );
    case 'algorithms':
    case 'datastructures':
      return (
        <svg className="w-3 h-3 text-[#A855F7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 20h20M5 17V5h14v12" />
          <circle cx="12" cy="11" r="2" />
        </svg>
      );
    case 'serverless':
      return (
        <svg className="w-3 h-3 text-[#FF9900]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5Z" />
          <path d="M12 12L2 17l10 5 10-5-10-5Z" />
        </svg>
      );
    case 'backstage':
      return (
        <svg className="w-3 h-3 text-[#8A2BE2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case 'ffmpeg':
      return (
        <svg className="w-3 h-3 text-[#00DD00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="23 7 16 12 23 17 23 7" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
      );
    default:
      // Fallback icon for abstract concepts (system design, microservices, concurrency, CI/CD, etc.)
      return (
        <svg className="w-3 h-3 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
  }
};

interface TechBadgeProps {
  name: string;
  interactive?: boolean;
}

export const TechBadge = ({ name, interactive = true }: TechBadgeProps) => {
  const icon = getTechIcon(name);

  if (!interactive) {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider rounded-full bg-white/[0.03] text-white/75 border border-white/[0.06] select-none">
        {icon}
        <span>{name}</span>
      </span>
    );
  }

  return (
    <motion.span
      whileHover={{
        scale: 1.03,
        y: -1,
        borderColor: 'rgba(255, 107, 53, 0.25)',
        boxShadow: '0 0 10px rgba(255, 107, 53, 0.12)',
        backgroundColor: 'rgba(255, 107, 53, 0.04)',
      }}
      transition={{ duration: 0.15 }}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider rounded-full bg-white/[0.03] text-white/75 border border-white/[0.06] hover:text-white cursor-default select-none transition-colors"
    >
      {icon}
      <span>{name}</span>
    </motion.span>
  );
};
