export default word => word.replace(/(-\w)/g, m => m[1].toUpperCase());
