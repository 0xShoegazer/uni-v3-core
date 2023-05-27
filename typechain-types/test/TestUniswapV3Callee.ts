/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface TestUniswapV3CalleeInterface extends utils.Interface {
  functions: {
    "flash(address,address,uint256,uint256,uint256,uint256)": FunctionFragment;
    "mint(address,address,int24,int24,uint128)": FunctionFragment;
    "swap0ForExact1(address,uint256,address,uint160)": FunctionFragment;
    "swap1ForExact0(address,uint256,address,uint160)": FunctionFragment;
    "swapExact0For1(address,uint256,address,uint160)": FunctionFragment;
    "swapExact1For0(address,uint256,address,uint160)": FunctionFragment;
    "swapToHigherSqrtPrice(address,uint160,address)": FunctionFragment;
    "swapToLowerSqrtPrice(address,uint160,address)": FunctionFragment;
    "uniswapV3FlashCallback(uint256,uint256,bytes)": FunctionFragment;
    "uniswapV3MintCallback(uint256,uint256,bytes)": FunctionFragment;
    "uniswapV3SwapCallback(int256,int256,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "flash"
      | "mint"
      | "swap0ForExact1"
      | "swap1ForExact0"
      | "swapExact0For1"
      | "swapExact1For0"
      | "swapToHigherSqrtPrice"
      | "swapToLowerSqrtPrice"
      | "uniswapV3FlashCallback"
      | "uniswapV3MintCallback"
      | "uniswapV3SwapCallback"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "flash",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swap0ForExact1",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swap1ForExact0",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExact0For1",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExact1For0",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapToHigherSqrtPrice",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapToLowerSqrtPrice",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "uniswapV3FlashCallback",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "uniswapV3MintCallback",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "uniswapV3SwapCallback",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "flash", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "swap0ForExact1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swap1ForExact0",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExact0For1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExact1For0",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapToHigherSqrtPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapToLowerSqrtPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uniswapV3FlashCallback",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uniswapV3MintCallback",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uniswapV3SwapCallback",
    data: BytesLike
  ): Result;

  events: {
    "FlashCallback(uint256,uint256)": EventFragment;
    "MintCallback(uint256,uint256)": EventFragment;
    "SwapCallback(int256,int256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "FlashCallback"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MintCallback"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SwapCallback"): EventFragment;
}

export interface FlashCallbackEventObject {
  fee0: BigNumber;
  fee1: BigNumber;
}
export type FlashCallbackEvent = TypedEvent<
  [BigNumber, BigNumber],
  FlashCallbackEventObject
>;

export type FlashCallbackEventFilter = TypedEventFilter<FlashCallbackEvent>;

export interface MintCallbackEventObject {
  amount0Owed: BigNumber;
  amount1Owed: BigNumber;
}
export type MintCallbackEvent = TypedEvent<
  [BigNumber, BigNumber],
  MintCallbackEventObject
>;

export type MintCallbackEventFilter = TypedEventFilter<MintCallbackEvent>;

export interface SwapCallbackEventObject {
  amount0Delta: BigNumber;
  amount1Delta: BigNumber;
}
export type SwapCallbackEvent = TypedEvent<
  [BigNumber, BigNumber],
  SwapCallbackEventObject
>;

export type SwapCallbackEventFilter = TypedEventFilter<SwapCallbackEvent>;

export interface TestUniswapV3Callee extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TestUniswapV3CalleeInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    flash(
      pool: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      amount0: PromiseOrValue<BigNumberish>,
      amount1: PromiseOrValue<BigNumberish>,
      pay0: PromiseOrValue<BigNumberish>,
      pay1: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    mint(
      pool: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      tickLower: PromiseOrValue<BigNumberish>,
      tickUpper: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swap0ForExact1(
      pool: PromiseOrValue<string>,
      amount1Out: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swap1ForExact0(
      pool: PromiseOrValue<string>,
      amount0Out: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapExact0For1(
      pool: PromiseOrValue<string>,
      amount0In: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapExact1For0(
      pool: PromiseOrValue<string>,
      amount1In: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapToHigherSqrtPrice(
      pool: PromiseOrValue<string>,
      sqrtPriceX96: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapToLowerSqrtPrice(
      pool: PromiseOrValue<string>,
      sqrtPriceX96: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    uniswapV3FlashCallback(
      fee0: PromiseOrValue<BigNumberish>,
      fee1: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    uniswapV3MintCallback(
      amount0Owed: PromiseOrValue<BigNumberish>,
      amount1Owed: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    uniswapV3SwapCallback(
      amount0Delta: PromiseOrValue<BigNumberish>,
      amount1Delta: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  flash(
    pool: PromiseOrValue<string>,
    recipient: PromiseOrValue<string>,
    amount0: PromiseOrValue<BigNumberish>,
    amount1: PromiseOrValue<BigNumberish>,
    pay0: PromiseOrValue<BigNumberish>,
    pay1: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  mint(
    pool: PromiseOrValue<string>,
    recipient: PromiseOrValue<string>,
    tickLower: PromiseOrValue<BigNumberish>,
    tickUpper: PromiseOrValue<BigNumberish>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swap0ForExact1(
    pool: PromiseOrValue<string>,
    amount1Out: PromiseOrValue<BigNumberish>,
    recipient: PromiseOrValue<string>,
    sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swap1ForExact0(
    pool: PromiseOrValue<string>,
    amount0Out: PromiseOrValue<BigNumberish>,
    recipient: PromiseOrValue<string>,
    sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapExact0For1(
    pool: PromiseOrValue<string>,
    amount0In: PromiseOrValue<BigNumberish>,
    recipient: PromiseOrValue<string>,
    sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapExact1For0(
    pool: PromiseOrValue<string>,
    amount1In: PromiseOrValue<BigNumberish>,
    recipient: PromiseOrValue<string>,
    sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapToHigherSqrtPrice(
    pool: PromiseOrValue<string>,
    sqrtPriceX96: PromiseOrValue<BigNumberish>,
    recipient: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapToLowerSqrtPrice(
    pool: PromiseOrValue<string>,
    sqrtPriceX96: PromiseOrValue<BigNumberish>,
    recipient: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  uniswapV3FlashCallback(
    fee0: PromiseOrValue<BigNumberish>,
    fee1: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  uniswapV3MintCallback(
    amount0Owed: PromiseOrValue<BigNumberish>,
    amount1Owed: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  uniswapV3SwapCallback(
    amount0Delta: PromiseOrValue<BigNumberish>,
    amount1Delta: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    flash(
      pool: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      amount0: PromiseOrValue<BigNumberish>,
      amount1: PromiseOrValue<BigNumberish>,
      pay0: PromiseOrValue<BigNumberish>,
      pay1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    mint(
      pool: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      tickLower: PromiseOrValue<BigNumberish>,
      tickUpper: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    swap0ForExact1(
      pool: PromiseOrValue<string>,
      amount1Out: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    swap1ForExact0(
      pool: PromiseOrValue<string>,
      amount0Out: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    swapExact0For1(
      pool: PromiseOrValue<string>,
      amount0In: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    swapExact1For0(
      pool: PromiseOrValue<string>,
      amount1In: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    swapToHigherSqrtPrice(
      pool: PromiseOrValue<string>,
      sqrtPriceX96: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    swapToLowerSqrtPrice(
      pool: PromiseOrValue<string>,
      sqrtPriceX96: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    uniswapV3FlashCallback(
      fee0: PromiseOrValue<BigNumberish>,
      fee1: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    uniswapV3MintCallback(
      amount0Owed: PromiseOrValue<BigNumberish>,
      amount1Owed: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    uniswapV3SwapCallback(
      amount0Delta: PromiseOrValue<BigNumberish>,
      amount1Delta: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "FlashCallback(uint256,uint256)"(
      fee0?: null,
      fee1?: null
    ): FlashCallbackEventFilter;
    FlashCallback(fee0?: null, fee1?: null): FlashCallbackEventFilter;

    "MintCallback(uint256,uint256)"(
      amount0Owed?: null,
      amount1Owed?: null
    ): MintCallbackEventFilter;
    MintCallback(
      amount0Owed?: null,
      amount1Owed?: null
    ): MintCallbackEventFilter;

    "SwapCallback(int256,int256)"(
      amount0Delta?: null,
      amount1Delta?: null
    ): SwapCallbackEventFilter;
    SwapCallback(
      amount0Delta?: null,
      amount1Delta?: null
    ): SwapCallbackEventFilter;
  };

  estimateGas: {
    flash(
      pool: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      amount0: PromiseOrValue<BigNumberish>,
      amount1: PromiseOrValue<BigNumberish>,
      pay0: PromiseOrValue<BigNumberish>,
      pay1: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    mint(
      pool: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      tickLower: PromiseOrValue<BigNumberish>,
      tickUpper: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swap0ForExact1(
      pool: PromiseOrValue<string>,
      amount1Out: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swap1ForExact0(
      pool: PromiseOrValue<string>,
      amount0Out: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapExact0For1(
      pool: PromiseOrValue<string>,
      amount0In: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapExact1For0(
      pool: PromiseOrValue<string>,
      amount1In: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapToHigherSqrtPrice(
      pool: PromiseOrValue<string>,
      sqrtPriceX96: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapToLowerSqrtPrice(
      pool: PromiseOrValue<string>,
      sqrtPriceX96: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    uniswapV3FlashCallback(
      fee0: PromiseOrValue<BigNumberish>,
      fee1: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    uniswapV3MintCallback(
      amount0Owed: PromiseOrValue<BigNumberish>,
      amount1Owed: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    uniswapV3SwapCallback(
      amount0Delta: PromiseOrValue<BigNumberish>,
      amount1Delta: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    flash(
      pool: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      amount0: PromiseOrValue<BigNumberish>,
      amount1: PromiseOrValue<BigNumberish>,
      pay0: PromiseOrValue<BigNumberish>,
      pay1: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    mint(
      pool: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      tickLower: PromiseOrValue<BigNumberish>,
      tickUpper: PromiseOrValue<BigNumberish>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swap0ForExact1(
      pool: PromiseOrValue<string>,
      amount1Out: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swap1ForExact0(
      pool: PromiseOrValue<string>,
      amount0Out: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapExact0For1(
      pool: PromiseOrValue<string>,
      amount0In: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapExact1For0(
      pool: PromiseOrValue<string>,
      amount1In: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      sqrtPriceLimitX96: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapToHigherSqrtPrice(
      pool: PromiseOrValue<string>,
      sqrtPriceX96: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapToLowerSqrtPrice(
      pool: PromiseOrValue<string>,
      sqrtPriceX96: PromiseOrValue<BigNumberish>,
      recipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    uniswapV3FlashCallback(
      fee0: PromiseOrValue<BigNumberish>,
      fee1: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    uniswapV3MintCallback(
      amount0Owed: PromiseOrValue<BigNumberish>,
      amount1Owed: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    uniswapV3SwapCallback(
      amount0Delta: PromiseOrValue<BigNumberish>,
      amount1Delta: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
