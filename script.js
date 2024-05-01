function element(tag, className, id, text) {
  const tags = document.createElement(tag);
  tags.classList = className;
  tags.id = id;
  tags.innerHTML = text;
  return tags;
}

const container = element("div", "container", "", "");
const h1 = element(
  "h1",
  "text-center mt-5",
  "title",
  "Phone Number Validation"
);
const row = element(
  "div",
  "row align-items-center justify-content-center",
  "",
  ""
);

const box = document.createElement("div");
box.classList = "col-lg-4 col-md-6 col-sm-12 bg";
box.innerHTML = `
            <div class="">
                <h5 class="card-text text-center mt-2 mb-5" id="">Enter phone number with country code!</h5>
                <div class="row align-items-center d-flex flex-column">
                <input type="number" id="number" class="form-control" name="number" placeholder="Enter a Phone number" required="">
                <button type="submit" id="verifyBtn" class="btn btn-primary">Check!</button>
                </div>
                <table class="table table-borderless">
                    <thead>
                        <tr></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Phone Number</th>
                            <td id="phone"></td>
                        </tr>
                        <tr>
                            <th scope="row">Valid</th>
                            <td id="valid"></td>
                        </tr>
                        <tr>
                            <th scope="row">International Format</th>
                            <td id="international"></td>
                        </tr>
                        <tr>
                            <th  scope="row">Local Format</th>
                            <td id="local"></td>
                        </tr>
                        <tr>
                            <th scope="row">Country Code</th>
                            <td id="code"></td>
                        </tr>
                        <tr>
                            <th scope="row">Country Name</th>
                            <td id="name"></td>
                        </tr>
                        <tr>
                            <th scope="row">Country Prefix</th>
                            <td id="prefix"></td>
                        </tr>
                        <tr>
                            <th scope="row">Location</th>
                            <td id="location"></td>
                        </tr>
                        <tr>
                            <th scope="row">Type</th>
                            <td id="type"></td>
                        </tr>
                        <tr>
                            <th scope="row">Network Carrier</th>
                            <td id="network"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
row.appendChild(box);
container.append(h1, row);
document.body.appendChild(container);

const btn = document.getElementById("verifyBtn");
btn.addEventListener("click", () => {
  const inputNum = document.getElementById("number").value;
  const api = fetch(
    `https://phonevalidation.abstractapi.com/v1/?api_key=05110cf63d354bf5be4ca3d5e008e8d9&phone=${inputNum}`
  );
  api
    .then((data) => data.json())
    .then((ele) => {
      // Phone number
      const phone = document.getElementById("phone");
      phone.innerText = ele.phone;

      // Valid
      const valid = document.getElementById("valid");
      valid.innerText = ele.valid;

      // International format
      const international = document.getElementById("international");
      international.innerText = ele.format.international;

      // Local Format
      const local = document.getElementById("local");
      local.innerText = ele.format.local;

      // Country code
      const code = document.getElementById("code");
      code.innerText = ele.country.code;

      // Country Name
      const name = document.getElementById("name");
      name.innerText = ele.country.name;

      // Country Prefix
      const prefix = document.getElementById("prefix");
      prefix.innerText = ele.country.prefix;

      // Location
      const location = document.getElementById("location");
      location.innerText = ele.location;

      // Type
      const type = document.getElementById("type");
      type.innerText = ele.type;

      // Carrier
      const carrier = document.getElementById("network");
      carrier.innerText = ele.carrier;
    });
});