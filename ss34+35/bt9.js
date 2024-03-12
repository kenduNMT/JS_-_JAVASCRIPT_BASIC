var mucDangChinhSua;

        function chinhSua(nutChinhSua) {
            var hang = nutChinhSua.parentNode.parentNode;
            var ten = hang.children[0].textContent;
            document.getElementById('nhapLieu3').value = ten;
            mucDangChinhSua = hang;
        }

        function chinhSuaMuc() {
            var giaTriMoi = document.getElementById('nhapLieu3').value;
            mucDangChinhSua.children[0].textContent = giaTriMoi;
            document.getElementById('nhapLieu3').value = '';
        }