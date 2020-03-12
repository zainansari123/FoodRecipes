function openregister(){
    $('#content').empty().append('<div class="row">\
    <form class="col s12">\
      <div class="row">\
        <div class="input-field col s12">\
          <input placeholder="Event title" id="title" type="text" class="validate">\
          <label for="title">Title</label>\
        </div>\
      </div>\
      <div class="row">\
        <div class="input-field col s6">\
          <select>\
            <option value="" disabled selected>Choose event type</option>\
            <option value="1">Option 1</option>\
            <option value="2">Option 2</option>\
            <option value="3">Option 3</option>\
          </select>\
          <label>Event type</label>\
        </div>\
        <div class="input-field col s6">\
          <select multiple>\
            <option value="" disabled selected>Choose style(s)</option>\
            <option value="1">Option 1</option>\
            <option value="2">Option 2</option>\
            <option value="3">Option 3</option>\
          </select>\
          <label>Styles</label>\
        </div>\
      </div>\
  \
      <div class="row">\
        <div class="input-field col s6">\
          <label>Begin date</label>\
          <input id="beginDate" type="date" class="datepicker">\
          \
        </div>\
        <div class="input-field col s6">\
          <label>End date</label>\
          <input id="endDate" type="date" class="datepicker">\
          \
        </div>\
      </div>\
      <div class="row">\
        <div class="input-field col s12">\
          <input placeholder="Who is organizing the event?" id="organizer" type="text" class="validate">\
          <label for="organizer">Organizer</label>\
        </div>\
      </div>\
      <div class="row">\
        <div class="input-field col s6">\
          <input placeholder="http://www.mywebsite.com" id="website" type="text" class="validate">\
          <label for="website">Website</label>\
        </div>\
        <div class="input-field col s6">\
          <input placeholder="contact@myweb.com" id="email" type="text" class="validate">\
          <label for="email">Contact email</label>\
        </div>\
      </div>\
  \
      <div class="row">\
            <div class="input-field col s12">\
              <textarea id="description" class="materialize-textarea" length="140"></textarea>\
              <label for="description">Describe the event in a tweet!</label>\
            </div>\
          </div>\
    </form>\
  </div>')
}

// $('.datepicker').pickadate({
//     min: new Date(),
//     selectMonths: true, // Creates a dropdown to control month
//     selectYears: 15, // Creates a dropdown of 15 years to control year
//     firstDay: 1
//   });

// var picker = $('#beginDate').pickadate('picker');
// picker.set('select', new Date());
// var picker = $('#endDate').pickadate('picker');
// picker.set('select', new Date());


//  $('select').material_select();
