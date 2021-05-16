var keyLocalStorageItemGioHang = 'danhSachItemGioHang';

// function layGioHangTuLocalStorage() {
//     var gioHang = new Array();
//     var jsonGioHang = localStorage.getItem(keyLocalStorageItemGioHang);

//     if (jsonGioHang != null) {
//         gioHang = JSON.parse(jsonGioHang);
//     }
//     return gioHang;
// }

// function themSanPhamVaoGioHang(idSanPham,soLuong) {
//     var gioHangSauKhiDuocThem = gioHang;
//     var itemGioHang = TaoDoiTuongItemGioHang(idSanPham,1);

//     console.log(gioHang);
//     gioHangSauKhiDuocThem.push(itemGioHang);

//     return gioHangSauKhiDuocThem;
// } 

// function luuGioHangVaoLocalStorage(gioHang) {
//     var jsonGioHang = JSON.stringify(gioHang);

//     localStorage.setItem('gioHang',jsonGioHang);
// }

function TaoDoiTuongItemGioHang(idSanPham,soLuong){
    var itemGioHang = new Object();
    itemGioHang.idSanPham = idSanPham;
    itemGioHang.soLuong = soLuong;
    return itemGioHang;
}
function layDanhSachItemGioHang() {
    var danhSachItemGioHang = new Array();
    var jsonDanhSachItemGioHang = localStorage.getItem(keyLocalStorageItemGioHang);

    if(jsonDanhSachItemGioHang != null) {
        danhSachItemGioHang = JSON.parse(jsonDanhSachItemGioHang);
    }
    return danhSachItemGioHang;
}

function luuDanhSachItemGioHangVaoLocalStorage(danhSachItemGioHang) {
    var jsonDanhSachItemGioHang = JSON.stringify(danhSachItemGioHang);
    localStorage.setItem(keyLocalStorageItemGioHang,jsonDanhSachItemGioHang);

}

console.log(layDanhSachItemGioHang());

