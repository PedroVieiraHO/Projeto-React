const icons = {};

const requireIcons = import.meta.glob('./*.jsx', { eager: true });

for (const path in requireIcons) {
  const iconName = path.replace('./', '').replace('.jsx', '');
  icons[iconName] = requireIcons[path].default;
}

export default icons;




