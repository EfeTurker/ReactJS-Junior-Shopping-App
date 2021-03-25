function Urunler(){
    return(
        <div className="alisveris">
            <div className="num">
                <div className="numcontent">{0}</div>
            </div>
            <div className="buttons">
                <button onClick={
                    function ya(p){
                    var sepet=0;
                    var lengthh = document.getElementsByClassName("add").length;
                    for(var i=0;i<lengthh;i++){
                        if(document.getElementsByClassName("add")[i] == p.nativeEvent.path[1] || document.getElementsByClassName("add")[i] == p.nativeEvent.path[0]){
                            document.getElementsByClassName("numcontent")[i].innerHTML++
                            if(document.getElementsByClassName("numcontent")[i].innerHTML==1){
                                document.getElementsByClassName("sepet")[0].innerHTML++;
                                
                            }
                        }
                    }
                }}className="add">
                    <i className="fa fa-plus-circle"></i>
                </button>
                <button onClick={(p) => {
                    var lengthh = document.getElementsByClassName("remove").length;
                    for(var i=0;i<lengthh;i++){
                        if(document.getElementsByClassName("remove")[i] == p.nativeEvent.path[1] || document.getElementsByClassName("remove")[i] == p.nativeEvent.path[0]){
                            if(document.getElementsByClassName("numcontent")[i].innerHTML > 0){
                            document.getElementsByClassName("numcontent")[i].innerHTML--;
                            if(document.getElementsByClassName("numcontent")[i].innerHTML==0){
                                document.getElementsByClassName("sepet")[0].innerHTML--;
                                
                            }
                        }}
                    }
                }}className="remove">
                    <i className="fa fa-minus-circle"></i>
                </button>
            </div>
        </div>
    )
}
export default Urunler;