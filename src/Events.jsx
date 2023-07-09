import React from 'react' 
class Events extends React.Component{

constructor(props){
    super(props)
    this.state = {

        name: 'sunday'
    }
}

clickFunction = () => {
    this.setState({

        name: 'sunday'
    })
}




render() {
    return(
        <>
        <div className="outer-box"> 
        
        <div className="main-box-col">
            <div className="price-box1">
                <div className="text-main-col">
                <h4 className="free">Free</h4>
                <div className="text2">For freelancers</div>
                <h1 className="dolar">$0</h1>
                
                <div className="border-main-col">
                <div className="border-color"> 
                <i class="fa fa-check"></i>
                <div className="user-text">1 users</div>
                </div>
                </div>
                
                <div className="border-main-col2">
                <div className="border-color2">
                <i class="fa fa-check"></i>
                <div className="user-text2">10 downloads per month</div>
                </div>
                     </div>
                     
                <div className="border-main-col2">
                <div className="border-color3">
                <i class="fa fa-check"></i>
                <div className="user-text3">Raster files</div>
                </div>
                </div>
            </div>
            
            <h1>Free {this.state.name}</h1>
            <div className="white-butt-box">
            <button onClick={this.clickFunction} className='box1-color-but1'>Subscribe</button>
            </div>
            </div>
            <div className="price-box2">
                
            <div className="tet-blue-color">
            <h4 className="pro">Pro</h4>
            <div className="blue-box-text">For agencies</div>
            <h1 className="dolar-blue">$40</h1>
            
            <div className="border-box2-col">
            <div className="box2-border"> 
            
            <i class="fa fa-check"></i>
            <div className="user-text-blue">3 users</div>
            
            </div>
            </div>
            
            <div className="text-blue-color2">
            <div className="box2-border2">
                
            <i class="fa fa-check"></i>
            <div className="user-text-blue2">Unlimited downloads</div>
         </div> 
            </div>
            
            <div className="text-blue-color3">
            <div className="box2-border3">
                
            <i class="fa fa-check"></i>
            <div className="user-text-blue3">Fully-editable flies</div>
            </div>
            </div>

            
            <div className="text-blue-color4">
            <div className="box2-border4">
                
            <i class="fa fa-check"></i>
            <div className="user-text-blue4">Custom packs</div>
            </div>
            </div>
            
            <div className="text-blue-color5">
            <div className="box2-border5">
                
            <i class="fa fa-check"></i>
            <div className="user-text-blue5">200+ custom icons</div>
            </div>
            </div>
            </div>

            <div className="white-butt-box">
            <button className="box2-color-but1">Subscribe</button>
</div>
        </div>
        </div>
       </div>
      
        </>
    )
    
}

}



export default Events