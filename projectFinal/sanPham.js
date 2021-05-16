function TaoDoiTuongSanPham(hinhAnh,ten,giaGoc,phanTramGiamGia,id){
    var sanPham = new Object();

    sanPham.hinhAnh = hinhAnh;
    sanPham.ten = ten;
    sanPham.giaGoc = giaGoc;
    sanPham.phanTramGiamGia = phanTramGiamGia;
    
    if(id != null) {
        sanPham.id = id;
    }
    else {
        sanPham.id = taoId();
    }

    sanPham.tinhGiaBan = function () {
        var giaBan = this.giaGoc * (1 - this.phanTramGiamGia);
        return giaBan;
    }

    sanPham.toJson = function () {
        var json = JSON.stringify(this);
        return json;
    }

    sanPham.fromJSON = function () {
        var doiTuongDayDu = new Object();
        var doiTuong = JSON.parse(json);
        var doiTuongDayDu = TaoDoiTuongSanPham(doiTuong.hinhAnh,doiTuong.ten,doiTuong.giaGoc,doiTuong.phanTramGiamGia);
        return doiTuongDayDu;
    }

    sanPham.fromJSONs = function (jsonDanhSachSanPham) {
        var danhSachSanPhamDayDu = new Array();
        var danhSachSanPham = JSON.parse(jsonDanhSachSanPham);

        for(var i = 0;i < danhSachSanPham.length; i++){
            var sanPham = danhSachSanPham[i];
            var sanPhamDayDu = TaoDoiTuongSanPham(doiTuong.hinhAnh,doiTuong.ten,doiTuong.giaGoc,doiTuong.phanTramGiamGia);
            danhSachSanPhamDayDu[i] = sanPhamDayDu;
        }
        return danhSachSanPhamDayDu;
    }

    return sanPham;
}
function chuyenDanhSachDoiTuongThanhHTML(danhSachSanPham) {
    var HTMLDanhSachSanPham ='<div class="items">';
    for(var i = 0;i < danhSachSanPham.length;i++) {
        var sanPham = danhSachSanPham[i];
        var htmlSanPham = chuyenDoiTuongSanPhamThanhHTML(sanPham);
        HTMLDanhSachSanPham = HTMLDanhSachSanPham + htmlSanPham;
    }
    HTMLDanhSachSanPham = HTMLDanhSachSanPham + '</div>';
    return HTMLDanhSachSanPham;
}
function chuyenDoiTuongSanPhamThanhHTML(sanPham){
    var sanPham = TaoDoiTuongSanPham(sanPham.hinhAnh,sanPham.ten,sanPham.giaGoc,sanPham.phanTramGiamGia,sanPham.id);
    console.log(sanPham);
    var html ='';
    html += '<div class="item">'
    html += '<div class="item-thumb">'
    html += '<img src="' + sanPham.hinhAnh + '" alt="">'
    html += '</div>'
    html += '<h2 class="item-title">' + sanPham.ten + '</h2>'
    html += '<div class="item-price">'
    html += '<span class="item-price-origin">' + sanPham.giaGoc + ' đ</span>'
    html += '<span class="item-price-sale">' + sanPham.tinhGiaBan() + ' đ</span>'
    html += '</div>'
    html += '<button onclick="onClickDuaVaoGioHang(\'' + sanPham.id + '\')" class="btn btn-primary">Đưa vào giỏ hàng</button>'
    html += '</div>'
    return html;
}

function truyXuatSanPhamTheoId(id) {
    var jsonDanhSachSanPham = localStorage.getItem('danhSachSanPham');
    var danhSachSanPham = JSON.parse(jsonDanhSachSanPham);

    for(var i = 0; i < danhSachSanPham.length; i++) {
        var sanPhamHienTai = danhSachSanPham[i];
        if(sanPhamHienTai.id == id){
            return sanPhamHienTai;
        }
    }
}

function laySanPhamTheoId(idSanPham) {
    var sanPham = new Object();
    var danhSachSanPham = layDanhSachSanPhamDuoiLocalStorage();
    for(var i = 0;i < danhSachSanPham.length;i++) {
        var sanPhamHienTai = danhSachSanPham[i];
        if(sanPhamHienTai.id == idSanPham) {
            sanPham = sanPhamHienTai;
        }

        sanPham = TaoDoiTuongSanPham(sanPham.hinhAnh,sanPham.ten,sanPham.giaGoc,sanPham.phanTramGiamGia,sanPham.id);
    }
    return sanPham;
}

function layDanhSachSanPhamDuoiLocalStorage() {
    var jsonDanhSachSanPham = localStorage.getItem('danhSachSanPham');
    var danhSachSanPham = JSON.parse(jsonDanhSachSanPham);
    return danhSachSanPham;
}