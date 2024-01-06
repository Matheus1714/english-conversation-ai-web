export const uploadAudio = async () => {
    try{
        const audioPlayer = document.querySelector('#audioPlayer')
        
        const audioURL = audioPlayer.src
        const responseAudio = await fetch(audioURL)
        const audioBlob = await responseAudio.blob()
        const formData = new FormData()

        formData.append('audio', audioBlob, 'audio.wav')

        const response = await fetch('http://192.168.15.147:5000/upload', {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin':'*'
            },
            body: formData
        })

        if(!response.ok){
            console.error('Erro na requisição:', response.statusText);
            return;
        }
        return response
    }catch(error){
        console.error(`Ocorreu um erro: ${String(error)}`)
    }
}
