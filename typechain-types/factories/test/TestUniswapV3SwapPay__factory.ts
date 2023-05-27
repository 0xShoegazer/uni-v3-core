/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  TestUniswapV3SwapPay,
  TestUniswapV3SwapPayInterface,
} from "../../test/TestUniswapV3SwapPay";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "bool",
        name: "zeroForOne",
        type: "bool",
      },
      {
        internalType: "uint160",
        name: "sqrtPriceX96",
        type: "uint160",
      },
      {
        internalType: "int256",
        name: "amountSpecified",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "pay0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pay1",
        type: "uint256",
      },
    ],
    name: "swap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "uniswapV3SwapCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061047d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063f13cdf901461003b578063fa461e331461008f575b600080fd5b61008d600480360360e081101561005157600080fd5b506001600160a01b0381358116916020810135821691604082013515159160608101359091169060808101359060a08101359060c0013561010b565b005b61008d600480360360608110156100a557600080fd5b8135916020810135918101906060810160408201356401000000008111156100cc57600080fd5b8201836020820111156100de57600080fd5b8035906020019184600183028401116401000000008311171561010057600080fd5b509092509050610253565b866001600160a01b031663128acb088787868833888860405160200180846001600160a01b0316815260200183815260200182815260200193505050506040516020818303038152906040526040518663ffffffff1660e01b815260040180866001600160a01b031681526020018515158152602001848152602001836001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b838110156101cf5781810151838201526020016101b7565b50505050905090810190601f1680156101fc5780820380516001836020036101000a031916815260200191505b5096505050505050506040805180830381600087803b15801561021e57600080fd5b505af1158015610232573d6000803e3d6000fd5b505050506040513d604081101561024857600080fd5b505050505050505050565b60008060008484606081101561026857600080fd5b506001600160a01b03813516935060208101359250604001359050811561037957336001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b1580156102c257600080fd5b505afa1580156102d6573d6000803e3d6000fd5b505050506040513d60208110156102ec57600080fd5b5051604080516323b872dd60e01b81526001600160a01b03868116600483015233602483015260448201869052915191909216916323b872dd9160648083019260209291908290030181600087803b15801561034757600080fd5b505af115801561035b573d6000803e3d6000fd5b505050506040513d602081101561037157600080fd5b506104679050565b801561046757336001600160a01b031663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b1580156103b857600080fd5b505afa1580156103cc573d6000803e3d6000fd5b505050506040513d60208110156103e257600080fd5b5051604080516323b872dd60e01b81526001600160a01b03868116600483015233602483015260448201859052915191909216916323b872dd9160648083019260209291908290030181600087803b15801561043d57600080fd5b505af1158015610451573d6000803e3d6000fd5b505050506040513d602081101561024857600080fd5b5050505050505056fea164736f6c6343000706000a";

type TestUniswapV3SwapPayConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestUniswapV3SwapPayConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestUniswapV3SwapPay__factory extends ContractFactory {
  constructor(...args: TestUniswapV3SwapPayConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestUniswapV3SwapPay> {
    return super.deploy(overrides || {}) as Promise<TestUniswapV3SwapPay>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestUniswapV3SwapPay {
    return super.attach(address) as TestUniswapV3SwapPay;
  }
  override connect(signer: Signer): TestUniswapV3SwapPay__factory {
    return super.connect(signer) as TestUniswapV3SwapPay__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestUniswapV3SwapPayInterface {
    return new utils.Interface(_abi) as TestUniswapV3SwapPayInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestUniswapV3SwapPay {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TestUniswapV3SwapPay;
  }
}
