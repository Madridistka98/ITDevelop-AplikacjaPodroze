<div id="maps-app" class="container-fluid flex-grow-1  d-flex flex-column">
    <div class="row flex-grow-1">
        <div class="d-flex flex-column col-md-3 col-12 bg-dark ">
            <a href="{{ url('/') }}" class="btn btn-secondary w-100">
                <img src="./static/images/dino_mapa.png" alt="logo_dinozaur" class="img img-fluid w-25">
            </a>
            <div class="d-flex flex-row  justify-content-around mx-2 my-4">
                <a href="#" class="btn btn-secondary m-2 p-1">
                        <img class="img img-fluid p-1" src="./static/images/icons/samolot_1.png" alt="samolot">
                    </a>
                    <a href="#" class="btn btn-secondary m-2 p-1">
                        <img class="img img-fluid p-1" src="./static/images/icons/rower_1.png" alt="rower">
                    </a>
                    <a href="#" class="btn btn-secondary m-2 p-1">
                        <img class="img img-fluid p-1" src="./static/images/icons/auto_1.png" alt="auto">
                    </a>
                    <a href="#" class="btn btn-secondary m-2 p-1">
                        <img class="img img-fluid p-1" src="./static/images/icons/train_1.png" alt="train">
                    </a>
            </div>
            <div class="bg-secondary rounded p-4">
                <form action="#" method="GET" class="d-flex flex-column">
                    <div class="form-group">
                        <input type="text" placeholder="Start" class="form-control" id="startPoint">
                    </div>
                    <div class="form-group d-flex flex-direction-row">
                        <a href="#" class="mr-auto my-3 my-lg-auto ">
                            <img class="img img-fluid" src="./static/images/icons/dodaj_1.png" alt="add">
                        </a>
                        <a  href="#" class="rotated-90 my-3 my-lg-auto ml-auto text-success" >
                            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-left-right"
                    viewBox="0 0 16 16"
                >
                    <path
                        fillRule="evenodd"
                        d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"
                    />
                </svg>
                        </a>
                    </div>
                    <div class="form-group">
                        <input type="text" placeholder="Destination" class="form-control" id="destinationPoint">
                    </div>
                </form>
            </div>

            <a href="#" class="btn btn-success rounded-pill mx-auto my-4 px-5">Start</a>

            @guest
                            @if (Route::has('login'))
                            @endif
                        @else
                        <div class="d-flex flex-column">
                            <a href="#" class="btn btn-secondary rounded-pill mx-auto my-4 px-5 w-100 ">Save in the calendar</a>
                            <a href="#" class="btn btn-secondary rounded-pill mx-auto my-4 px-5 w-100 ">Add a friend</a>
                        </div>
                        @endguest
            
            
        </div>
        <div class="col-md-7 col-12" id="map">
            <!-- <gmap-map
                :center="{lat:10,lng:10}"
                :zoom="7"
            >
                <gmap-marker
                    :position="{lat:10,lng:10} "                  
                    :clckable="true"
                    :draggable="false"
                >
                </gmap-marker>
            </gmap-map>
        </div> -->
    </div>
</div>