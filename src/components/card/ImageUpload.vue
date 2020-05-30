<template>
  <div class="row">
    <h4>Upload image:</h4>
    <input
      type="file"
      class="form-control-file"
      id="fileUpload"
      @change="uploadFile"
    />
    <img id="image_preview" />
    <progress value="0" max="100" id="progressBar"></progress>
    <br />

    <button type="button" id="setImageButton" style="display:none">
      Set Image
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: "",
      message: "",
    };
  },
  methods: {
    //   store in web storage until uploaded?
    uploadFile(event) {
      const reader = new FileReader();
      reader.onload = function() {
        const preview = document.getElementById("image_preview");
        preview.src = reader.result;
      };
      reader.onerror = function() {
        this.message =
          "There was a problem uploading your image, please try again";
      };
      reader.readAsDataURL(event.target.files[0]);

      // removes set image button each time the user click on image upload input so it can not be set before upoad
      // document.getElementById('setImageButton').style.display = 'none';
      // // select uploaded file
      // this.file = event.target.files[0];
      // var storageRef = Firebase.storage().ref('user_uploads/' + this.file.name);
      // // storageRef.put(this.file)
      // var upload = storageRef.put(this.file);
      // // Create thumbnail
      // var reader = new FileReader();
      // reader.readAsDataURL(this.file);
      // reader.onload = function(e) {
      //   document.getElementById('image').src = e.target.result;
      // }
      // // this section to be added for progress bar:
      // upload.on('state_changed', function (snapshot) {
      //   var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      //   document.getElementById('progressBar').value = progress;
      //   if(progress === 100) {
      //     document.getElementById('setImageButton').style.display = 'inline-block';
      //   }
      // });
    },
    setImage: function() {
      //   this.$emit("displayImageChanged", this.file.name);
    },
  },
};
</script>

<style scoped>
img {
  max-width: 200px;
}
</style>
