let url = "https://api.coincap.io/v2/assets";
let cryptoCurr = fetch(url);
let tId = document.getElementById('rt')
let c;
let imgArr = {
    BTC: "./coinImg/btc.png",
    "1INCH": "./coinImg/1inch.png",
    AAVE: "./coinImg/aave.png",
    ADA: "./coinImg/ada.png",
    ALGO: "./coinImg/algo.png",
    AR: "./coinImg/ar.png",
    ATOM: "./coinImg/atom.png",
    AVAX: "./coinImg/avax.png",
    AXS: "./coinImg/axs.png",
    BAL: "./coinImg/bal.png",
    BAT: "./coinImg/bat.png",
    BNB: "./coinImg/bnb.png",
    BNX: "./coinImg/bnx.png",
    BSV: "./coinImg/bsv.png",
    BTCB: "./coinImg/btcb.png",
    BTG: "./coinImg/btg.png",
    BCH: "./coinImg/bch.png",
    BUSD: "./coinImg/busd.png",
    CAKE: "./coinImg/cake.png",
    CHZ: "./coinImg/chz.png",
    COMP: "./coinImg/comp.png",
    CRO: "./coinImg/cro.png",
    CRV: "./coinImg/crv.png",
    CSPR: "./coinImg/cspr.png",
    CVX: "./coinImg/cvx.png",
    DAI: "./coinImg/dai.png",
    DASH: "./coinImg/dash.png",
    DCR: "./coinImg/dcr.png",
    DFI: "./coinImg/dfi.png",
    DOGE: "./coinImg/doge.png",
    DOT: "./coinImg/dot.png",
    EGLD: "./coinImg/egld.png",
    ENJ: "./coinImg/enj.png",
    EOS: "./coinImg/eos.png",
    ETC: "./coinImg/etc.png",
    ETH: "./coinImg/eth.png",
    FEI: "./coinImg/fei.png",
    FIL: "./coinImg/fil.png",
    FLOW: "./coinImg/flow.png",
    FRAX: "./coinImg/frax.png",
    FTM: "./coinImg/ftm.png",
    FTT: "./coinImg/ftt.png",
    GRT: "./coinImg/grt.png",
    GT: "./coinImg/gt.png",
    GUSD: "./coinImg/gusd.png",
    HBAR: "./coinImg/hbar.png",
    HNT: "./coinImg/hnt.png",
    HOT: "./coinImg/hot.png",
    HT: "./coinImg/ht.png",
    ICP: "./coinImg/icp.png",
    IOTX: "./coinImg/iotx.png",
    KAVA: "./coinImg/kava.png",
    KCS: "./coinImg/kcs.png",
    KLAY: "./coinImg/klay.png",
    LDO: "./coinImg/ldo.png",
    LEO: "./coinImg/leo.png",
    LINK: "./coinImg/link.png",
    BTC: "./coinImg/btc.png",
    LRC: "./coinImg/lrc.png",
    LTC: "./coinImg/ltc.png",
    LUNA: "./coinImg/luna.png",
    MANA: "./coinImg/mana.png",
    MATIC: "./coinImg/matic.png",
    MINA: "./coinImg/mina.png",
    MIOTA: "./coinImg/miota.png",
    MKR: "./coinImg/mkr.png",
    NEAR: "./coinImg/near.png",
    NEO: "./coinImg/neo.png",
    NEXO: "./coinImg/nexo.png",
    OKB: "./coinImg/okb.png",
    PAXG: "./coinImg/paxg.png",
    QNT: "./coinImg/qnt.png",
    ROSE: "./coinImg/rose.png",
    RUNE: "./coinImg/rune.png",
    RVN: "./coinImg/rvn.png",
    SAND: "./coinImg/sand.png",
    SHIB: "./coinImg/shib.png",
    SNX: "./coinImg/snx.png",
    SOL: "./coinImg/sol.png",
    STX: "./coinImg/stx.png",
    THETA: "./coinImg/theta.png",
    TFUEL: "./coinImg/tfuel.png",
    TRX: "./coinImg/trx.png",
    TUSD: "./coinImg/tusd.png",
    TWT: "./coinImg/twt.png",
    UNI: "./coinImg/uni.png",
    USDC: "./coinImg/usdc.png",
    USDP: "./coinImg/usdp.png",
    USDT: "./coinImg/usdt.png",
    USTC: "./coinImg/ustc.png",
    VET: "./coinImg/vet.png",
    WAVES: "./coinImg/waves.png",
    WBTC: "./coinImg/wbtc.png",
    WEMIX: "./coinImg/wemix.png",
    XDC: "./coinImg/xdc.png",
    XEC: "./coinImg/xec.png",
    XEM: "./coinImg/xem.png",
    XLM: "./coinImg/xlm.png",
    XMR: "./coinImg/xmr.png",
    XRP: "./coinImg/xrp.png",
    XTZ: "./coinImg/xtz.png",
    ZEC: "./coinImg/zec.png",
    ZIL: "./coinImg/zil.png"
}

console.log(imgArr.length)

cryptoCurr.then((v) => {
    return v.json();
}).then((response) => {
    // console.log(response);
    ihtml = ""
    for (item in response.data) {
        // console.log(response.data)

        for ([key, value] of Object.entries(imgArr)) {
            // console.log(`${key}: ${value}`);
            if (key == response.data[item].symbol) {
                c = value;
            }
        }

        ihtml += `
                      <tr>
                      <th scope="row">${response.data[item].rank}</th>
                      <td class="symName"><img src="${c}"> ${response.data[item].name}</td>
                      <td>${response.data[item].symbol}</td>
                      <td>$${response.data[item].priceUsd}</td>
                      <td>$${response.data[item].volumeUsd24Hr}</td>
                      <td>$${response.data[item].marketCapUsd}</td>
                      </tr>
                      `;
        c++;
    }
    rt.innerHTML = ihtml

})


