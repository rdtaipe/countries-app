import { useEffect,useState,useRef} from 'react';
import mp3File from '../Assets/Dreeep.mp3';


function Audio() {
    const audioRef = useRef(null);
    const [play, setPlay] = useState(false);

    useEffect(() => {
      
        window.addEventListener('click', (e) => {
            if(!play){
                audioRef.current.play()
                audioRef.current.loop = true     
                console.log("play")
                setPlay(true)
                window.addEventListener('mousemove',(e) => {
                    var y = e.clientY/100/10
                    audioRef.current.volume = y/4
                })
            }
        })


        
    }, [play])
    

    return (
        <div>
           
            <audio ref={audioRef} >
                <source src={mp3File} type="audio/mp3" />
            </audio>
            
        </div>
    )
}


export default Audio