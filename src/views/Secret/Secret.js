import React, { Component } from 'react';
import Dropzone from 'react-dropzone'

class Secret extends Component {
  constructor() {
    super()
    this.state = { disabled: true, files: [] }
  }

  dupilate(a, b) {
    let match = [];
    if (Array.isArray(b) === true) {
      //console.log('array upload?' + Array.isArray(b));
      //return true;
    }

    for (let i = 0; i < b.length; i++) {
      if (Array.isArray(a) === true) {
        //console.log('array files?' + Array.isArray(a));
        a.map(f => { match.push(checker(f,b[i])); })
       }
    }

    let dupe = match.find(f => {return f === 'void' });
      if (dupe === undefined) {
        console.log(match)

        function onlyUnique(value, index, self) {
          return self.indexOf(value) === index;
        }
        return match.filter(onlyUnique);   
      }
      else
      {
        return ['void'];
      }
   
 
    function checker(a,b) {
      if (a.name === b.name) {
        if (a.size === b.size) {
          if (a.type === b.type) {
            if (a.lastModified === b.lastModified) {
              return 'void';
            } else {
              return b;
            }
          } else {
            return b;
          }
        } else {
          return b;
        }
      } else {
        return b;
      }
    }
    
  }

  onDrop(upload) {
    if (this.state.files.length > 0) {
      let dupe = this.dupilate(this.state.files, upload);
      console.log(dupe);
      let hohohoho = this.state.files.slice();
      if (dupe.length > 1) {
        
        dupe.map(u => {
          //console.log(u)
          if (u !== "void") {
            console.log(hohohoho,'u? '+u);
            hohohoho.concat(u);
          }
        })
        this.setState({ files: hohohoho });
        console.log(this.state.files)

      } else {
        if (dupe !== null) {
          if (dupe[0] === "void") {
            alert('dupe');
          } else {
            console.log(dupe[0]);
            this.setState({ files: hohohoho.concat(dupe[0]) });
          }
        } else {
          console.log(this.state.files.map(f => { return f; }))
          let hohohoho = this.state.files.slice().concat(upload);
          this.setState({ files: hohohoho });
          console.log(this.state.files.map(f => { return f; }))
        }
      }
    }
    else
    {
      this.setState({
        files: upload
      });
    }
  }

  render() {
    return (
      <section>
        <h2 className="secretH2">upload your secret files</h2>
        <div className="dropzone">
          <Dropzone
            className="styleZone"
            onDrop={this.onDrop.bind(this)}>
            <figure>
              <i className="icon-cloud-upload"></i>
            </figure>
            <p>Try dropping some files here, or click to select files to upload.</p>
          </Dropzone>
        </div>
        <aside className="fileList">
          <h2>Dropped files: {this.state.files.length}</h2>
          <ul>
            {
              this.state.files.map(f =>
                <li key={f.name}>{f.name} - {f.size} bytes
                  <div>
                    preview:<img
                      className="previewer"
                      src={f.preview}></img>
                  </div>
                </li>)
            }
          </ul>
        </aside>
      </section>
    )
  }
}

export default Secret;
