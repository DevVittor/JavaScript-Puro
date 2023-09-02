const footer = `<div class='flex justify-between items-center bg-black pt-[10px] pb-[10px] pr-[20px] pl-[20px]'>
<div class="">
    <span class='text-base font-medium text-white'>Todos os direitos reservados &copy; 2020-2025</span>
</div>
<div class="">
    <nav>
        <ul class='flex items-center gap-2'>
            <li><a href="#" target="_blank"><i class="text-white text-[20px] fa-brands fa-facebook"></i></a></li>
            <li><a href="#" target="_blank"><i class="text-white text-[20px] fa-brands fa-square-instagram"></i></a></li>
            <li><a href="#" target="_blank"><i class="text-white text-[20px] fa-brands fa-square-x-twitter"></i></a></li>
        </ul>
    </nav>
</div>
</div>`;

document.getElementById('footer').innerHTML += footer;