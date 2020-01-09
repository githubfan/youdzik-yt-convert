const player = new window.Audio();
    // const audioSream = await YtConvert.ytToMp3(ytUrl);

    // console.log(typeof audioSream);


    // var streamURL = window.URL.createObjectURL(new Blob([audioSream], { type: 'audio/mp3' }));

    // console.log(streamURL);


    // player.src = streamURL;
    // let playPromise = player.play();


    // if (playPromise !== undefined) {
    //   playPromise
    //     .then(_ => {
    //       // Automatic playback started!
    //       // Show playing UI.
    //       console.log("audio played auto");
    //     })
    //     .catch(error => {
    //       // Auto-play was prevented
    //       // Show paused UI.
    //       console.log(error);

    //       console.log("playback prevented");
    //     });
    // }

    // const link = document.createElement('a');
    // link.href = url;
    // link.setAttribute('download', 'audio.mp3'); //or any other extension
    // document.body.appendChild(link);
    // link.click();

    const context = new (window.AudioContext || window.webkitAudioContext)();
    // Fetch the MP3 file from the server
    fetch(`https://box-myserver.unubo.app/api/yt/mp3/download?url=https://www.youtube.com/watch?v=7Zl2AT5tTbI`)
      // Return the data as an ArrayBuffer
      .then(response => response.arrayBuffer())
      // Decode the audio data
      .then(buffer => context.decodeAudioData(buffer))
      .then(decodedData => {
        console.log(decodedData);

        var source = context.createBufferSource(); // creates a sound source
        source.buffer = decodedData;                    // tell the source which sound to play
        source.connect(context.destination);       // connect the source to the context's destination (the speakers)
        source.start(0);                           // play the source now
        // note: on older systems, may have to use deprecated noteOn(time);        
      })
      .catch(e => {
        console.log(e);

      })