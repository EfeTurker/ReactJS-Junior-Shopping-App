function Content(){
    return(
        <div className="contentcontainer">
            <button onClick={
                function yap(){
                    var lengthh = document.getElementsByClassName("remove").length;
                    for(var i=0; i<lengthh;i++){
                        document.getElementsByClassName("numcontent")[i].innerHTML=0;
                    }
                    document.getElementsByClassName("sepet")[0].innerHTML=0;
                }
            } className="refreshbtn">
                <i style={{color:"white",fontSize:"1.2em"}} className="fas fa-sync"></i>
            </button>
        </div>
    )
}

export default Content;