/**
 * An object holding network status configuration parameters.
 */
export class NetworkStatus {
    private static default: NetworkStatus;

    /**
     * The current round.
     */
    public CurrentRound: number;

    /**
     * The epoch number.
     */
    public EpochNumber: number;

    /**
     * The Highest final nonce.
     */
    public HighestFinalNonce: number;

    /**
     * The drt nonce.
     */
    public Nonce: number;

    /**
     * The nonce at epoch start.
     */
    public NonceAtEpochStart: number;

    /**
     * The nonces passed in current epoch.
     */
    public NoncesPassedInCurrentEpoch: number;

    /**
     * The round at epoch start
     */
    public RoundAtEpochStart: number;

    /**
     * The rounds passed in current epoch
     */
    public RoundsPassedInCurrentEpoch: number;

    /**
     * The rounds per epoch
     */
    public RoundsPerEpoch: number;

    constructor() {
        this.CurrentRound = 0;
        this.EpochNumber = 0;
        this.HighestFinalNonce = 0;
        this.Nonce = 0;
        this.NonceAtEpochStart = 0;
        this.NoncesPassedInCurrentEpoch = 0;
        this.RoundAtEpochStart = 0;
        this.RoundsPassedInCurrentEpoch = 0;
        this.RoundsPerEpoch = 0;
    }

    /**
     * Constructs a configuration object from a HTTP response (as returned by the provider).
     */
    static fromHttpResponse(payload: any): NetworkStatus {
        let networkStatus = new NetworkStatus();

        networkStatus.CurrentRound = Number(payload["drt_current_round"]);
        networkStatus.EpochNumber = Number(payload["drt_epoch_number"]);
        networkStatus.HighestFinalNonce = Number(payload["drt_highest_final_nonce"]);
        networkStatus.Nonce = Number(payload["drt_nonce"]);
        networkStatus.NonceAtEpochStart = Number(payload["drt_nonce_at_epoch_start"]);
        networkStatus.NoncesPassedInCurrentEpoch = Number(payload["drt_nonces_passed_in_current_epoch"]);
        networkStatus.RoundAtEpochStart = Number(payload["drt_round_at_epoch_start"]);
        networkStatus.RoundsPassedInCurrentEpoch = Number(payload["drt_rounds_passed_in_current_epoch"]);
        networkStatus.RoundsPerEpoch = Number(payload["drt_rounds_per_epoch"]);

        return networkStatus;
    }
}
