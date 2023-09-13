<script>
        window.onload = function(){
            $.get("nav.html", function(data){
                $("#header").html(data);
            })
        }
    </script>