<template>
    <div class="hft-backtest">
        <div class="card shadow" v-for="hftData in hftsData" :key="hftData.varDate2">
            <h5 class="hft-text"><span class="blue-box"></span> HFT</h5>
            <div class="row">
                <div class="col-md-2">
                    <p class="grey-text">VaR Date (Market Value)</p>
                    <p class="blue-text">{{hftData.varDate1}} <span class="small-blue-box"></span> {{hftData.marketValue1}}</p>
                </div>
                <div class="col-md-3">
                    <p class="grey-text">Date after Holding Period (Market Value)</p>
                    <p class="blue-text">{{hftData.varDate2}} <span class="small-blue-box"></span> {{hftData.marketValue2}}</p>
                </div>
                <div class="col-md-2">
                    <p class="grey-text">VaR (in Amount)</p>
                    <p class="blue-text">{{hftData.varAmount}}</p>
                </div>
                <div class="col-md-1">
                    <p class="grey-text">VaR (in %)</p>
                    <p class="blue-text">{{hftData.varPercent}}%</p>
                </div>
                <div class="col-md-1">
                    <p class="grey-text">Notional PnL</p>
                    <p class="blue-text">{{hftData.notionalPnl}}</p>
                </div>
                <div class="col-md-1">
                    <p class="grey-text">Outlier</p>
                    <p class="blue-text outlier-box text-center" v-bind:class="hftData.outlierColor"> {{hftData.outlier}} </p>
                </div>
                <div class="col-md-1">
                    <p class="grey-text">Actual PnL</p>
                    <p class="blue-text">{{hftData.actualPnl}}</p>
                </div>
                <div class="col-md-1">
                    <div class="arrow-box float-right">
                        <i class="fas fa-angle-double-right"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import hftData from "../data/hft-data.json";

export default {
    name: "HFTBacktesting",
    data() {
        return {
            hftsData: hftData 
        };
    }
    //Below code can be used if we want data to be shown on button click
    // methods: {
    //     getHftData() {
    //         fetch("hft-data.json").then(res => res.json()).then(data => (this.hftDataList = data));
    //     }
    // }
}
</script>

<style scoped>
.hft-backtest {
    margin-top: 1.5%;
}

.card {
    border-radius: 8px;
    margin-bottom: 1.1%;
    padding: 20px;
}

.blue-box {
    background: #070f63;
    display: inline-block;
    height: 10px;
    width: 10px;
}

.small-blue-box {
    background: #070f63;
    display: inline-block;
    height: 5px;
    width: 5px;
}

.hft-text {
    font-size: 12px;
    font-weight: bolder;
    margin-bottom: 12px;
}

.grey-text {
    color: #a0a0a0;
    font-size: 11px;
    font-weight: 700;
    margin-bottom: 0.5rem;
}

.blue-text {
    color: #29457b;
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 0;
}

.outlier-box {
    border-radius: 2px;
    width: 20px;
}

.outlier-red {
    background: #de1414;
    color: #fff;
}

.outlier-green {
    background: #34bb0d;
    color: #fff;
}

.arrow-box {
    width: 25%;
}

.fa-angle-double-right {
    color: #272e78;
    font-size: 1rem;
}
</style>