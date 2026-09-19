// 1. Fungsi untuk MEMBUAT atau MENYIMPAN cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    // "path=/" memastikan cookie bisa diakses di semua halaman GitHub Pages Anda
    // "SameSite=Lax" adalah standar keamanan modern untuk browser
    document.cookie = name + "=" + (value || "")  + expires + "; path=/; SameSite=Lax";
}

// 2. Fungsi untuk MEMBACA cookie yang ada
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// 3. Fungsi untuk MENGHAPUS cookie
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; SameSite=Lax';
}
