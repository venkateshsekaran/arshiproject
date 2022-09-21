import React from "react";

const App = () => {
  return (
    <div className="container">
      <div className="row mx-5 my-5 flex ">
        <div className="col-md-4 flex flex-col p-5 border">
          <div>
            <h6 className="font-bold py-5">Expense</h6>
          </div>
          <div>
            <h6 className="font-medium">Category</h6>
            <form>
              <div className="py-2">
                <select>
                  <option>Product</option>
                </select>
                <br />
                <input className="my-3" placeholder="Reason" />
              </div>
            </form>
          </div>
          <div>
            <h6 className="font-medium">Request/Paid</h6>
            <form>
              <div className="py-2">
                <select>
                  <option>Request</option>
                </select>
              </div>
            </form>
          </div>
          <div>
            <h6 className="font-medium">Invoice(If already paid)</h6>
            <input className="my-3" placeholder="Summary" />
          </div>
          <div>
            <h6 className="font-medium">Purpose</h6>
            <input className="my-3" placeholder="Summary" />
          </div>
          <div>
            <h6 className="font-medium">Information</h6>
            <input className="my-3" placeholder="Summary" />
          </div>
        </div>

        <div className="col-md-8 flex flex-col p-5 border grid grid-rows-1 grid-flow-col gap-4 ">
          <div className="">
            <h6 className="font-bold py-5">Invoice</h6>
            <div>
              <h6 className="font-medium">Purchase Via</h6>
              <form>
                <div className="py-2">
                  <select>
                    <option>Retail</option>
                  </select>
                </div>
              </form>
            </div>
            <div>
              <h6 className="font-medium">Payment Method</h6>
              <form>
                <div className="py-2">
                  <select>
                    <option>Cash</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
          <div>
            <div className="">
              <h6 className="font-bold py-5">Invoice</h6>

              <h6 className="font-medium">Purchase Via</h6>
              <form>
                <div className="py-2">
                  <select>
                    <option>Retail</option>
                  </select>
                </div>
              </form>

              <div>
                <h6 className="font-medium">Payment Method</h6>
                <form>
                  <div className="py-2">
                    <select>
                      <option>Cash</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* <div className="">
            <h6 className="font-bold py-5">Amount</h6>
            
              <h6 className="font-medium">Total Amount</h6>
              <form>
                <div className="py-2">
                  <select>
                    <option>Nil</option>
                  </select>
                </div>
              </form>
            
          </div>
          <div>
            <h6 className="font-bold py-5">Address</h6>
            <div>
              <h6 className="font-medium">Company</h6>
              <form>
                <div className="py-2">
                  <select>
                    <option>ONEUX Creative Studio</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
          <div>
            <h6 className="font-medium">Branch</h6>
            <input className="my-3" placeholder="Branchname1" />
          </div>
          <div>
            <h6 className="font-medium">Note(optional)</h6>
            <input className="my-3" placeholder="Summary" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default App;
