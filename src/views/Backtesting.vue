<template>
  <div class="container-fluid backtesting">
    <h3>Backtesting</h3>
    <p class="float-right">( All Amounts in<span> LCY Crs.</span> )</p>
    <hr />
    <!-- Modal starts here. This can be moved to seperate component itself named Modals.vue -->
    <div class="row">
      <div class="col-md-3">
        <div class="btn-group">
          <button type="button" class="btn btn-secondary template-btn">Backtesting Period</button>
          <input type="date" class="date-picker" value="2020-06-24">
        </div>
      </div>
      <div class="col-md-3">
        <div class="btn-group">
          <button type="button" class="btn btn-secondary template-btn">VaR Template</button>
        </div>
        <select class="custom-select">
          <option selected value="1">HS-95-252-LOG-EQUITY</option>
          <option value="2">HS-95-252-LOG-EQUITY</option>
          <option value="3">HS-95-252-LOG-EQUITY</option>
          <option value="4">HS-95-252-LOG-EQUITY</option>
        </select>
      </div>
      <div class="col-md-3">
        <button type="button" class="btn btn-success" data-toggle="modal" data-target="#runModal"> <i class="fas fa-file-import"></i> Run</button>
        <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#deleteModal"><i class="fas fa-trash-alt"></i> Delete</button>
      </div>
      <div class="col-md-3">
        <div class="float-right">
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#filterModal"> <i class="fas fa-filter"></i> Filter</button>
          <button type="button" class="btn btn-outline-dark" data-toggle="modal" data-target="#downloadModal"><i class="fas fa-download"></i> Download</button>
        </div>
      </div>
    </div>
    <div class="modal fade" id="runModal" tabindex="-1" role="dialog" aria-labelledby="runModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
                <h6 class="modal-text">Back Testing Process Running</h6>
                <div class="progress">
                    <div class="progress-bar" style="width: 30%" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="deleteModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body text-center">
                <h5 class="delete-modal-text">Are you sure you want to <span>DELETE</span> the process</h5>
                <button type="button" class="btn btn-primary">Cancel</button>
                <button type="button" class="btn btn-danger">Delete Process</button>
            </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="filterModal" tabindex="-1" role="dialog" aria-labelledby="filterModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
                <p>Backtesting Period</p>
                <input type="date" class="date-picker" value="2020-06-24">
                <p>VaR Template</p>
                <select class="custom-select">
                <option selected value="1">HS-95-252-LOG-EQUITY</option>
                <option value="2">HS-95-252-LOG-EQUITY</option>
                <option value="3">HS-95-252-LOG-EQUITY</option>
                <option value="4">HS-95-252-LOG-EQUITY</option>
                </select>
                <p>Portfolio</p>
                <select class="custom-select">
                <option selected value="hft1">HFT</option>
                <option value="hft2">HFT</option>
                </select>
                <p>Outlier</p>
                <select class="custom-select">
                <option selected value="yes">Y</option>
                <option value="no">N</option>
                </select><br><br>
                <button type="button" class="btn btn-outline-dark">Cancel</button>
                <button type="button" class="btn btn-primary float-right">Apply</button>
            </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="downloadModal" tabindex="-1" role="dialog" aria-labelledby="downloadModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
                <h6 class="modal-text">Downloading</h6>
                <div class="progress">
                    <div class="progress-bar" style="width: 45%" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
      </div>
    </div>
    <!-- Modal ends here -->
    <hr />
    <div class="row">
      <div class="col-md-2" v-for="btJsonData in btsJsonData" :key="btJsonData.lt">
        <div class="card shadow-sm" v-bind:class="btJsonData.borderColor">
          <div class="card-body">
            <p class="left-text">{{btJsonData.lt}}</p>
            <p class="right-text float-right">{{btJsonData.rt}}</p>
          </div>
        </div>
      </div>
    </div>
    <HFTBacktesting />
  </div>
</template>

<script>
import HFTBacktesting from './HFTBacktesting';
import btJsonData from '../data/backtest-data.json';

export default {
  name: "Backtesting",
  components: {
    HFTBacktesting
  },
  data() {
    return {
      btsJsonData: btJsonData
    };
  }
}
</script>

<style scoped>
.backtesting h3 {
  color: #4c70b2;
  display: inline-block;
  font-size: 1.2rem;
  margin: 1% 0% 0%;
}

.backtesting p {
  color: #3e65ad;
  font-size: 12px;
  font-weight: 600;
  margin-top: 1.5%;
}

.backtesting p span {
  border-bottom: 3px solid #3e65ad;
  padding-bottom: 10%;
}

.template-btn {
  background: #070f63;
  border-color: #070f63;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  font-size: 11px;
  font-weight: bold;
}

.template-btn:hover {
  background: #070f63;
  border-color: #070f63;
}

.date-picker {
  color: #878787;
  font-size: 11px;
  font-weight: bold;
}

.custom-select {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  color: #878787;
  font-size: 11px;
  font-weight: bold;
  width:65%
}

/* Styling all the button here */
.btn-success {
  background: #0f8e81;
  border-color: #0f8e81;
  font-size: 11px;
  font-weight: bold;
  margin-right: 10%;
}

.btn-danger {
  background: #eb5757;
  border-color: #eb5757;
  font-size: 11px;
  font-weight: bold;
}

.btn-primary {
  background: #1274c0;
  border-color: #1274c0;
  font-size: 11px;
  font-weight: bold;
  margin-right: 15px;
}

.btn-outline-dark {
  font-size: 11px;
  font-weight: bold;
}

.card {
  border-radius: 5px;
}

.card .left-text {
  color: #4c4c4c;
  display: inline-block;
  font-size: 11px;
  font-weight: bolder;
  margin: 8px;
}

.card .right-text {
  color: #878787;
  font-size: 11px;
  font-weight: bolder;
  margin: 8px;
}

/* Need to look for a proper logic here */
.primary-border-card {
  border-left: 5px solid #070f63;
}

.success-border-card {
  border-left: 5px solid #0f8e81;
}

.warning-border-card {
  border-left: 5px solid #f1cb71;
}

.danger-border-card {
  border-left: 5px solid #eb5757;
}

.card-body {
  padding: 0;
}

/* Styling our popup modal */
.modal-content {
    border-radius: 0;
}

.modal-header {
    border-bottom: none;
}

.modal-body {
    padding: 2% 7% 10%;
}

.modal-text {
    font-size: 1.2rem;
    margin-bottom: 15px;
}

.delete-modal-text {
    color: #797979;
    font-size: 1rem;
    margin-bottom: 40px;
}

.delete-modal-text span {
    color: #eb5757;
}

.progress {
    height: 7px;
}

.progress-bar {
    background: #070f63;
    border-radius: 15px;
}
</style>