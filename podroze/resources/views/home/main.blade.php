<section class="main d-flex flex-grow-1">
    <div class="d-flex flex-grow-1 flex-column my-auto container">
        <div class="w-25 mx-auto">
            <img class="img img-fluid" src="./static/images/Logo_dinozaur.png" alt="logo">
        </div>    
        <div class="mx-auto">
            <h2 class="text-dark font-weight-bolder">Are you ready for mindblowing trip?</h2>
        </div>    
    
        <div class="w-100 h-50 mx-auto bg-dark rounded" id='trip-search'>
            <form action="/searchtrip" method="POST" class="m-4 p-3 form-row">
                    <div class="col-12 col-lg-3">
                        <input type="text" class="form-control" placeholder="Start">
                    </div>
                    <a href="#" class="my-3 my-lg-auto mx-auto text-success">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"/>
                    </svg>
                    </a>
                    <div class="col-12 col-lg-3 mb-3 mb-lg-0">
                        <input type="text" class="form-control" placeholder="Destination">
                    </div>
                    <div class="col-12 col-lg-3">
                        <input type="text" class="form-control" placeholder="Choose Date">
                    </div>
                        <button class="btn btn-success mx-auto my-3 my-lg-0 rounded-pill px-5" type="submit">Search</button>
            </form>
        </div>
    </div>
</section>