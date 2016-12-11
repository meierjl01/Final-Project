import React from 'react';
import Dropzone from 'react-dropzone';
import $ from 'jquery';
import config from '../../config';
import store from '../../store';
import { browserHistory } from 'react-router';

export default React.createClass({
  getInitialState() {
    return {
      files: [],
      user: {}
    }
  },
  componentDidMount() {
    store.users.fetch({url: 'https://api.backendless.com/v1/data/users/'+this.props.params.id});
    store.users.on('update change', this.updateState);
  },
  componentWillUnmount() {
    store.users.off('update change', this.updateState);
  },
  render() {
    return (
      <div>
      <div className="heading">Add a Profile Image</div>
      <div className="add-image-container">
        <div className="dropzone">
          <Dropzone ref={(node) => { this.dropzone = node; }} onDrop={this.onDrop}>
          <div>Drop an image file here or click to select files to upload.</div>
          </Dropzone>
        </div>
        <input type="button" onClick={this.onOpenClick} value="Open Dropzone" />
        <div key={this.state.file}>{this.state.files.map((file, i) => <img src={file.preview} key={i}/> )}</div>
        <input type="button" onClick={this.upload} value="Save Image"/>
      </div>
      </div>
    )
  },
  onDrop(acceptedFiles, rejectedFiles) {
    this.setState({files: acceptedFiles});
  },
  onOpenClick() {
    this.dropzone.open();
  },
  updateState() {
    this.setState({user: store.user.toJSON()});
  },
  upload() {
    let fd = new FormData();
    fd.append('upload', this.state.files[0])
    $.ajax({
      type: 'POST',
      data: fd,
      processData: false,
      contentType: false,
      url: 'https://api.backendless.com/v1/files/'+this.state.files[0].name,
      success: (response) => {
        response = JSON.parse(response);
        store.user.addPhoto(response.fileURL);
        browserHistory.push('/user/'+this.props.params.id);
      }
    })
  }
});
