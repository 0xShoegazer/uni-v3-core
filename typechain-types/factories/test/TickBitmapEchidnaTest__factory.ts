/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  TickBitmapEchidnaTest,
  TickBitmapEchidnaTestInterface,
} from "../../test/TickBitmapEchidnaTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
      {
        internalType: "bool",
        name: "lte",
        type: "bool",
      },
    ],
    name: "checkNextInitializedTickWithinOneWordInvariants",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
    ],
    name: "flipTick",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061055e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80632854ac0a1461003b5780638815912f14610065575b600080fd5b6100636004803603604081101561005157600080fd5b50803560020b90602001351515610085565b005b6100636004803603602081101561007b57600080fd5b503560020b610190565b60008061009581856001866101c2565b91509150821561011757627ffeff198460020b12156100b357600080fd5b8360020b8260020b13156100c357fe5b61010082850360020b126100d357fe5b835b8260020b8160020b13156100fc576100ec81610304565b156100f357fe5b600019016100d5565b5080151561010983610304565b15151461011257fe5b61018a565b627ffeff8460020b1261012957600080fd5b8360020b8260020b1361013857fe5b61010084830360020b131561014957fe5b600184015b8260020b8160020b12156101745761016581610304565b1561016c57fe5b60010161014e565b5080151561018183610304565b15151461018a57fe5b50505050565b600061019b82610304565b90506101aa6000836001610339565b80156101b583610304565b1515146101be57fe5b5050565b60008060008460020b8660020b816101d657fe5b05905060008660020b1280156101fd57508460020b8660020b816101f657fe5b0760020b15155b1561020757600019015b831561027c576000806102198361039f565b600182810b810b600090815260208d9052604090205460ff83169190911b8001600019019081168015159750929450909250908561025e57888360ff16860302610271565b88610268826103b1565b840360ff168603025b9650505050506102fa565b60008061028b8360010161039f565b91509150600060018260ff166001901b031990506000818b60008660010b60010b81526020019081526020016000205416905080600014159550856102dd57888360ff0360ff168660010101026102f3565b88836102e88361045e565b0360ff168660010101025b9650505050505b5094509492505050565b6000808061031581856001806101c2565b915091508360020b8260020b1461032d57600061032f565b805b925050505b919050565b8060020b8260020b8161034857fe5b0760020b1561035657600080fd5b6000806103718360020b8560020b8161036b57fe5b0561039f565b600191820b820b60009081526020979097526040909620805460ff9097169190911b90951890945550505050565b60020b600881901d9161010090910790565b60008082116103bf57600080fd5b70010000000000000000000000000000000082106103df57608091821c91015b6801000000000000000082106103f757604091821c91015b640100000000821061040b57602091821c91015b62010000821061041d57601091821c91015b610100821061042e57600891821c91015b6010821061043e57600491821c91015b6004821061044e57600291821c91015b6002821061033457600101919050565b600080821161046c57600080fd5b5060ff6fffffffffffffffffffffffffffffffff82161561049057607f1901610498565b608082901c91505b67ffffffffffffffff8216156104b157603f19016104b9565b604082901c91505b63ffffffff8216156104ce57601f19016104d6565b602082901c91505b61ffff8216156104e957600f19016104f1565b601082901c91505b60ff821615610503576007190161050b565b600882901c91505b600f82161561051d5760031901610525565b600482901c91505b6003821615610537576001190161053f565b600282901c91505b6001821615610334576000190191905056fea164736f6c6343000706000a";

type TickBitmapEchidnaTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TickBitmapEchidnaTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TickBitmapEchidnaTest__factory extends ContractFactory {
  constructor(...args: TickBitmapEchidnaTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TickBitmapEchidnaTest> {
    return super.deploy(overrides || {}) as Promise<TickBitmapEchidnaTest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TickBitmapEchidnaTest {
    return super.attach(address) as TickBitmapEchidnaTest;
  }
  override connect(signer: Signer): TickBitmapEchidnaTest__factory {
    return super.connect(signer) as TickBitmapEchidnaTest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TickBitmapEchidnaTestInterface {
    return new utils.Interface(_abi) as TickBitmapEchidnaTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TickBitmapEchidnaTest {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TickBitmapEchidnaTest;
  }
}
