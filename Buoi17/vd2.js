const myName = "Nguyen    Van    B     ";
                    //0123456789


// 1. Upper Case : in toàn bộ hoa

console.log(myName.toUpperCase());

// 2. Lower Case : in toàn bộ thường

console.log(myName.toLowerCase());

// 3. trim : xóa đầu xóa cuối

console.log(myName.trim());

// 4. replace : thay thế chữ đầu bằng chữ sau

console.log(myName.trim().replace("A","Van"));
console.log(9999,myName.replace(/\s+/g," "));

// 5. indexOf

console.log(myName.trim().indexOf('V'));

// 6. last indexOf

console.log(myName.trim().lastIndexOf('B'));

// 7. includes
console.log(myName.trim().includes("V"));

// 8. split

console.log(myName.trim().split(" "));

// 9. charAt

console.log(9,myName.charAt(6));

// 10. charCodeAt

console.log(myName.charAt(6).charCodeAt());

// 11.substring, start, end

console.log(myName.substring(0,3));


