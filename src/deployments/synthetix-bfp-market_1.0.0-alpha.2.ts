export const Deployments = {
  CoreModule: {
    address: '0x7b2745b9254cFfdC235F43740cF5a60d3b42ad91',
    abi: [
      {
        inputs: [
          {
            internalType: 'address',
            name: 'implementation',
            type: 'address',
          },
        ],
        name: 'ImplementationIsSterile',
        type: 'error',
      },
      {
        inputs: [],
        name: 'NoChange',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'contr',
            type: 'address',
          },
        ],
        name: 'NotAContract',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'NotNominated',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'Unauthorized',
        type: 'error',
      },
      {
        inputs: [],
        name: 'UpgradeSimulationFailed',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ZeroAddress',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'oldOwner',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnerChanged',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnerNominated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'self',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'implementation',
            type: 'address',
          },
        ],
        name: 'Upgraded',
        type: 'event',
      },
      {
        inputs: [],
        name: 'acceptOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getImplementation',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newNominatedOwner',
            type: 'address',
          },
        ],
        name: 'nominateNewOwner',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'nominatedOwner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'renounceNomination',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newImplementation',
            type: 'address',
          },
        ],
        name: 'simulateUpgradeTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newImplementation',
            type: 'address',
          },
        ],
        name: 'upgradeTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
  FeatureFlagModule: {
    address: '0x2a994F5289ad48e7100EbD64C785De35a225575e',
    abi: [
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'Unauthorized',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ValueAlreadyInSet',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ValueNotInSet',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            indexed: false,
            internalType: 'bool',
            name: 'allowAll',
            type: 'bool',
          },
        ],
        name: 'FeatureFlagAllowAllSet',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'account',
            type: 'address',
          },
        ],
        name: 'FeatureFlagAllowlistAdded',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'account',
            type: 'address',
          },
        ],
        name: 'FeatureFlagAllowlistRemoved',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            indexed: false,
            internalType: 'address[]',
            name: 'deniers',
            type: 'address[]',
          },
        ],
        name: 'FeatureFlagDeniersReset',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            indexed: false,
            internalType: 'bool',
            name: 'denyAll',
            type: 'bool',
          },
        ],
        name: 'FeatureFlagDenyAllSet',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'account',
            type: 'address',
          },
        ],
        name: 'addToFeatureFlagAllowlist',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
        ],
        name: 'getDeniers',
        outputs: [
          {
            internalType: 'address[]',
            name: '',
            type: 'address[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
        ],
        name: 'getFeatureFlagAllowAll',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
        ],
        name: 'getFeatureFlagAllowlist',
        outputs: [
          {
            internalType: 'address[]',
            name: '',
            type: 'address[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
        ],
        name: 'getFeatureFlagDenyAll',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'account',
            type: 'address',
          },
        ],
        name: 'isFeatureAllowed',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'account',
            type: 'address',
          },
        ],
        name: 'removeFromFeatureFlagAllowlist',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            internalType: 'address[]',
            name: 'deniers',
            type: 'address[]',
          },
        ],
        name: 'setDeniers',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            internalType: 'bool',
            name: 'allowAll',
            type: 'bool',
          },
        ],
        name: 'setFeatureFlagAllowAll',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            internalType: 'bool',
            name: 'denyAll',
            type: 'bool',
          },
        ],
        name: 'setFeatureFlagDenyAll',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
  MarketConfigurationModule: {
    address: '0xBF6e0BBa339c06f017CC953BAe3f96aDF8fE978a',
    abi: [
      {
        inputs: [
          {
            internalType: 'string',
            name: 'parameter',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'reason',
            type: 'string',
          },
        ],
        name: 'InvalidParameter',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'MarketNotFound',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'Unauthorized',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
        ],
        name: 'GlobalMarketConfigured',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
        ],
        name: 'MarketConfigured',
        type: 'event',
      },
      {
        inputs: [],
        name: 'getMarketConfiguration',
        outputs: [
          {
            components: [
              {
                internalType: 'contract IPyth',
                name: 'pyth',
                type: 'address',
              },
              {
                internalType: 'bytes32',
                name: 'ethOracleNodeId',
                type: 'bytes32',
              },
              {
                internalType: 'address',
                name: 'rewardDistributorImplementation',
                type: 'address',
              },
              {
                internalType: 'uint64',
                name: 'pythPublishTimeMin',
                type: 'uint64',
              },
              {
                internalType: 'uint64',
                name: 'pythPublishTimeMax',
                type: 'uint64',
              },
              {
                internalType: 'uint64',
                name: 'minOrderAge',
                type: 'uint64',
              },
              {
                internalType: 'uint64',
                name: 'maxOrderAge',
                type: 'uint64',
              },
              {
                internalType: 'uint256',
                name: 'minKeeperFeeUsd',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'maxKeeperFeeUsd',
                type: 'uint256',
              },
              {
                internalType: 'uint128',
                name: 'keeperProfitMarginUsd',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'keeperProfitMarginPercent',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'keeperSettlementGasUnits',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'keeperCancellationGasUnits',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'keeperLiquidationGasUnits',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'keeperFlagGasUnits',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'keeperLiquidateMarginGasUnits',
                type: 'uint128',
              },
              {
                internalType: 'address',
                name: 'keeperLiquidationEndorsed',
                type: 'address',
              },
              {
                internalType: 'uint128',
                name: 'collateralDiscountScalar',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'minCollateralDiscount',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'maxCollateralDiscount',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'utilizationBreakpointPercent',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'lowUtilizationSlopePercent',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'highUtilizationSlopePercent',
                type: 'uint128',
              },
            ],
            internalType: 'struct PerpMarketConfiguration.GlobalData',
            name: '',
            type: 'tuple',
          },
        ],
        stateMutability: 'pure',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getMarketConfigurationById',
        outputs: [
          {
            components: [
              {
                internalType: 'bytes32',
                name: 'oracleNodeId',
                type: 'bytes32',
              },
              {
                internalType: 'bytes32',
                name: 'pythPriceFeedId',
                type: 'bytes32',
              },
              {
                internalType: 'uint128',
                name: 'makerFee',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'takerFee',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'maxMarketSize',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'maxFundingVelocity',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'skewScale',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'fundingVelocityClamp',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'minCreditPercent',
                type: 'uint128',
              },
              {
                internalType: 'uint256',
                name: 'minMarginUsd',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'minMarginRatio',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'incrementalMarginScalar',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'maintenanceMarginScalar',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'maxInitialMarginRatio',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'liquidationRewardPercent',
                type: 'uint256',
              },
              {
                internalType: 'uint128',
                name: 'liquidationLimitScalar',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'liquidationWindowDuration',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'liquidationMaxPd',
                type: 'uint128',
              },
            ],
            internalType: 'struct PerpMarketConfiguration.Data',
            name: '',
            type: 'tuple',
          },
        ],
        stateMutability: 'pure',
        type: 'function',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'uint64',
                name: 'pythPublishTimeMin',
                type: 'uint64',
              },
              {
                internalType: 'uint64',
                name: 'pythPublishTimeMax',
                type: 'uint64',
              },
              {
                internalType: 'uint64',
                name: 'minOrderAge',
                type: 'uint64',
              },
              {
                internalType: 'uint64',
                name: 'maxOrderAge',
                type: 'uint64',
              },
              {
                internalType: 'uint256',
                name: 'minKeeperFeeUsd',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'maxKeeperFeeUsd',
                type: 'uint256',
              },
              {
                internalType: 'uint128',
                name: 'keeperProfitMarginPercent',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'keeperProfitMarginUsd',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'keeperSettlementGasUnits',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'keeperCancellationGasUnits',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'keeperLiquidationGasUnits',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'keeperFlagGasUnits',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'keeperLiquidateMarginGasUnits',
                type: 'uint128',
              },
              {
                internalType: 'address',
                name: 'keeperLiquidationEndorsed',
                type: 'address',
              },
              {
                internalType: 'uint128',
                name: 'collateralDiscountScalar',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'minCollateralDiscount',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'maxCollateralDiscount',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'utilizationBreakpointPercent',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'lowUtilizationSlopePercent',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'highUtilizationSlopePercent',
                type: 'uint128',
              },
            ],
            internalType: 'struct IMarketConfigurationModule.GlobalMarketConfigureParameters',
            name: 'data',
            type: 'tuple',
          },
        ],
        name: 'setMarketConfiguration',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'uint128',
                name: 'marketId',
                type: 'uint128',
              },
              {
                internalType: 'bytes32',
                name: 'oracleNodeId',
                type: 'bytes32',
              },
              {
                internalType: 'bytes32',
                name: 'pythPriceFeedId',
                type: 'bytes32',
              },
              {
                internalType: 'uint128',
                name: 'makerFee',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'takerFee',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'maxMarketSize',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'maxFundingVelocity',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'skewScale',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'fundingVelocityClamp',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'minCreditPercent',
                type: 'uint128',
              },
              {
                internalType: 'uint256',
                name: 'minMarginUsd',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'minMarginRatio',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'incrementalMarginScalar',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'maintenanceMarginScalar',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'maxInitialMarginRatio',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'liquidationRewardPercent',
                type: 'uint256',
              },
              {
                internalType: 'uint128',
                name: 'liquidationLimitScalar',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'liquidationWindowDuration',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'liquidationMaxPd',
                type: 'uint128',
              },
            ],
            internalType: 'struct IMarketConfigurationModule.ConfigureByMarketParameters',
            name: 'data',
            type: 'tuple',
          },
        ],
        name: 'setMarketConfigurationById',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
  PerpRewardDistributor: {
    address: '0xb0C1b6f0eFA6bDFFA958fC65bdC0bBD74E3d66aD',
    abi: [
      {
        inputs: [],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
        ],
        name: 'FailedTransfer',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'balance',
            type: 'uint256',
          },
        ],
        name: 'InsufficientRewardBalance',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'string',
            name: 'parameter',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'reason',
            type: 'string',
          },
        ],
        name: 'InvalidParameter',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'Unauthorized',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint8',
            name: 'version',
            type: 'uint8',
          },
        ],
        name: 'Initialized',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'distributeRewards',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getPoolCollateralTypes',
        outputs: [
          {
            internalType: 'address[]',
            name: '',
            type: 'address[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getPoolId',
        outputs: [
          {
            internalType: 'uint128',
            name: '',
            type: 'uint128',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'rewardManager',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'perpMarket',
            type: 'address',
          },
          {
            internalType: 'uint128',
            name: 'poolId_',
            type: 'uint128',
          },
          {
            internalType: 'address[]',
            name: 'poolCollateralTypes_',
            type: 'address[]',
          },
          {
            internalType: 'address',
            name: 'payoutToken_',
            type: 'address',
          },
          {
            internalType: 'string',
            name: 'name_',
            type: 'string',
          },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'name',
        outputs: [
          {
            internalType: 'string',
            name: '',
            type: 'string',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: '',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: '',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        name: 'onPositionUpdated',
        outputs: [],
        stateMutability: 'pure',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: '',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'payoutTarget_',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'payoutAmount_',
            type: 'uint256',
          },
        ],
        name: 'payout',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bool',
            name: '_shouldFailedPayout',
            type: 'bool',
          },
        ],
        name: 'setShouldFailPayout',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'shouldFailPayout',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes4',
            name: 'interfaceId',
            type: 'bytes4',
          },
        ],
        name: 'supportsInterface',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'token',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
    ],
  },
  SettlementHookModule: {
    address: '0x98662d7BaD3e1564549184D0D397a739C757A1FF',
    abi: [
      {
        inputs: [
          {
            internalType: 'address',
            name: 'hook',
            type: 'address',
          },
        ],
        name: 'InvalidHook',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'Unauthorized',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'hooks',
            type: 'uint256',
          },
        ],
        name: 'SettlementHookConfigured',
        type: 'event',
      },
      {
        inputs: [],
        name: 'getSettlementHookConfiguration',
        outputs: [
          {
            components: [
              {
                internalType: 'address[]',
                name: 'whitelistedHookAddresses',
                type: 'address[]',
              },
              {
                internalType: 'uint32',
                name: 'maxHooksPerOrder',
                type: 'uint32',
              },
            ],
            internalType: 'struct ISettlementHookModule.SettlementHookConfigureParameters',
            name: '',
            type: 'tuple',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'hook',
            type: 'address',
          },
        ],
        name: 'isSettlementHookWhitelisted',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'address[]',
                name: 'whitelistedHookAddresses',
                type: 'address[]',
              },
              {
                internalType: 'uint32',
                name: 'maxHooksPerOrder',
                type: 'uint32',
              },
            ],
            internalType: 'struct ISettlementHookModule.SettlementHookConfigureParameters',
            name: 'data',
            type: 'tuple',
          },
        ],
        name: 'setSettlementHookConfiguration',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
  InitialBfpMarketProxy: {
    address: '0xEf654C46c8f33c7F6b0db04BF64DFd5f228c35d4',
    abi: [
      {
        inputs: [
          {
            internalType: 'address',
            name: 'implementation',
            type: 'address',
          },
        ],
        name: 'ImplementationIsSterile',
        type: 'error',
      },
      {
        inputs: [],
        name: 'NoChange',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'contr',
            type: 'address',
          },
        ],
        name: 'NotAContract',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'NotNominated',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'Unauthorized',
        type: 'error',
      },
      {
        inputs: [],
        name: 'UpgradeSimulationFailed',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ZeroAddress',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'oldOwner',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnerChanged',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnerNominated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'self',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'implementation',
            type: 'address',
          },
        ],
        name: 'Upgraded',
        type: 'event',
      },
      {
        inputs: [],
        name: 'acceptOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getImplementation',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newNominatedOwner',
            type: 'address',
          },
        ],
        name: 'nominateNewOwner',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'nominatedOwner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'renounceNomination',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newImplementation',
            type: 'address',
          },
        ],
        name: 'simulateUpgradeTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newImplementation',
            type: 'address',
          },
        ],
        name: 'upgradeTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
  AccountModule: {
    address: '0x66379373B4df3D93cd6A50114594B66F21b3Aaee',
    abi: [
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'which',
            type: 'bytes32',
          },
        ],
        name: 'FeatureUnavailable',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
        ],
        name: 'InvalidAccountId',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
        ],
        name: 'InvalidPermission',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'origin',
            type: 'address',
          },
        ],
        name: 'OnlyAccountTokenProxy',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
        ],
        name: 'PermissionDenied',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
        ],
        name: 'PermissionNotGranted',
        type: 'error',
      },
      {
        inputs: [],
        name: 'PositionOutOfBounds',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ValueAlreadyInSet',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ValueNotInSet',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ZeroAddress',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
        ],
        name: 'AccountCreated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'PermissionGranted',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'PermissionRevoked',
        type: 'event',
      },
      {
        inputs: [],
        name: 'createAccount',
        outputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'requestedAccountId',
            type: 'uint128',
          },
        ],
        name: 'createAccount',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
        ],
        name: 'getAccountLastInteraction',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
        ],
        name: 'getAccountOwner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
        ],
        name: 'getAccountPermissions',
        outputs: [
          {
            components: [
              {
                internalType: 'address',
                name: 'user',
                type: 'address',
              },
              {
                internalType: 'bytes32[]',
                name: 'permissions',
                type: 'bytes32[]',
              },
            ],
            internalType: 'struct IAccountModule.AccountPermissions[]',
            name: 'accountPerms',
            type: 'tuple[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getAccountTokenAddress',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
        ],
        name: 'grantPermission',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
        ],
        name: 'hasPermission',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
        ],
        name: 'isAuthorized',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
        ],
        name: 'notifyAccountTransfer',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
        ],
        name: 'renouncePermission',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
        ],
        name: 'revokePermission',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
  AccountTokenModule: {
    address: '0xEa9E9482F6E15cbFaEDe135b181E7b7457596042',
    abi: [
      {
        inputs: [],
        name: 'AlreadyInitialized',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'CannotSelfApprove',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'requestedIndex',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'length',
            type: 'uint256',
          },
        ],
        name: 'IndexOverrun',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'InvalidOwner',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'string',
            name: 'parameter',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'reason',
            type: 'string',
          },
        ],
        name: 'InvalidParameter',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'InvalidTransferRecipient',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToUint128',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
        ],
        name: 'TokenAlreadyMinted',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
        ],
        name: 'TokenDoesNotExist',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'Unauthorized',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ZeroAddress',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'approved',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'Approval',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'operator',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'bool',
            name: 'approved',
            type: 'bool',
          },
        ],
        name: 'ApprovalForAll',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'Transfer',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'approve',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'holder',
            type: 'address',
          },
        ],
        name: 'balanceOf',
        outputs: [
          {
            internalType: 'uint256',
            name: 'balance',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'burn',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'getApproved',
        outputs: [
          {
            internalType: 'address',
            name: 'operator',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'string',
            name: 'tokenName',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'tokenSymbol',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'uri',
            type: 'string',
          },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'holder',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'operator',
            type: 'address',
          },
        ],
        name: 'isApprovedForAll',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'isInitialized',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'mint',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'name',
        outputs: [
          {
            internalType: 'string',
            name: '',
            type: 'string',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'ownerOf',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes',
          },
        ],
        name: 'safeMint',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes',
          },
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
        ],
        name: 'setAllowance',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'operator',
            type: 'address',
          },
          {
            internalType: 'bool',
            name: 'approved',
            type: 'bool',
          },
        ],
        name: 'setApprovalForAll',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'string',
            name: 'uri',
            type: 'string',
          },
        ],
        name: 'setBaseTokenURI',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes4',
            name: 'interfaceId',
            type: 'bytes4',
          },
        ],
        name: 'supportsInterface',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'symbol',
        outputs: [
          {
            internalType: 'string',
            name: '',
            type: 'string',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'index',
            type: 'uint256',
          },
        ],
        name: 'tokenByIndex',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'index',
            type: 'uint256',
          },
        ],
        name: 'tokenOfOwnerByIndex',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'tokenURI',
        outputs: [
          {
            internalType: 'string',
            name: '',
            type: 'string',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'totalSupply',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'transferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
  AssociateDebtModule: {
    address: '0xeDB4D0F1aCBC6fE4665Daf2344c8623989b025F6',
    abi: [
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
        ],
        name: 'AccountNotFound',
        type: 'error',
      },
      {
        inputs: [],
        name: 'EmptyDistribution',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'which',
            type: 'bytes32',
          },
        ],
        name: 'FeatureUnavailable',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'collateralValue',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'debt',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'ratio',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'minRatio',
            type: 'uint256',
          },
        ],
        name: 'InsufficientCollateralRatio',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'MarketNotFound',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'marketId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'poolId',
            type: 'uint256',
          },
        ],
        name: 'NotFundedByPool',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt256ToInt128',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt256ToUint256',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint128ToInt128',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToInt256',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToUint128',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'Unauthorized',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'int256',
            name: 'updatedDebt',
            type: 'int256',
          },
        ],
        name: 'DebtAssociated',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'associateDebt',
        outputs: [
          {
            internalType: 'int256',
            name: '',
            type: 'int256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
  AssociatedSystemsModule: {
    address: '0xf74D746816833cF90E1A3fBb3ACD6E61851F2Ec9',
    abi: [
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'expected',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'actual',
            type: 'bytes32',
          },
        ],
        name: 'MismatchAssociatedSystemKind',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
        ],
        name: 'MissingAssociatedSystem',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'Unauthorized',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'kind',
            type: 'bytes32',
          },
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'proxy',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'impl',
            type: 'address',
          },
        ],
        name: 'AssociatedSystemSet',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
        ],
        name: 'getAssociatedSystem',
        outputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
          {
            internalType: 'bytes32',
            name: 'kind',
            type: 'bytes32',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'symbol',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'uri',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 'impl',
            type: 'address',
          },
        ],
        name: 'initOrUpgradeNft',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'symbol',
            type: 'string',
          },
          {
            internalType: 'uint8',
            name: 'decimals',
            type: 'uint8',
          },
          {
            internalType: 'address',
            name: 'impl',
            type: 'address',
          },
        ],
        name: 'initOrUpgradeToken',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'endpoint',
            type: 'address',
          },
        ],
        name: 'registerUnmanagedSystem',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
  CcipReceiverModule: {
    address: '0x61236a268D0498C2234335975f4E41660b062ff8',
    abi: [
      {
        inputs: [],
        name: 'InvalidMessage',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        name: 'NotCcipRouter',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'Unauthorized',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint64',
            name: '',
            type: 'uint64',
          },
        ],
        name: 'UnsupportedNetwork',
        type: 'error',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'bytes32',
                name: 'messageId',
                type: 'bytes32',
              },
              {
                internalType: 'uint64',
                name: 'sourceChainSelector',
                type: 'uint64',
              },
              {
                internalType: 'bytes',
                name: 'sender',
                type: 'bytes',
              },
              {
                internalType: 'bytes',
                name: 'data',
                type: 'bytes',
              },
              {
                components: [
                  {
                    internalType: 'address',
                    name: 'token',
                    type: 'address',
                  },
                  {
                    internalType: 'uint256',
                    name: 'amount',
                    type: 'uint256',
                  },
                ],
                internalType: 'struct CcipClient.EVMTokenAmount[]',
                name: 'tokenAmounts',
                type: 'tuple[]',
              },
            ],
            internalType: 'struct CcipClient.Any2EVMMessage',
            name: 'message',
            type: 'tuple',
          },
        ],
        name: 'ccipReceive',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
  CollateralConfigurationModule: {
    address: '0xCc1dB5266C15f2feC33422BA0164A07d3a49c890',
    abi: [
      {
        inputs: [
          {
            internalType: 'string',
            name: 'parameter',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'reason',
            type: 'string',
          },
        ],
        name: 'InvalidParameter',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt256ToUint256',
        type: 'error',
      },
      {
        inputs: [],
        name: 'PositionOutOfBounds',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'Unauthorized',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ValueAlreadyInSet',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            components: [
              {
                internalType: 'bool',
                name: 'depositingEnabled',
                type: 'bool',
              },
              {
                internalType: 'uint256',
                name: 'issuanceRatioD18',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'liquidationRatioD18',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'liquidationRewardD18',
                type: 'uint256',
              },
              {
                internalType: 'bytes32',
                name: 'oracleNodeId',
                type: 'bytes32',
              },
              {
                internalType: 'address',
                name: 'tokenAddress',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'minDelegationD18',
                type: 'uint256',
              },
            ],
            indexed: false,
            internalType: 'struct CollateralConfiguration.Data',
            name: 'config',
            type: 'tuple',
          },
        ],
        name: 'CollateralConfigured',
        type: 'event',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'bool',
                name: 'depositingEnabled',
                type: 'bool',
              },
              {
                internalType: 'uint256',
                name: 'issuanceRatioD18',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'liquidationRatioD18',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'liquidationRewardD18',
                type: 'uint256',
              },
              {
                internalType: 'bytes32',
                name: 'oracleNodeId',
                type: 'bytes32',
              },
              {
                internalType: 'address',
                name: 'tokenAddress',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'minDelegationD18',
                type: 'uint256',
              },
            ],
            internalType: 'struct CollateralConfiguration.Data',
            name: 'config',
            type: 'tuple',
          },
        ],
        name: 'configureCollateral',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'getCollateralConfiguration',
        outputs: [
          {
            components: [
              {
                internalType: 'bool',
                name: 'depositingEnabled',
                type: 'bool',
              },
              {
                internalType: 'uint256',
                name: 'issuanceRatioD18',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'liquidationRatioD18',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'liquidationRewardD18',
                type: 'uint256',
              },
              {
                internalType: 'bytes32',
                name: 'oracleNodeId',
                type: 'bytes32',
              },
              {
                internalType: 'address',
                name: 'tokenAddress',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'minDelegationD18',
                type: 'uint256',
              },
            ],
            internalType: 'struct CollateralConfiguration.Data',
            name: '',
            type: 'tuple',
          },
        ],
        stateMutability: 'pure',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bool',
            name: 'hideDisabled',
            type: 'bool',
          },
        ],
        name: 'getCollateralConfigurations',
        outputs: [
          {
            components: [
              {
                internalType: 'bool',
                name: 'depositingEnabled',
                type: 'bool',
              },
              {
                internalType: 'uint256',
                name: 'issuanceRatioD18',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'liquidationRatioD18',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'liquidationRewardD18',
                type: 'uint256',
              },
              {
                internalType: 'bytes32',
                name: 'oracleNodeId',
                type: 'bytes32',
              },
              {
                internalType: 'address',
                name: 'tokenAddress',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'minDelegationD18',
                type: 'uint256',
              },
            ],
            internalType: 'struct CollateralConfiguration.Data[]',
            name: '',
            type: 'tuple[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'getCollateralPrice',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
    ],
  },
  CollateralModule: {
    address: '0x1FA7961F44E7afAc853687A3BD14Fc99245e5ba2',
    abi: [
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint256',
            name: 'currentTime',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'requiredTime',
            type: 'uint256',
          },
        ],
        name: 'AccountActivityTimeoutPending',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
        ],
        name: 'AccountNotFound',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'CollateralDepositDisabled',
        type: 'error',
      },
      {
        inputs: [],
        name: 'CollateralNotFound',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
        ],
        name: 'FailedTransfer',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'which',
            type: 'bytes32',
          },
        ],
        name: 'FeatureUnavailable',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amountAvailableForDelegationD18',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amountD18',
            type: 'uint256',
          },
        ],
        name: 'InsufficentAvailableCollateral',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'InsufficientAccountCollateral',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'required',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'existing',
            type: 'uint256',
          },
        ],
        name: 'InsufficientAllowance',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'string',
            name: 'parameter',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'reason',
            type: 'string',
          },
        ],
        name: 'InvalidParameter',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt256ToUint256',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToUint128',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToUint64',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
        ],
        name: 'PermissionDenied',
        type: 'error',
      },
      {
        inputs: [],
        name: 'PositionOutOfBounds',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'tokenAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint8',
            name: 'decimals',
            type: 'uint8',
          },
        ],
        name: 'PrecisionLost',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'tokenAmount',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint64',
            name: 'expireTimestamp',
            type: 'uint64',
          },
        ],
        name: 'CollateralLockCreated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'tokenAmount',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint64',
            name: 'expireTimestamp',
            type: 'uint64',
          },
        ],
        name: 'CollateralLockExpired',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'tokenAmount',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'Deposited',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'tokenAmount',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'Withdrawn',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'offset',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'count',
            type: 'uint256',
          },
        ],
        name: 'cleanExpiredLocks',
        outputs: [
          {
            internalType: 'uint256',
            name: 'cleared',
            type: 'uint256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'uint64',
            name: 'expireTimestamp',
            type: 'uint64',
          },
        ],
        name: 'createLock',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenAmount',
            type: 'uint256',
          },
        ],
        name: 'deposit',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'getAccountAvailableCollateral',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'getAccountCollateral',
        outputs: [
          {
            internalType: 'uint256',
            name: 'totalDeposited',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'totalAssigned',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'totalLocked',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'offset',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'count',
            type: 'uint256',
          },
        ],
        name: 'getLocks',
        outputs: [
          {
            components: [
              {
                internalType: 'uint128',
                name: 'amountD18',
                type: 'uint128',
              },
              {
                internalType: 'uint64',
                name: 'lockExpirationTime',
                type: 'uint64',
              },
            ],
            internalType: 'struct CollateralLock.Data[]',
            name: 'locks',
            type: 'tuple[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenAmount',
            type: 'uint256',
          },
        ],
        name: 'withdraw',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
  CrossChainUSDModule: {
    address: '0xdfE88f5cA1C0d6D6670905c70b90279bb955F681',
    abi: [
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'which',
            type: 'bytes32',
          },
        ],
        name: 'FeatureUnavailable',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'requiredAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'availableAmount',
            type: 'uint256',
          },
        ],
        name: 'InsufficientCcipFee',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'expected',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'actual',
            type: 'bytes32',
          },
        ],
        name: 'MismatchAssociatedSystemKind',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint64',
            name: 'destChainId',
            type: 'uint64',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'TransferCrossChainInitiated',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'uint64',
            name: 'destChainId',
            type: 'uint64',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'transferCrossChain',
        outputs: [
          {
            internalType: 'uint256',
            name: 'gasTokenUsed',
            type: 'uint256',
          },
        ],
        stateMutability: 'payable',
        type: 'function',
      },
    ],
  },
  IssueUSDModule: {
    address: '0xD052fC25387f2Af10DFFB005871344A5E043b9bF',
    abi: [
      {
        inputs: [
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'CollateralDepositDisabled',
        type: 'error',
      },
      {
        inputs: [],
        name: 'EmptyDistribution',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'which',
            type: 'bytes32',
          },
        ],
        name: 'FeatureUnavailable',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amountAvailableForDelegationD18',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amountD18',
            type: 'uint256',
          },
        ],
        name: 'InsufficentAvailableCollateral',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'collateralValue',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'debt',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'ratio',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'minRatio',
            type: 'uint256',
          },
        ],
        name: 'InsufficientCollateralRatio',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'int256',
            name: 'currentDebt',
            type: 'int256',
          },
        ],
        name: 'InsufficientDebt',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'string',
            name: 'parameter',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'reason',
            type: 'string',
          },
        ],
        name: 'InvalidParameter',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'MarketNotFound',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'expected',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'actual',
            type: 'bytes32',
          },
        ],
        name: 'MismatchAssociatedSystemKind',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt256ToInt128',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt256ToUint256',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint128ToInt128',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToInt256',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToUint128',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
        ],
        name: 'PermissionDenied',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'PoolNotFound',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'feeAmount',
            type: 'uint256',
          },
        ],
        name: 'IssuanceFeePaid',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'UsdBurned',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'UsdMinted',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'burnUsd',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'mintUsd',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
  LiquidationModule: {
    address: '0xd8cBe847E1DFd006fF9c5812A10f204Bf028aa62',
    abi: [
      {
        inputs: [
          {
            internalType: 'address',
            name: '_synthetix',
            type: 'address',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
        ],
        name: 'AccountNotFound',
        type: 'error',
      },
      {
        inputs: [],
        name: 'CannotLiquidateMargin',
        type: 'error',
      },
      {
        inputs: [],
        name: 'CannotLiquidatePosition',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'which',
            type: 'bytes32',
          },
        ],
        name: 'FeatureUnavailable',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'synthetixCore',
            type: 'address',
          },
        ],
        name: 'InvalidCoreAddress',
        type: 'error',
      },
      {
        inputs: [],
        name: 'LiquidationZeroCapacity',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'MarketNotFound',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt256ToInt128',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt256ToUint256',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint128ToInt128',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToInt256',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToUint128',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToUint64',
        type: 'error',
      },
      {
        inputs: [],
        name: 'PositionFlagged',
        type: 'error',
      },
      {
        inputs: [],
        name: 'PositionNotFlagged',
        type: 'error',
      },
      {
        inputs: [],
        name: 'PositionNotFound',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'skew',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'fundingRate',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'fundingVelocity',
            type: 'int128',
          },
        ],
        name: 'FundingRecomputed',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'keeperReward',
            type: 'uint256',
          },
        ],
        name: 'MarginLiquidated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'size',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'skew',
            type: 'int128',
          },
        ],
        name: 'MarketSizeUpdated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'keeperFee',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint64',
            name: 'commitmentTime',
            type: 'uint64',
          },
        ],
        name: 'OrderCanceled',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'flagger',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'flagKeeperReward',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'flaggedPrice',
            type: 'uint256',
          },
        ],
        name: 'PositionFlaggedLiquidation',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'sizeBeforeLiquidation',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'remainingSize',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'keeper',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'flagger',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'liqKeeperFee',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'liquidationPrice',
            type: 'uint256',
          },
        ],
        name: 'PositionLiquidated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'skew',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'utilizationRate',
            type: 'uint128',
          },
        ],
        name: 'UtilizationRecomputed',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'flagPosition',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getHealthFactor',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getLiquidationFees',
        outputs: [
          {
            internalType: 'uint256',
            name: 'flagKeeperReward',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'liqKeeperFee',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'int128',
            name: 'sizeDelta',
            type: 'int128',
          },
        ],
        name: 'getLiquidationMarginUsd',
        outputs: [
          {
            internalType: 'uint256',
            name: 'im',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'mm',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getRemainingLiquidatableSizeCapacity',
        outputs: [
          {
            internalType: 'uint128',
            name: 'maxLiquidatableCapacity',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'remainingCapacity',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'lastLiquidationTimestamp',
            type: 'uint128',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'isMarginLiquidatable',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'isPositionLiquidatable',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'liquidateMarginOnly',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'liquidatePosition',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
  MarketCollateralModule: {
    address: '0xE66e9957902BE7CaF4c69662A48E346EB275A040',
    abi: [
      {
        inputs: [],
        name: 'CollateralNotFound',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
        ],
        name: 'FailedTransfer',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'which',
            type: 'bytes32',
          },
        ],
        name: 'FeatureUnavailable',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenAmountToDeposit',
            type: 'uint256',
          },
        ],
        name: 'InsufficientMarketCollateralDepositable',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenAmountToWithdraw',
            type: 'uint256',
          },
        ],
        name: 'InsufficientMarketCollateralWithdrawable',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt256ToUint256',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToInt256',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'tokenAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint8',
            name: 'decimals',
            type: 'uint8',
          },
        ],
        name: 'PrecisionLost',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'Unauthorized',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'tokenAmount',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'creditCapacity',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'netIssuance',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'depositedCollateralValue',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'reportedDebt',
            type: 'uint256',
          },
        ],
        name: 'MarketCollateralDeposited',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'tokenAmount',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'creditCapacity',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'netIssuance',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'depositedCollateralValue',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'reportedDebt',
            type: 'uint256',
          },
        ],
        name: 'MarketCollateralWithdrawn',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'systemAmount',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
        ],
        name: 'MaximumMarketCollateralConfigured',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'configureMaximumMarketCollateral',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenAmount',
            type: 'uint256',
          },
        ],
        name: 'depositMarketCollateral',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'getMarketCollateralAmount',
        outputs: [
          {
            internalType: 'uint256',
            name: 'collateralAmountD18',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getMarketCollateralValue',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'getMaximumMarketCollateral',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenAmount',
            type: 'uint256',
          },
        ],
        name: 'withdrawMarketCollateral',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
  MarketManagerModule: {
    address: '0x5e6E1d87494Ed954fdE743f85829f9c97C052B5E',
    abi: [
      {
        inputs: [],
        name: 'EmptyDistribution',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'which',
            type: 'bytes32',
          },
        ],
        name: 'FeatureUnavailable',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'market',
            type: 'address',
          },
        ],
        name: 'IncorrectMarketInterface',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'string',
            name: 'parameter',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'reason',
            type: 'string',
          },
        ],
        name: 'InvalidParameter',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'expected',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'actual',
            type: 'bytes32',
          },
        ],
        name: 'MismatchAssociatedSystemKind',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'NotEnoughLiquidity',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt256ToInt128',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt256ToUint256',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint128ToInt128',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToInt256',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToUint128',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'Unauthorized',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'market',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'MarketRegistered',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'feeAmount',
            type: 'uint256',
          },
        ],
        name: 'MarketSystemFeePaid',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'market',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'creditCapacity',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'netIssuance',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'depositedCollateralValue',
            type: 'uint256',
          },
        ],
        name: 'MarketUsdDeposited',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'market',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'creditCapacity',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'netIssuance',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'depositedCollateralValue',
            type: 'uint256',
          },
        ],
        name: 'MarketUsdWithdrawn',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'minLiquidityRatio',
            type: 'uint256',
          },
        ],
        name: 'SetMarketMinLiquidityRatio',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint32',
            name: 'minDelegateTime',
            type: 'uint32',
          },
        ],
        name: 'SetMinDelegateTime',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'depositMarketUsd',
        outputs: [
          {
            internalType: 'uint256',
            name: 'feeAmount',
            type: 'uint256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'uint256',
            name: 'maxIter',
            type: 'uint256',
          },
        ],
        name: 'distributeDebtToPools',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getMarketAddress',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getMarketCollateral',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getMarketDebtPerShare',
        outputs: [
          {
            internalType: 'int256',
            name: '',
            type: 'int256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: '',
            type: 'uint128',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'getMarketFees',
        outputs: [
          {
            internalType: 'uint256',
            name: 'depositFeeAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'withdrawFeeAmount',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getMarketMinDelegateTime',
        outputs: [
          {
            internalType: 'uint32',
            name: '',
            type: 'uint32',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getMarketNetIssuance',
        outputs: [
          {
            internalType: 'int128',
            name: '',
            type: 'int128',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'getMarketPoolDebtDistribution',
        outputs: [
          {
            internalType: 'uint256',
            name: 'sharesD18',
            type: 'uint256',
          },
          {
            internalType: 'uint128',
            name: 'totalSharesD18',
            type: 'uint128',
          },
          {
            internalType: 'int128',
            name: 'valuePerShareD27',
            type: 'int128',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getMarketPools',
        outputs: [
          {
            internalType: 'uint128[]',
            name: 'inRangePoolIds',
            type: 'uint128[]',
          },
          {
            internalType: 'uint128[]',
            name: 'outRangePoolIds',
            type: 'uint128[]',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getMarketReportedDebt',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getMarketTotalDebt',
        outputs: [
          {
            internalType: 'int256',
            name: '',
            type: 'int256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getMinLiquidityRatio',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getOracleManager',
        outputs: [
          {
            internalType: 'contract IOracleManager',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getUsdToken',
        outputs: [
          {
            internalType: 'contract IERC20',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getWithdrawableMarketUsd',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'isMarketCapacityLocked',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'market',
            type: 'address',
          },
        ],
        name: 'registerMarket',
        outputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'uint32',
            name: 'minDelegateTime',
            type: 'uint32',
          },
        ],
        name: 'setMarketMinDelegateTime',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'uint256',
            name: 'minLiquidityRatio',
            type: 'uint256',
          },
        ],
        name: 'setMinLiquidityRatio',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'withdrawMarketUsd',
        outputs: [
          {
            internalType: 'uint256',
            name: 'feeAmount',
            type: 'uint256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
  PoolConfigurationModule: {
    address: '0xEa7816325Cc48075A1870ce0FAd5C3881B3F94cA',
    abi: [
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'PoolNotFound',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'Unauthorized',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ValueAlreadyInSet',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ValueNotInSet',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'poolId',
            type: 'uint256',
          },
        ],
        name: 'PoolApprovedAdded',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'poolId',
            type: 'uint256',
          },
        ],
        name: 'PoolApprovedRemoved',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'poolId',
            type: 'uint256',
          },
        ],
        name: 'PreferredPoolSet',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'addApprovedPool',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getApprovedPools',
        outputs: [
          {
            internalType: 'uint256[]',
            name: '',
            type: 'uint256[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getPreferredPool',
        outputs: [
          {
            internalType: 'uint128',
            name: '',
            type: 'uint128',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'removeApprovedPool',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'setPreferredPool',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
  PoolModule: {
    address: '0x10bE696c63818d5f13436A1dd40F6Be4E3901efe',
    abi: [
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'marketId',
            type: 'uint256',
          },
        ],
        name: 'CapacityLocked',
        type: 'error',
      },
      {
        inputs: [],
        name: 'EmptyDistribution',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'which',
            type: 'bytes32',
          },
        ],
        name: 'FeatureUnavailable',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'string',
            name: 'parameter',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'reason',
            type: 'string',
          },
        ],
        name: 'InvalidParameter',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'MarketNotFound',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'uint32',
            name: 'timeRemaining',
            type: 'uint32',
          },
        ],
        name: 'MinDelegationTimeoutPending',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt256ToInt128',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt256ToUint256',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint128ToInt128',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToInt256',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToUint128',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'PoolAlreadyExists',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'PoolNotFound',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'Unauthorized',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ZeroAddress',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'collateralLimitD18',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'issuanceRatioD18',
                type: 'uint256',
              },
            ],
            indexed: false,
            internalType: 'struct PoolCollateralConfiguration.Data',
            name: 'config',
            type: 'tuple',
          },
        ],
        name: 'PoolCollateralConfigurationUpdated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'bool',
            name: 'disabled',
            type: 'bool',
          },
        ],
        name: 'PoolCollateralDisabledByDefaultSet',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            components: [
              {
                internalType: 'uint128',
                name: 'marketId',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'weightD18',
                type: 'uint128',
              },
              {
                internalType: 'int128',
                name: 'maxDebtShareValueD18',
                type: 'int128',
              },
            ],
            indexed: false,
            internalType: 'struct MarketConfiguration.Data[]',
            name: 'markets',
            type: 'tuple[]',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'PoolConfigurationSet',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'PoolCreated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'PoolNameUpdated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
        ],
        name: 'PoolNominationRenounced',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
        ],
        name: 'PoolNominationRevoked',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'nominatedOwner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
        ],
        name: 'PoolOwnerNominated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
        ],
        name: 'PoolOwnershipAccepted',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
        ],
        name: 'PoolOwnershipRenounced',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'minLiquidityRatio',
            type: 'uint256',
          },
        ],
        name: 'SetMinLiquidityRatio',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'acceptPoolOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'requestedPoolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
        ],
        name: 'createPool',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getMinLiquidityRatio',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'getNominatedPoolOwner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'getPoolCollateralConfiguration',
        outputs: [
          {
            components: [
              {
                internalType: 'uint256',
                name: 'collateralLimitD18',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'issuanceRatioD18',
                type: 'uint256',
              },
            ],
            internalType: 'struct PoolCollateralConfiguration.Data',
            name: 'config',
            type: 'tuple',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateral',
            type: 'address',
          },
        ],
        name: 'getPoolCollateralIssuanceRatio',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'getPoolConfiguration',
        outputs: [
          {
            components: [
              {
                internalType: 'uint128',
                name: 'marketId',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'weightD18',
                type: 'uint128',
              },
              {
                internalType: 'int128',
                name: 'maxDebtShareValueD18',
                type: 'int128',
              },
            ],
            internalType: 'struct MarketConfiguration.Data[]',
            name: '',
            type: 'tuple[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'getPoolName',
        outputs: [
          {
            internalType: 'string',
            name: 'poolName',
            type: 'string',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'getPoolOwner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'nominatedOwner',
            type: 'address',
          },
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'nominatePoolOwner',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'optionalCollateralType',
            type: 'address',
          },
        ],
        name: 'rebalancePool',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'renouncePoolNomination',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'renouncePoolOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'revokePoolNomination',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'minLiquidityRatio',
            type: 'uint256',
          },
        ],
        name: 'setMinLiquidityRatio',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'collateralLimitD18',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'issuanceRatioD18',
                type: 'uint256',
              },
            ],
            internalType: 'struct PoolCollateralConfiguration.Data',
            name: 'newConfig',
            type: 'tuple',
          },
        ],
        name: 'setPoolCollateralConfiguration',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'bool',
            name: 'disabled',
            type: 'bool',
          },
        ],
        name: 'setPoolCollateralDisabledByDefault',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            components: [
              {
                internalType: 'uint128',
                name: 'marketId',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'weightD18',
                type: 'uint128',
              },
              {
                internalType: 'int128',
                name: 'maxDebtShareValueD18',
                type: 'int128',
              },
            ],
            internalType: 'struct MarketConfiguration.Data[]',
            name: 'newMarketConfigurations',
            type: 'tuple[]',
          },
        ],
        name: 'setPoolConfiguration',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
        ],
        name: 'setPoolName',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
  RewardsManagerModule: {
    address: '0x7674601bC10bdF1FC9944D31ADC814b831b37231',
    abi: [
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
        ],
        name: 'AccountNotFound',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'which',
            type: 'bytes32',
          },
        ],
        name: 'FeatureUnavailable',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'string',
            name: 'parameter',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'reason',
            type: 'string',
          },
        ],
        name: 'InvalidParameter',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt256ToInt128',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt256ToUint256',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToInt256',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToUint128',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToUint32',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint32ToInt32',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint64ToInt64',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
        ],
        name: 'PermissionDenied',
        type: 'error',
      },
      {
        inputs: [],
        name: 'PositionOutOfBounds',
        type: 'error',
      },
      {
        inputs: [],
        name: 'RewardDistributorNotFound',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'distributor',
            type: 'address',
          },
        ],
        name: 'RewardUnavailable',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'Unauthorized',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ValueAlreadyInSet',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ValueNotInSet',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'distributor',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'RewardsClaimed',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'distributor',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'start',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'duration',
            type: 'uint256',
          },
        ],
        name: 'RewardsDistributed',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'distributor',
            type: 'address',
          },
        ],
        name: 'RewardsDistributorRegistered',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'distributor',
            type: 'address',
          },
        ],
        name: 'RewardsDistributorRemoved',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'distributor',
            type: 'address',
          },
        ],
        name: 'claimRewards',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'uint64',
            name: 'start',
            type: 'uint64',
          },
          {
            internalType: 'uint32',
            name: 'duration',
            type: 'uint32',
          },
        ],
        name: 'distributeRewards',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'rewardsDistributor',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'uint64',
            name: 'start',
            type: 'uint64',
          },
          {
            internalType: 'uint32',
            name: 'duration',
            type: 'uint32',
          },
        ],
        name: 'distributeRewardsByOwner',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'distributor',
            type: 'address',
          },
        ],
        name: 'getAvailableRewards',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'distributor',
            type: 'address',
          },
        ],
        name: 'getRewardRate',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'distributor',
            type: 'address',
          },
        ],
        name: 'registerRewardsDistributor',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'distributor',
            type: 'address',
          },
        ],
        name: 'removeRewardsDistributor',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
        ],
        name: 'updateRewards',
        outputs: [
          {
            internalType: 'uint256[]',
            name: '',
            type: 'uint256[]',
          },
          {
            internalType: 'address[]',
            name: '',
            type: 'address[]',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
  USDTokenModule: {
    address: '0x2A529f6b9F91Bc1F809a7802cC944839aA240724',
    abi: [
      {
        inputs: [],
        name: 'AlreadyInitialized',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'required',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'existing',
            type: 'uint256',
          },
        ],
        name: 'InsufficientAllowance',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'required',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'existing',
            type: 'uint256',
          },
        ],
        name: 'InsufficientBalance',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'string',
            name: 'parameter',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'reason',
            type: 'string',
          },
        ],
        name: 'InvalidParameter',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'Unauthorized',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'Approval',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'Transfer',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
        ],
        name: 'allowance',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'approve',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
        ],
        name: 'balanceOf',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'burn',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'burn',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'burnWithAllowance',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'decimals',
        outputs: [
          {
            internalType: 'uint8',
            name: '',
            type: 'uint8',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'subtractedValue',
            type: 'uint256',
          },
        ],
        name: 'decreaseAllowance',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'addedValue',
            type: 'uint256',
          },
        ],
        name: 'increaseAllowance',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'string',
            name: 'tokenName',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'tokenSymbol',
            type: 'string',
          },
          {
            internalType: 'uint8',
            name: 'tokenDecimals',
            type: 'uint8',
          },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'isInitialized',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'mint',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'name',
        outputs: [
          {
            internalType: 'string',
            name: '',
            type: 'string',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'setAllowance',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'symbol',
        outputs: [
          {
            internalType: 'string',
            name: '',
            type: 'string',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'totalSupply',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'transfer',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'transferFrom',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
  UtilsModule: {
    address: '0x80aC5F20e692bD62f2b2Caa7E3b370E67CAF4003',
    abi: [
      {
        inputs: [
          {
            internalType: 'string',
            name: 'parameter',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'reason',
            type: 'string',
          },
        ],
        name: 'InvalidParameter',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToUint64',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'Unauthorized',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ValueAlreadyInSet',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint64',
            name: 'newChainId',
            type: 'uint64',
          },
        ],
        name: 'NewSupportedCrossChainNetwork',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'ccipRouter',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'ccipTokenPool',
            type: 'address',
          },
        ],
        name: 'configureChainlinkCrossChain',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'oracleManagerAddress',
            type: 'address',
          },
        ],
        name: 'configureOracleManager',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'k',
            type: 'bytes32',
          },
        ],
        name: 'getConfig',
        outputs: [
          {
            internalType: 'bytes32',
            name: 'v',
            type: 'bytes32',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'k',
            type: 'bytes32',
          },
        ],
        name: 'getConfigAddress',
        outputs: [
          {
            internalType: 'address',
            name: 'v',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'k',
            type: 'bytes32',
          },
        ],
        name: 'getConfigUint',
        outputs: [
          {
            internalType: 'uint256',
            name: 'v',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getTrustedForwarder',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'pure',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'forwarder',
            type: 'address',
          },
        ],
        name: 'isTrustedForwarder',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'pure',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'k',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'v',
            type: 'bytes32',
          },
        ],
        name: 'setConfig',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint64[]',
            name: 'supportedNetworks',
            type: 'uint64[]',
          },
          {
            internalType: 'uint64[]',
            name: 'ccipSelectors',
            type: 'uint64[]',
          },
        ],
        name: 'setSupportedCrossChainNetworks',
        outputs: [
          {
            internalType: 'uint256',
            name: 'numRegistered',
            type: 'uint256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes4',
            name: 'interfaceId',
            type: 'bytes4',
          },
        ],
        name: 'supportsInterface',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
    ],
  },
  VaultModule: {
    address: '0x604cd6F3E40713406c73eeb3fcBe67aDD7deAb19',
    abi: [
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'marketId',
            type: 'uint256',
          },
        ],
        name: 'CapacityLocked',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'CollateralDepositDisabled',
        type: 'error',
      },
      {
        inputs: [],
        name: 'EmptyDistribution',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'which',
            type: 'bytes32',
          },
        ],
        name: 'FeatureUnavailable',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amountAvailableForDelegationD18',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amountD18',
            type: 'uint256',
          },
        ],
        name: 'InsufficentAvailableCollateral',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'InsufficientAccountCollateral',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'collateralValue',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'debt',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'ratio',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'minRatio',
            type: 'uint256',
          },
        ],
        name: 'InsufficientCollateralRatio',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'minDelegation',
            type: 'uint256',
          },
        ],
        name: 'InsufficientDelegation',
        type: 'error',
      },
      {
        inputs: [],
        name: 'InvalidCollateralAmount',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'leverage',
            type: 'uint256',
          },
        ],
        name: 'InvalidLeverage',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'MarketNotFound',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'uint32',
            name: 'timeRemaining',
            type: 'uint32',
          },
        ],
        name: 'MinDelegationTimeoutPending',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt128ToUint128',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt256ToInt128',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt256ToUint256',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint128ToInt128',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToInt256',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToUint128',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToUint32',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint32ToInt32',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint64ToInt64',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
        ],
        name: 'PermissionDenied',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'currentCollateral',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxCollateral',
            type: 'uint256',
          },
        ],
        name: 'PoolCollateralLimitExceeded',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'PoolNotFound',
        type: 'error',
      },
      {
        inputs: [],
        name: 'PositionOutOfBounds',
        type: 'error',
      },
      {
        inputs: [],
        name: 'RewardDistributorNotFound',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ValueAlreadyInSet',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ValueNotInSet',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'leverage',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'DelegationUpdated',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'newCollateralAmountD18',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'leverage',
            type: 'uint256',
          },
        ],
        name: 'delegateCollateral',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'getPosition',
        outputs: [
          {
            internalType: 'uint256',
            name: 'collateralAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'collateralValue',
            type: 'uint256',
          },
          {
            internalType: 'int256',
            name: 'debt',
            type: 'int256',
          },
          {
            internalType: 'uint256',
            name: 'collateralizationRatio',
            type: 'uint256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'getPositionCollateral',
        outputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'getPositionCollateralRatio',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'getPositionDebt',
        outputs: [
          {
            internalType: 'int256',
            name: 'debt',
            type: 'int256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'getVaultCollateral',
        outputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'getVaultCollateralRatio',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'getVaultDebt',
        outputs: [
          {
            internalType: 'int256',
            name: '',
            type: 'int256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
  InitialModuleBundle: {
    address: '0x828EED723cAF0A8F822249231266E38dF614923C',
    abi: [
      {
        inputs: [
          {
            internalType: 'address',
            name: 'implementation',
            type: 'address',
          },
        ],
        name: 'ImplementationIsSterile',
        type: 'error',
      },
      {
        inputs: [],
        name: 'NoChange',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'contr',
            type: 'address',
          },
        ],
        name: 'NotAContract',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'NotNominated',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'Unauthorized',
        type: 'error',
      },
      {
        inputs: [],
        name: 'UpgradeSimulationFailed',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ZeroAddress',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'oldOwner',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnerChanged',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnerNominated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'self',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'implementation',
            type: 'address',
          },
        ],
        name: 'Upgraded',
        type: 'event',
      },
      {
        inputs: [],
        name: 'acceptOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getImplementation',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newNominatedOwner',
            type: 'address',
          },
        ],
        name: 'nominateNewOwner',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'nominatedOwner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'renounceNomination',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newImplementation',
            type: 'address',
          },
        ],
        name: 'simulateUpgradeTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newImplementation',
            type: 'address',
          },
        ],
        name: 'upgradeTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
  InitialCoreProxy: {
    address: '0x5f8A1C6C3F3Cf684B02D32a8Ec8eF5b5be2722aE',
    abi: [
      {
        inputs: [
          {
            internalType: 'address',
            name: 'implementation',
            type: 'address',
          },
        ],
        name: 'ImplementationIsSterile',
        type: 'error',
      },
      {
        inputs: [],
        name: 'NoChange',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'contr',
            type: 'address',
          },
        ],
        name: 'NotAContract',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'NotNominated',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'Unauthorized',
        type: 'error',
      },
      {
        inputs: [],
        name: 'UpgradeSimulationFailed',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ZeroAddress',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'oldOwner',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnerChanged',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnerNominated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'self',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'implementation',
            type: 'address',
          },
        ],
        name: 'Upgraded',
        type: 'event',
      },
      {
        inputs: [],
        name: 'acceptOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getImplementation',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newNominatedOwner',
            type: 'address',
          },
        ],
        name: 'nominateNewOwner',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'nominatedOwner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'renounceNomination',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newImplementation',
            type: 'address',
          },
        ],
        name: 'simulateUpgradeTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newImplementation',
            type: 'address',
          },
        ],
        name: 'upgradeTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
  AccountRouter: {
    address: '0xf3c8c97d6e9abe7d7e585a7b015bf8c5cabaa0dc',
    abi: [
      {
        inputs: [
          {
            internalType: 'address',
            name: 'implementation',
            type: 'address',
          },
        ],
        name: 'ImplementationIsSterile',
        type: 'error',
      },
      {
        inputs: [],
        name: 'NoChange',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'contr',
            type: 'address',
          },
        ],
        name: 'NotAContract',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'NotNominated',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'Unauthorized',
        type: 'error',
      },
      {
        inputs: [],
        name: 'UpgradeSimulationFailed',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ZeroAddress',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'oldOwner',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnerChanged',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnerNominated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'self',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'implementation',
            type: 'address',
          },
        ],
        name: 'Upgraded',
        type: 'event',
      },
      {
        inputs: [],
        name: 'acceptOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getImplementation',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newNominatedOwner',
            type: 'address',
          },
        ],
        name: 'nominateNewOwner',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'nominatedOwner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'renounceNomination',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newImplementation',
            type: 'address',
          },
        ],
        name: 'simulateUpgradeTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newImplementation',
            type: 'address',
          },
        ],
        name: 'upgradeTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'AlreadyInitialized',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'CannotSelfApprove',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'requestedIndex',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'length',
            type: 'uint256',
          },
        ],
        name: 'IndexOverrun',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'InvalidOwner',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'string',
            name: 'parameter',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'reason',
            type: 'string',
          },
        ],
        name: 'InvalidParameter',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'InvalidTransferRecipient',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToUint128',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
        ],
        name: 'TokenAlreadyMinted',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
        ],
        name: 'TokenDoesNotExist',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'approved',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'Approval',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'operator',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'bool',
            name: 'approved',
            type: 'bool',
          },
        ],
        name: 'ApprovalForAll',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'Transfer',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'approve',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'holder',
            type: 'address',
          },
        ],
        name: 'balanceOf',
        outputs: [
          {
            internalType: 'uint256',
            name: 'balance',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'burn',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'getApproved',
        outputs: [
          {
            internalType: 'address',
            name: 'operator',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'string',
            name: 'tokenName',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'tokenSymbol',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'uri',
            type: 'string',
          },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'holder',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'operator',
            type: 'address',
          },
        ],
        name: 'isApprovedForAll',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'isInitialized',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'mint',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'name',
        outputs: [
          {
            internalType: 'string',
            name: '',
            type: 'string',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'ownerOf',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes',
          },
        ],
        name: 'safeMint',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes',
          },
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
        ],
        name: 'setAllowance',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'operator',
            type: 'address',
          },
          {
            internalType: 'bool',
            name: 'approved',
            type: 'bool',
          },
        ],
        name: 'setApprovalForAll',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'string',
            name: 'uri',
            type: 'string',
          },
        ],
        name: 'setBaseTokenURI',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes4',
            name: 'interfaceId',
            type: 'bytes4',
          },
        ],
        name: 'supportsInterface',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'symbol',
        outputs: [
          {
            internalType: 'string',
            name: '',
            type: 'string',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'index',
            type: 'uint256',
          },
        ],
        name: 'tokenByIndex',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'index',
            type: 'uint256',
          },
        ],
        name: 'tokenOfOwnerByIndex',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'tokenURI',
        outputs: [
          {
            internalType: 'string',
            name: '',
            type: 'string',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'totalSupply',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'transferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
  CoreRouter: {
    address: '0xeab23934b8cef6f823f27540b291f5d6ed275c9e',
    abi: [
      {
        inputs: [
          {
            internalType: 'address',
            name: 'implementation',
            type: 'address',
          },
        ],
        name: 'ImplementationIsSterile',
        type: 'error',
      },
      {
        inputs: [],
        name: 'NoChange',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'contr',
            type: 'address',
          },
        ],
        name: 'NotAContract',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'NotNominated',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'Unauthorized',
        type: 'error',
      },
      {
        inputs: [],
        name: 'UpgradeSimulationFailed',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ZeroAddress',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'oldOwner',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnerChanged',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnerNominated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'self',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'implementation',
            type: 'address',
          },
        ],
        name: 'Upgraded',
        type: 'event',
      },
      {
        inputs: [],
        name: 'acceptOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getImplementation',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newNominatedOwner',
            type: 'address',
          },
        ],
        name: 'nominateNewOwner',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'nominatedOwner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'renounceNomination',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newImplementation',
            type: 'address',
          },
        ],
        name: 'simulateUpgradeTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newImplementation',
            type: 'address',
          },
        ],
        name: 'upgradeTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'ValueAlreadyInSet',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ValueNotInSet',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            indexed: false,
            internalType: 'bool',
            name: 'allowAll',
            type: 'bool',
          },
        ],
        name: 'FeatureFlagAllowAllSet',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'account',
            type: 'address',
          },
        ],
        name: 'FeatureFlagAllowlistAdded',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'account',
            type: 'address',
          },
        ],
        name: 'FeatureFlagAllowlistRemoved',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            indexed: false,
            internalType: 'address[]',
            name: 'deniers',
            type: 'address[]',
          },
        ],
        name: 'FeatureFlagDeniersReset',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            indexed: false,
            internalType: 'bool',
            name: 'denyAll',
            type: 'bool',
          },
        ],
        name: 'FeatureFlagDenyAllSet',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'account',
            type: 'address',
          },
        ],
        name: 'addToFeatureFlagAllowlist',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
        ],
        name: 'getDeniers',
        outputs: [
          {
            internalType: 'address[]',
            name: '',
            type: 'address[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
        ],
        name: 'getFeatureFlagAllowAll',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
        ],
        name: 'getFeatureFlagAllowlist',
        outputs: [
          {
            internalType: 'address[]',
            name: '',
            type: 'address[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
        ],
        name: 'getFeatureFlagDenyAll',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'account',
            type: 'address',
          },
        ],
        name: 'isFeatureAllowed',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'account',
            type: 'address',
          },
        ],
        name: 'removeFromFeatureFlagAllowlist',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            internalType: 'address[]',
            name: 'deniers',
            type: 'address[]',
          },
        ],
        name: 'setDeniers',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            internalType: 'bool',
            name: 'allowAll',
            type: 'bool',
          },
        ],
        name: 'setFeatureFlagAllowAll',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            internalType: 'bool',
            name: 'denyAll',
            type: 'bool',
          },
        ],
        name: 'setFeatureFlagDenyAll',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'which',
            type: 'bytes32',
          },
        ],
        name: 'FeatureUnavailable',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
        ],
        name: 'InvalidAccountId',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
        ],
        name: 'InvalidPermission',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'origin',
            type: 'address',
          },
        ],
        name: 'OnlyAccountTokenProxy',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
        ],
        name: 'PermissionDenied',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
        ],
        name: 'PermissionNotGranted',
        type: 'error',
      },
      {
        inputs: [],
        name: 'PositionOutOfBounds',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
        ],
        name: 'AccountCreated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'PermissionGranted',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'PermissionRevoked',
        type: 'event',
      },
      {
        inputs: [],
        name: 'createAccount',
        outputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'requestedAccountId',
            type: 'uint128',
          },
        ],
        name: 'createAccount',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
        ],
        name: 'getAccountLastInteraction',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
        ],
        name: 'getAccountOwner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
        ],
        name: 'getAccountPermissions',
        outputs: [
          {
            components: [
              {
                internalType: 'address',
                name: 'user',
                type: 'address',
              },
              {
                internalType: 'bytes32[]',
                name: 'permissions',
                type: 'bytes32[]',
              },
            ],
            internalType: 'struct IAccountModule.AccountPermissions[]',
            name: 'accountPerms',
            type: 'tuple[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getAccountTokenAddress',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
        ],
        name: 'grantPermission',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
        ],
        name: 'hasPermission',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
        ],
        name: 'isAuthorized',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
        ],
        name: 'notifyAccountTransfer',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
        ],
        name: 'renouncePermission',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
        ],
        name: 'revokePermission',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
        ],
        name: 'AccountNotFound',
        type: 'error',
      },
      {
        inputs: [],
        name: 'EmptyDistribution',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'collateralValue',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'debt',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'ratio',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'minRatio',
            type: 'uint256',
          },
        ],
        name: 'InsufficientCollateralRatio',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'MarketNotFound',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'marketId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'poolId',
            type: 'uint256',
          },
        ],
        name: 'NotFundedByPool',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt256ToInt128',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt256ToUint256',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint128ToInt128',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToInt256',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToUint128',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'int256',
            name: 'updatedDebt',
            type: 'int256',
          },
        ],
        name: 'DebtAssociated',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'associateDebt',
        outputs: [
          {
            internalType: 'int256',
            name: '',
            type: 'int256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'expected',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'actual',
            type: 'bytes32',
          },
        ],
        name: 'MismatchAssociatedSystemKind',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
        ],
        name: 'MissingAssociatedSystem',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'kind',
            type: 'bytes32',
          },
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'proxy',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'impl',
            type: 'address',
          },
        ],
        name: 'AssociatedSystemSet',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
        ],
        name: 'getAssociatedSystem',
        outputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
          {
            internalType: 'bytes32',
            name: 'kind',
            type: 'bytes32',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'symbol',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'uri',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 'impl',
            type: 'address',
          },
        ],
        name: 'initOrUpgradeNft',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'symbol',
            type: 'string',
          },
          {
            internalType: 'uint8',
            name: 'decimals',
            type: 'uint8',
          },
          {
            internalType: 'address',
            name: 'impl',
            type: 'address',
          },
        ],
        name: 'initOrUpgradeToken',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'endpoint',
            type: 'address',
          },
        ],
        name: 'registerUnmanagedSystem',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'InvalidMessage',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        name: 'NotCcipRouter',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint64',
            name: '',
            type: 'uint64',
          },
        ],
        name: 'UnsupportedNetwork',
        type: 'error',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'bytes32',
                name: 'messageId',
                type: 'bytes32',
              },
              {
                internalType: 'uint64',
                name: 'sourceChainSelector',
                type: 'uint64',
              },
              {
                internalType: 'bytes',
                name: 'sender',
                type: 'bytes',
              },
              {
                internalType: 'bytes',
                name: 'data',
                type: 'bytes',
              },
              {
                components: [
                  {
                    internalType: 'address',
                    name: 'token',
                    type: 'address',
                  },
                  {
                    internalType: 'uint256',
                    name: 'amount',
                    type: 'uint256',
                  },
                ],
                internalType: 'struct CcipClient.EVMTokenAmount[]',
                name: 'tokenAmounts',
                type: 'tuple[]',
              },
            ],
            internalType: 'struct CcipClient.Any2EVMMessage',
            name: 'message',
            type: 'tuple',
          },
        ],
        name: 'ccipReceive',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint256',
            name: 'currentTime',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'requiredTime',
            type: 'uint256',
          },
        ],
        name: 'AccountActivityTimeoutPending',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'CollateralDepositDisabled',
        type: 'error',
      },
      {
        inputs: [],
        name: 'CollateralNotFound',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
        ],
        name: 'FailedTransfer',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amountAvailableForDelegationD18',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amountD18',
            type: 'uint256',
          },
        ],
        name: 'InsufficentAvailableCollateral',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'InsufficientAccountCollateral',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'required',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'existing',
            type: 'uint256',
          },
        ],
        name: 'InsufficientAllowance',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'string',
            name: 'parameter',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'reason',
            type: 'string',
          },
        ],
        name: 'InvalidParameter',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToUint64',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'tokenAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint8',
            name: 'decimals',
            type: 'uint8',
          },
        ],
        name: 'PrecisionLost',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'tokenAmount',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint64',
            name: 'expireTimestamp',
            type: 'uint64',
          },
        ],
        name: 'CollateralLockCreated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'tokenAmount',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint64',
            name: 'expireTimestamp',
            type: 'uint64',
          },
        ],
        name: 'CollateralLockExpired',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'tokenAmount',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'Deposited',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'tokenAmount',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'Withdrawn',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'offset',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'count',
            type: 'uint256',
          },
        ],
        name: 'cleanExpiredLocks',
        outputs: [
          {
            internalType: 'uint256',
            name: 'cleared',
            type: 'uint256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'uint64',
            name: 'expireTimestamp',
            type: 'uint64',
          },
        ],
        name: 'createLock',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenAmount',
            type: 'uint256',
          },
        ],
        name: 'deposit',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'getAccountAvailableCollateral',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'getAccountCollateral',
        outputs: [
          {
            internalType: 'uint256',
            name: 'totalDeposited',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'totalAssigned',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'totalLocked',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'offset',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'count',
            type: 'uint256',
          },
        ],
        name: 'getLocks',
        outputs: [
          {
            components: [
              {
                internalType: 'uint128',
                name: 'amountD18',
                type: 'uint128',
              },
              {
                internalType: 'uint64',
                name: 'lockExpirationTime',
                type: 'uint64',
              },
            ],
            internalType: 'struct CollateralLock.Data[]',
            name: 'locks',
            type: 'tuple[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenAmount',
            type: 'uint256',
          },
        ],
        name: 'withdraw',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            components: [
              {
                internalType: 'bool',
                name: 'depositingEnabled',
                type: 'bool',
              },
              {
                internalType: 'uint256',
                name: 'issuanceRatioD18',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'liquidationRatioD18',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'liquidationRewardD18',
                type: 'uint256',
              },
              {
                internalType: 'bytes32',
                name: 'oracleNodeId',
                type: 'bytes32',
              },
              {
                internalType: 'address',
                name: 'tokenAddress',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'minDelegationD18',
                type: 'uint256',
              },
            ],
            indexed: false,
            internalType: 'struct CollateralConfiguration.Data',
            name: 'config',
            type: 'tuple',
          },
        ],
        name: 'CollateralConfigured',
        type: 'event',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'bool',
                name: 'depositingEnabled',
                type: 'bool',
              },
              {
                internalType: 'uint256',
                name: 'issuanceRatioD18',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'liquidationRatioD18',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'liquidationRewardD18',
                type: 'uint256',
              },
              {
                internalType: 'bytes32',
                name: 'oracleNodeId',
                type: 'bytes32',
              },
              {
                internalType: 'address',
                name: 'tokenAddress',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'minDelegationD18',
                type: 'uint256',
              },
            ],
            internalType: 'struct CollateralConfiguration.Data',
            name: 'config',
            type: 'tuple',
          },
        ],
        name: 'configureCollateral',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'getCollateralConfiguration',
        outputs: [
          {
            components: [
              {
                internalType: 'bool',
                name: 'depositingEnabled',
                type: 'bool',
              },
              {
                internalType: 'uint256',
                name: 'issuanceRatioD18',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'liquidationRatioD18',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'liquidationRewardD18',
                type: 'uint256',
              },
              {
                internalType: 'bytes32',
                name: 'oracleNodeId',
                type: 'bytes32',
              },
              {
                internalType: 'address',
                name: 'tokenAddress',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'minDelegationD18',
                type: 'uint256',
              },
            ],
            internalType: 'struct CollateralConfiguration.Data',
            name: '',
            type: 'tuple',
          },
        ],
        stateMutability: 'pure',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bool',
            name: 'hideDisabled',
            type: 'bool',
          },
        ],
        name: 'getCollateralConfigurations',
        outputs: [
          {
            components: [
              {
                internalType: 'bool',
                name: 'depositingEnabled',
                type: 'bool',
              },
              {
                internalType: 'uint256',
                name: 'issuanceRatioD18',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'liquidationRatioD18',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'liquidationRewardD18',
                type: 'uint256',
              },
              {
                internalType: 'bytes32',
                name: 'oracleNodeId',
                type: 'bytes32',
              },
              {
                internalType: 'address',
                name: 'tokenAddress',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'minDelegationD18',
                type: 'uint256',
              },
            ],
            internalType: 'struct CollateralConfiguration.Data[]',
            name: '',
            type: 'tuple[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'getCollateralPrice',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'requiredAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'availableAmount',
            type: 'uint256',
          },
        ],
        name: 'InsufficientCcipFee',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint64',
            name: 'destChainId',
            type: 'uint64',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'TransferCrossChainInitiated',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'uint64',
            name: 'destChainId',
            type: 'uint64',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'transferCrossChain',
        outputs: [
          {
            internalType: 'uint256',
            name: 'gasTokenUsed',
            type: 'uint256',
          },
        ],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'int256',
            name: 'currentDebt',
            type: 'int256',
          },
        ],
        name: 'InsufficientDebt',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'PoolNotFound',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'feeAmount',
            type: 'uint256',
          },
        ],
        name: 'IssuanceFeePaid',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'UsdBurned',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'UsdMinted',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'burnUsd',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'mintUsd',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'CannotScaleEmptyMapping',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'collateralValue',
            type: 'uint256',
          },
          {
            internalType: 'int256',
            name: 'debt',
            type: 'int256',
          },
          {
            internalType: 'uint256',
            name: 'currentCRatio',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'cratio',
            type: 'uint256',
          },
        ],
        name: 'IneligibleForLiquidation',
        type: 'error',
      },
      {
        inputs: [],
        name: 'InsufficientMappedAmount',
        type: 'error',
      },
      {
        inputs: [],
        name: 'MustBeVaultLiquidated',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt128ToUint128',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'debtLiquidated',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'collateralLiquidated',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'amountRewarded',
                type: 'uint256',
              },
            ],
            indexed: false,
            internalType: 'struct ILiquidationModule.LiquidationData',
            name: 'liquidationData',
            type: 'tuple',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'liquidateAsAccountId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'Liquidation',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'debtLiquidated',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'collateralLiquidated',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'amountRewarded',
                type: 'uint256',
              },
            ],
            indexed: false,
            internalType: 'struct ILiquidationModule.LiquidationData',
            name: 'liquidationData',
            type: 'tuple',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'liquidateAsAccountId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'VaultLiquidation',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'isPositionLiquidatable',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'isVaultLiquidatable',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint128',
            name: 'liquidateAsAccountId',
            type: 'uint128',
          },
        ],
        name: 'liquidate',
        outputs: [
          {
            components: [
              {
                internalType: 'uint256',
                name: 'debtLiquidated',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'collateralLiquidated',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'amountRewarded',
                type: 'uint256',
              },
            ],
            internalType: 'struct ILiquidationModule.LiquidationData',
            name: 'liquidationData',
            type: 'tuple',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint128',
            name: 'liquidateAsAccountId',
            type: 'uint128',
          },
          {
            internalType: 'uint256',
            name: 'maxUsd',
            type: 'uint256',
          },
        ],
        name: 'liquidateVault',
        outputs: [
          {
            components: [
              {
                internalType: 'uint256',
                name: 'debtLiquidated',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'collateralLiquidated',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'amountRewarded',
                type: 'uint256',
              },
            ],
            internalType: 'struct ILiquidationModule.LiquidationData',
            name: 'liquidationData',
            type: 'tuple',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenAmountToDeposit',
            type: 'uint256',
          },
        ],
        name: 'InsufficientMarketCollateralDepositable',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenAmountToWithdraw',
            type: 'uint256',
          },
        ],
        name: 'InsufficientMarketCollateralWithdrawable',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'tokenAmount',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'creditCapacity',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'netIssuance',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'depositedCollateralValue',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'reportedDebt',
            type: 'uint256',
          },
        ],
        name: 'MarketCollateralDeposited',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'tokenAmount',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'creditCapacity',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'netIssuance',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'depositedCollateralValue',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'reportedDebt',
            type: 'uint256',
          },
        ],
        name: 'MarketCollateralWithdrawn',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'systemAmount',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
        ],
        name: 'MaximumMarketCollateralConfigured',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'configureMaximumMarketCollateral',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenAmount',
            type: 'uint256',
          },
        ],
        name: 'depositMarketCollateral',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'getMarketCollateralAmount',
        outputs: [
          {
            internalType: 'uint256',
            name: 'collateralAmountD18',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getMarketCollateralValue',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'getMaximumMarketCollateral',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenAmount',
            type: 'uint256',
          },
        ],
        name: 'withdrawMarketCollateral',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'market',
            type: 'address',
          },
        ],
        name: 'IncorrectMarketInterface',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'NotEnoughLiquidity',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'market',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'MarketRegistered',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'feeAmount',
            type: 'uint256',
          },
        ],
        name: 'MarketSystemFeePaid',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'market',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'creditCapacity',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'netIssuance',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'depositedCollateralValue',
            type: 'uint256',
          },
        ],
        name: 'MarketUsdDeposited',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'market',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'creditCapacity',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'netIssuance',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'depositedCollateralValue',
            type: 'uint256',
          },
        ],
        name: 'MarketUsdWithdrawn',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'minLiquidityRatio',
            type: 'uint256',
          },
        ],
        name: 'SetMarketMinLiquidityRatio',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint32',
            name: 'minDelegateTime',
            type: 'uint32',
          },
        ],
        name: 'SetMinDelegateTime',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'depositMarketUsd',
        outputs: [
          {
            internalType: 'uint256',
            name: 'feeAmount',
            type: 'uint256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'uint256',
            name: 'maxIter',
            type: 'uint256',
          },
        ],
        name: 'distributeDebtToPools',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getMarketAddress',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getMarketCollateral',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getMarketDebtPerShare',
        outputs: [
          {
            internalType: 'int256',
            name: '',
            type: 'int256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: '',
            type: 'uint128',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'getMarketFees',
        outputs: [
          {
            internalType: 'uint256',
            name: 'depositFeeAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'withdrawFeeAmount',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getMarketMinDelegateTime',
        outputs: [
          {
            internalType: 'uint32',
            name: '',
            type: 'uint32',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getMarketNetIssuance',
        outputs: [
          {
            internalType: 'int128',
            name: '',
            type: 'int128',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'getMarketPoolDebtDistribution',
        outputs: [
          {
            internalType: 'uint256',
            name: 'sharesD18',
            type: 'uint256',
          },
          {
            internalType: 'uint128',
            name: 'totalSharesD18',
            type: 'uint128',
          },
          {
            internalType: 'int128',
            name: 'valuePerShareD27',
            type: 'int128',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getMarketPools',
        outputs: [
          {
            internalType: 'uint128[]',
            name: 'inRangePoolIds',
            type: 'uint128[]',
          },
          {
            internalType: 'uint128[]',
            name: 'outRangePoolIds',
            type: 'uint128[]',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getMarketReportedDebt',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getMarketTotalDebt',
        outputs: [
          {
            internalType: 'int256',
            name: '',
            type: 'int256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getMinLiquidityRatio',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getOracleManager',
        outputs: [
          {
            internalType: 'contract IOracleManager',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getUsdToken',
        outputs: [
          {
            internalType: 'contract IERC20',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getWithdrawableMarketUsd',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'isMarketCapacityLocked',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'market',
            type: 'address',
          },
        ],
        name: 'registerMarket',
        outputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'uint32',
            name: 'minDelegateTime',
            type: 'uint32',
          },
        ],
        name: 'setMarketMinDelegateTime',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'uint256',
            name: 'minLiquidityRatio',
            type: 'uint256',
          },
        ],
        name: 'setMinLiquidityRatio',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'withdrawMarketUsd',
        outputs: [
          {
            internalType: 'uint256',
            name: 'feeAmount',
            type: 'uint256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'poolId',
            type: 'uint256',
          },
        ],
        name: 'PoolApprovedAdded',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'poolId',
            type: 'uint256',
          },
        ],
        name: 'PoolApprovedRemoved',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'poolId',
            type: 'uint256',
          },
        ],
        name: 'PreferredPoolSet',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'addApprovedPool',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getApprovedPools',
        outputs: [
          {
            internalType: 'uint256[]',
            name: '',
            type: 'uint256[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getPreferredPool',
        outputs: [
          {
            internalType: 'uint128',
            name: '',
            type: 'uint128',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'removeApprovedPool',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'setPreferredPool',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'marketId',
            type: 'uint256',
          },
        ],
        name: 'CapacityLocked',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'uint32',
            name: 'timeRemaining',
            type: 'uint32',
          },
        ],
        name: 'MinDelegationTimeoutPending',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'PoolAlreadyExists',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'collateralLimitD18',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'issuanceRatioD18',
                type: 'uint256',
              },
            ],
            indexed: false,
            internalType: 'struct PoolCollateralConfiguration.Data',
            name: 'config',
            type: 'tuple',
          },
        ],
        name: 'PoolCollateralConfigurationUpdated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'bool',
            name: 'disabled',
            type: 'bool',
          },
        ],
        name: 'PoolCollateralDisabledByDefaultSet',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            components: [
              {
                internalType: 'uint128',
                name: 'marketId',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'weightD18',
                type: 'uint128',
              },
              {
                internalType: 'int128',
                name: 'maxDebtShareValueD18',
                type: 'int128',
              },
            ],
            indexed: false,
            internalType: 'struct MarketConfiguration.Data[]',
            name: 'markets',
            type: 'tuple[]',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'PoolConfigurationSet',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'PoolCreated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'PoolNameUpdated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
        ],
        name: 'PoolNominationRenounced',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
        ],
        name: 'PoolNominationRevoked',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'nominatedOwner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
        ],
        name: 'PoolOwnerNominated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
        ],
        name: 'PoolOwnershipAccepted',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
        ],
        name: 'PoolOwnershipRenounced',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'minLiquidityRatio',
            type: 'uint256',
          },
        ],
        name: 'SetMinLiquidityRatio',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'acceptPoolOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'requestedPoolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
        ],
        name: 'createPool',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getMinLiquidityRatio',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'getNominatedPoolOwner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'getPoolCollateralConfiguration',
        outputs: [
          {
            components: [
              {
                internalType: 'uint256',
                name: 'collateralLimitD18',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'issuanceRatioD18',
                type: 'uint256',
              },
            ],
            internalType: 'struct PoolCollateralConfiguration.Data',
            name: 'config',
            type: 'tuple',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateral',
            type: 'address',
          },
        ],
        name: 'getPoolCollateralIssuanceRatio',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'getPoolConfiguration',
        outputs: [
          {
            components: [
              {
                internalType: 'uint128',
                name: 'marketId',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'weightD18',
                type: 'uint128',
              },
              {
                internalType: 'int128',
                name: 'maxDebtShareValueD18',
                type: 'int128',
              },
            ],
            internalType: 'struct MarketConfiguration.Data[]',
            name: '',
            type: 'tuple[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'getPoolName',
        outputs: [
          {
            internalType: 'string',
            name: 'poolName',
            type: 'string',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'getPoolOwner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'nominatedOwner',
            type: 'address',
          },
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'nominatePoolOwner',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'optionalCollateralType',
            type: 'address',
          },
        ],
        name: 'rebalancePool',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'renouncePoolNomination',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'renouncePoolOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'revokePoolNomination',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'minLiquidityRatio',
            type: 'uint256',
          },
        ],
        name: 'setMinLiquidityRatio',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'collateralLimitD18',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'issuanceRatioD18',
                type: 'uint256',
              },
            ],
            internalType: 'struct PoolCollateralConfiguration.Data',
            name: 'newConfig',
            type: 'tuple',
          },
        ],
        name: 'setPoolCollateralConfiguration',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'bool',
            name: 'disabled',
            type: 'bool',
          },
        ],
        name: 'setPoolCollateralDisabledByDefault',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            components: [
              {
                internalType: 'uint128',
                name: 'marketId',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'weightD18',
                type: 'uint128',
              },
              {
                internalType: 'int128',
                name: 'maxDebtShareValueD18',
                type: 'int128',
              },
            ],
            internalType: 'struct MarketConfiguration.Data[]',
            name: 'newMarketConfigurations',
            type: 'tuple[]',
          },
        ],
        name: 'setPoolConfiguration',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
        ],
        name: 'setPoolName',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToUint32',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint32ToInt32',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint64ToInt64',
        type: 'error',
      },
      {
        inputs: [],
        name: 'RewardDistributorNotFound',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'distributor',
            type: 'address',
          },
        ],
        name: 'RewardUnavailable',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'distributor',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'RewardsClaimed',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'distributor',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'start',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'duration',
            type: 'uint256',
          },
        ],
        name: 'RewardsDistributed',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'distributor',
            type: 'address',
          },
        ],
        name: 'RewardsDistributorRegistered',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'distributor',
            type: 'address',
          },
        ],
        name: 'RewardsDistributorRemoved',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'distributor',
            type: 'address',
          },
        ],
        name: 'claimRewards',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'uint64',
            name: 'start',
            type: 'uint64',
          },
          {
            internalType: 'uint32',
            name: 'duration',
            type: 'uint32',
          },
        ],
        name: 'distributeRewards',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'rewardsDistributor',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'uint64',
            name: 'start',
            type: 'uint64',
          },
          {
            internalType: 'uint32',
            name: 'duration',
            type: 'uint32',
          },
        ],
        name: 'distributeRewardsByOwner',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'distributor',
            type: 'address',
          },
        ],
        name: 'getAvailableRewards',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'distributor',
            type: 'address',
          },
        ],
        name: 'getRewardRate',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'distributor',
            type: 'address',
          },
        ],
        name: 'registerRewardsDistributor',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'distributor',
            type: 'address',
          },
        ],
        name: 'removeRewardsDistributor',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
        ],
        name: 'updateRewards',
        outputs: [
          {
            internalType: 'uint256[]',
            name: '',
            type: 'uint256[]',
          },
          {
            internalType: 'address[]',
            name: '',
            type: 'address[]',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint64',
            name: 'newChainId',
            type: 'uint64',
          },
        ],
        name: 'NewSupportedCrossChainNetwork',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'ccipRouter',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'ccipTokenPool',
            type: 'address',
          },
        ],
        name: 'configureChainlinkCrossChain',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'oracleManagerAddress',
            type: 'address',
          },
        ],
        name: 'configureOracleManager',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'k',
            type: 'bytes32',
          },
        ],
        name: 'getConfig',
        outputs: [
          {
            internalType: 'bytes32',
            name: 'v',
            type: 'bytes32',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'k',
            type: 'bytes32',
          },
        ],
        name: 'getConfigAddress',
        outputs: [
          {
            internalType: 'address',
            name: 'v',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'k',
            type: 'bytes32',
          },
        ],
        name: 'getConfigUint',
        outputs: [
          {
            internalType: 'uint256',
            name: 'v',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getTrustedForwarder',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'pure',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'forwarder',
            type: 'address',
          },
        ],
        name: 'isTrustedForwarder',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'pure',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'k',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'v',
            type: 'bytes32',
          },
        ],
        name: 'setConfig',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint64[]',
            name: 'supportedNetworks',
            type: 'uint64[]',
          },
          {
            internalType: 'uint64[]',
            name: 'ccipSelectors',
            type: 'uint64[]',
          },
        ],
        name: 'setSupportedCrossChainNetworks',
        outputs: [
          {
            internalType: 'uint256',
            name: 'numRegistered',
            type: 'uint256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes4',
            name: 'interfaceId',
            type: 'bytes4',
          },
        ],
        name: 'supportsInterface',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'minDelegation',
            type: 'uint256',
          },
        ],
        name: 'InsufficientDelegation',
        type: 'error',
      },
      {
        inputs: [],
        name: 'InvalidCollateralAmount',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'leverage',
            type: 'uint256',
          },
        ],
        name: 'InvalidLeverage',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'currentCollateral',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxCollateral',
            type: 'uint256',
          },
        ],
        name: 'PoolCollateralLimitExceeded',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'leverage',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'DelegationUpdated',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'newCollateralAmountD18',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'leverage',
            type: 'uint256',
          },
        ],
        name: 'delegateCollateral',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'getPosition',
        outputs: [
          {
            internalType: 'uint256',
            name: 'collateralAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'collateralValue',
            type: 'uint256',
          },
          {
            internalType: 'int256',
            name: 'debt',
            type: 'int256',
          },
          {
            internalType: 'uint256',
            name: 'collateralizationRatio',
            type: 'uint256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'getPositionCollateral',
        outputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'getPositionCollateralRatio',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'getPositionDebt',
        outputs: [
          {
            internalType: 'int256',
            name: 'debt',
            type: 'int256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'getVaultCollateral',
        outputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'getVaultCollateralRatio',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'getVaultDebt',
        outputs: [
          {
            internalType: 'int256',
            name: '',
            type: 'int256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
  USDRouter: {
    address: '0x696be5d14863b2e7a6c151682458ee6820e6996c',
    abi: [
      {
        inputs: [
          {
            internalType: 'address',
            name: 'implementation',
            type: 'address',
          },
        ],
        name: 'ImplementationIsSterile',
        type: 'error',
      },
      {
        inputs: [],
        name: 'NoChange',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'contr',
            type: 'address',
          },
        ],
        name: 'NotAContract',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'NotNominated',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'Unauthorized',
        type: 'error',
      },
      {
        inputs: [],
        name: 'UpgradeSimulationFailed',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ZeroAddress',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'oldOwner',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnerChanged',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnerNominated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'self',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'implementation',
            type: 'address',
          },
        ],
        name: 'Upgraded',
        type: 'event',
      },
      {
        inputs: [],
        name: 'acceptOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getImplementation',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newNominatedOwner',
            type: 'address',
          },
        ],
        name: 'nominateNewOwner',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'nominatedOwner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'renounceNomination',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newImplementation',
            type: 'address',
          },
        ],
        name: 'simulateUpgradeTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newImplementation',
            type: 'address',
          },
        ],
        name: 'upgradeTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'expected',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'actual',
            type: 'bytes32',
          },
        ],
        name: 'MismatchAssociatedSystemKind',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
        ],
        name: 'MissingAssociatedSystem',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'kind',
            type: 'bytes32',
          },
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'proxy',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'impl',
            type: 'address',
          },
        ],
        name: 'AssociatedSystemSet',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
        ],
        name: 'getAssociatedSystem',
        outputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
          {
            internalType: 'bytes32',
            name: 'kind',
            type: 'bytes32',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'symbol',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'uri',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 'impl',
            type: 'address',
          },
        ],
        name: 'initOrUpgradeNft',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'symbol',
            type: 'string',
          },
          {
            internalType: 'uint8',
            name: 'decimals',
            type: 'uint8',
          },
          {
            internalType: 'address',
            name: 'impl',
            type: 'address',
          },
        ],
        name: 'initOrUpgradeToken',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'endpoint',
            type: 'address',
          },
        ],
        name: 'registerUnmanagedSystem',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'AlreadyInitialized',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'required',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'existing',
            type: 'uint256',
          },
        ],
        name: 'InsufficientAllowance',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'required',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'existing',
            type: 'uint256',
          },
        ],
        name: 'InsufficientBalance',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'string',
            name: 'parameter',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'reason',
            type: 'string',
          },
        ],
        name: 'InvalidParameter',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'Approval',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'Transfer',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
        ],
        name: 'allowance',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'approve',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
        ],
        name: 'balanceOf',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'burn',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'burn',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'burnWithAllowance',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'decimals',
        outputs: [
          {
            internalType: 'uint8',
            name: '',
            type: 'uint8',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'subtractedValue',
            type: 'uint256',
          },
        ],
        name: 'decreaseAllowance',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'addedValue',
            type: 'uint256',
          },
        ],
        name: 'increaseAllowance',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'string',
            name: 'tokenName',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'tokenSymbol',
            type: 'string',
          },
          {
            internalType: 'uint8',
            name: 'tokenDecimals',
            type: 'uint8',
          },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'isInitialized',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'mint',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'name',
        outputs: [
          {
            internalType: 'string',
            name: '',
            type: 'string',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'setAllowance',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'symbol',
        outputs: [
          {
            internalType: 'string',
            name: '',
            type: 'string',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'totalSupply',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'transfer',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'transferFrom',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
  CoreProxy: {
    address: '0x5f8A1C6C3F3Cf684B02D32a8Ec8eF5b5be2722aE',
    abi: [
      {
        inputs: [
          {
            internalType: 'address',
            name: 'implementation',
            type: 'address',
          },
        ],
        name: 'ImplementationIsSterile',
        type: 'error',
      },
      {
        inputs: [],
        name: 'NoChange',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'contr',
            type: 'address',
          },
        ],
        name: 'NotAContract',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'NotNominated',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'Unauthorized',
        type: 'error',
      },
      {
        inputs: [],
        name: 'UpgradeSimulationFailed',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ZeroAddress',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'oldOwner',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnerChanged',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnerNominated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'self',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'implementation',
            type: 'address',
          },
        ],
        name: 'Upgraded',
        type: 'event',
      },
      {
        inputs: [],
        name: 'acceptOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getImplementation',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newNominatedOwner',
            type: 'address',
          },
        ],
        name: 'nominateNewOwner',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'nominatedOwner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'renounceNomination',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newImplementation',
            type: 'address',
          },
        ],
        name: 'simulateUpgradeTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newImplementation',
            type: 'address',
          },
        ],
        name: 'upgradeTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'ValueAlreadyInSet',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ValueNotInSet',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            indexed: false,
            internalType: 'bool',
            name: 'allowAll',
            type: 'bool',
          },
        ],
        name: 'FeatureFlagAllowAllSet',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'account',
            type: 'address',
          },
        ],
        name: 'FeatureFlagAllowlistAdded',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'account',
            type: 'address',
          },
        ],
        name: 'FeatureFlagAllowlistRemoved',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            indexed: false,
            internalType: 'address[]',
            name: 'deniers',
            type: 'address[]',
          },
        ],
        name: 'FeatureFlagDeniersReset',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            indexed: false,
            internalType: 'bool',
            name: 'denyAll',
            type: 'bool',
          },
        ],
        name: 'FeatureFlagDenyAllSet',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'account',
            type: 'address',
          },
        ],
        name: 'addToFeatureFlagAllowlist',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
        ],
        name: 'getDeniers',
        outputs: [
          {
            internalType: 'address[]',
            name: '',
            type: 'address[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
        ],
        name: 'getFeatureFlagAllowAll',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
        ],
        name: 'getFeatureFlagAllowlist',
        outputs: [
          {
            internalType: 'address[]',
            name: '',
            type: 'address[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
        ],
        name: 'getFeatureFlagDenyAll',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'account',
            type: 'address',
          },
        ],
        name: 'isFeatureAllowed',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'account',
            type: 'address',
          },
        ],
        name: 'removeFromFeatureFlagAllowlist',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            internalType: 'address[]',
            name: 'deniers',
            type: 'address[]',
          },
        ],
        name: 'setDeniers',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            internalType: 'bool',
            name: 'allowAll',
            type: 'bool',
          },
        ],
        name: 'setFeatureFlagAllowAll',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            internalType: 'bool',
            name: 'denyAll',
            type: 'bool',
          },
        ],
        name: 'setFeatureFlagDenyAll',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'which',
            type: 'bytes32',
          },
        ],
        name: 'FeatureUnavailable',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
        ],
        name: 'InvalidAccountId',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
        ],
        name: 'InvalidPermission',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'origin',
            type: 'address',
          },
        ],
        name: 'OnlyAccountTokenProxy',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
        ],
        name: 'PermissionDenied',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
        ],
        name: 'PermissionNotGranted',
        type: 'error',
      },
      {
        inputs: [],
        name: 'PositionOutOfBounds',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
        ],
        name: 'AccountCreated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'PermissionGranted',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'PermissionRevoked',
        type: 'event',
      },
      {
        inputs: [],
        name: 'createAccount',
        outputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'requestedAccountId',
            type: 'uint128',
          },
        ],
        name: 'createAccount',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
        ],
        name: 'getAccountLastInteraction',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
        ],
        name: 'getAccountOwner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
        ],
        name: 'getAccountPermissions',
        outputs: [
          {
            components: [
              {
                internalType: 'address',
                name: 'user',
                type: 'address',
              },
              {
                internalType: 'bytes32[]',
                name: 'permissions',
                type: 'bytes32[]',
              },
            ],
            internalType: 'struct IAccountModule.AccountPermissions[]',
            name: 'accountPerms',
            type: 'tuple[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getAccountTokenAddress',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
        ],
        name: 'grantPermission',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
        ],
        name: 'hasPermission',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
        ],
        name: 'isAuthorized',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
        ],
        name: 'notifyAccountTransfer',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
        ],
        name: 'renouncePermission',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
        ],
        name: 'revokePermission',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
        ],
        name: 'AccountNotFound',
        type: 'error',
      },
      {
        inputs: [],
        name: 'EmptyDistribution',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'collateralValue',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'debt',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'ratio',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'minRatio',
            type: 'uint256',
          },
        ],
        name: 'InsufficientCollateralRatio',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'MarketNotFound',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'marketId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'poolId',
            type: 'uint256',
          },
        ],
        name: 'NotFundedByPool',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt256ToInt128',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt256ToUint256',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint128ToInt128',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToInt256',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToUint128',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'int256',
            name: 'updatedDebt',
            type: 'int256',
          },
        ],
        name: 'DebtAssociated',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'associateDebt',
        outputs: [
          {
            internalType: 'int256',
            name: '',
            type: 'int256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'expected',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'actual',
            type: 'bytes32',
          },
        ],
        name: 'MismatchAssociatedSystemKind',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
        ],
        name: 'MissingAssociatedSystem',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'kind',
            type: 'bytes32',
          },
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'proxy',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'impl',
            type: 'address',
          },
        ],
        name: 'AssociatedSystemSet',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
        ],
        name: 'getAssociatedSystem',
        outputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
          {
            internalType: 'bytes32',
            name: 'kind',
            type: 'bytes32',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'symbol',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'uri',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 'impl',
            type: 'address',
          },
        ],
        name: 'initOrUpgradeNft',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'symbol',
            type: 'string',
          },
          {
            internalType: 'uint8',
            name: 'decimals',
            type: 'uint8',
          },
          {
            internalType: 'address',
            name: 'impl',
            type: 'address',
          },
        ],
        name: 'initOrUpgradeToken',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'endpoint',
            type: 'address',
          },
        ],
        name: 'registerUnmanagedSystem',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'InvalidMessage',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        name: 'NotCcipRouter',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint64',
            name: '',
            type: 'uint64',
          },
        ],
        name: 'UnsupportedNetwork',
        type: 'error',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'bytes32',
                name: 'messageId',
                type: 'bytes32',
              },
              {
                internalType: 'uint64',
                name: 'sourceChainSelector',
                type: 'uint64',
              },
              {
                internalType: 'bytes',
                name: 'sender',
                type: 'bytes',
              },
              {
                internalType: 'bytes',
                name: 'data',
                type: 'bytes',
              },
              {
                components: [
                  {
                    internalType: 'address',
                    name: 'token',
                    type: 'address',
                  },
                  {
                    internalType: 'uint256',
                    name: 'amount',
                    type: 'uint256',
                  },
                ],
                internalType: 'struct CcipClient.EVMTokenAmount[]',
                name: 'tokenAmounts',
                type: 'tuple[]',
              },
            ],
            internalType: 'struct CcipClient.Any2EVMMessage',
            name: 'message',
            type: 'tuple',
          },
        ],
        name: 'ccipReceive',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint256',
            name: 'currentTime',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'requiredTime',
            type: 'uint256',
          },
        ],
        name: 'AccountActivityTimeoutPending',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'CollateralDepositDisabled',
        type: 'error',
      },
      {
        inputs: [],
        name: 'CollateralNotFound',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
        ],
        name: 'FailedTransfer',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amountAvailableForDelegationD18',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amountD18',
            type: 'uint256',
          },
        ],
        name: 'InsufficentAvailableCollateral',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'InsufficientAccountCollateral',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'required',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'existing',
            type: 'uint256',
          },
        ],
        name: 'InsufficientAllowance',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'string',
            name: 'parameter',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'reason',
            type: 'string',
          },
        ],
        name: 'InvalidParameter',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToUint64',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'tokenAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint8',
            name: 'decimals',
            type: 'uint8',
          },
        ],
        name: 'PrecisionLost',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'tokenAmount',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint64',
            name: 'expireTimestamp',
            type: 'uint64',
          },
        ],
        name: 'CollateralLockCreated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'tokenAmount',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint64',
            name: 'expireTimestamp',
            type: 'uint64',
          },
        ],
        name: 'CollateralLockExpired',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'tokenAmount',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'Deposited',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'tokenAmount',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'Withdrawn',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'offset',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'count',
            type: 'uint256',
          },
        ],
        name: 'cleanExpiredLocks',
        outputs: [
          {
            internalType: 'uint256',
            name: 'cleared',
            type: 'uint256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'uint64',
            name: 'expireTimestamp',
            type: 'uint64',
          },
        ],
        name: 'createLock',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenAmount',
            type: 'uint256',
          },
        ],
        name: 'deposit',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'getAccountAvailableCollateral',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'getAccountCollateral',
        outputs: [
          {
            internalType: 'uint256',
            name: 'totalDeposited',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'totalAssigned',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'totalLocked',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'offset',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'count',
            type: 'uint256',
          },
        ],
        name: 'getLocks',
        outputs: [
          {
            components: [
              {
                internalType: 'uint128',
                name: 'amountD18',
                type: 'uint128',
              },
              {
                internalType: 'uint64',
                name: 'lockExpirationTime',
                type: 'uint64',
              },
            ],
            internalType: 'struct CollateralLock.Data[]',
            name: 'locks',
            type: 'tuple[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenAmount',
            type: 'uint256',
          },
        ],
        name: 'withdraw',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            components: [
              {
                internalType: 'bool',
                name: 'depositingEnabled',
                type: 'bool',
              },
              {
                internalType: 'uint256',
                name: 'issuanceRatioD18',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'liquidationRatioD18',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'liquidationRewardD18',
                type: 'uint256',
              },
              {
                internalType: 'bytes32',
                name: 'oracleNodeId',
                type: 'bytes32',
              },
              {
                internalType: 'address',
                name: 'tokenAddress',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'minDelegationD18',
                type: 'uint256',
              },
            ],
            indexed: false,
            internalType: 'struct CollateralConfiguration.Data',
            name: 'config',
            type: 'tuple',
          },
        ],
        name: 'CollateralConfigured',
        type: 'event',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'bool',
                name: 'depositingEnabled',
                type: 'bool',
              },
              {
                internalType: 'uint256',
                name: 'issuanceRatioD18',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'liquidationRatioD18',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'liquidationRewardD18',
                type: 'uint256',
              },
              {
                internalType: 'bytes32',
                name: 'oracleNodeId',
                type: 'bytes32',
              },
              {
                internalType: 'address',
                name: 'tokenAddress',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'minDelegationD18',
                type: 'uint256',
              },
            ],
            internalType: 'struct CollateralConfiguration.Data',
            name: 'config',
            type: 'tuple',
          },
        ],
        name: 'configureCollateral',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'getCollateralConfiguration',
        outputs: [
          {
            components: [
              {
                internalType: 'bool',
                name: 'depositingEnabled',
                type: 'bool',
              },
              {
                internalType: 'uint256',
                name: 'issuanceRatioD18',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'liquidationRatioD18',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'liquidationRewardD18',
                type: 'uint256',
              },
              {
                internalType: 'bytes32',
                name: 'oracleNodeId',
                type: 'bytes32',
              },
              {
                internalType: 'address',
                name: 'tokenAddress',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'minDelegationD18',
                type: 'uint256',
              },
            ],
            internalType: 'struct CollateralConfiguration.Data',
            name: '',
            type: 'tuple',
          },
        ],
        stateMutability: 'pure',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bool',
            name: 'hideDisabled',
            type: 'bool',
          },
        ],
        name: 'getCollateralConfigurations',
        outputs: [
          {
            components: [
              {
                internalType: 'bool',
                name: 'depositingEnabled',
                type: 'bool',
              },
              {
                internalType: 'uint256',
                name: 'issuanceRatioD18',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'liquidationRatioD18',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'liquidationRewardD18',
                type: 'uint256',
              },
              {
                internalType: 'bytes32',
                name: 'oracleNodeId',
                type: 'bytes32',
              },
              {
                internalType: 'address',
                name: 'tokenAddress',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'minDelegationD18',
                type: 'uint256',
              },
            ],
            internalType: 'struct CollateralConfiguration.Data[]',
            name: '',
            type: 'tuple[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'getCollateralPrice',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'requiredAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'availableAmount',
            type: 'uint256',
          },
        ],
        name: 'InsufficientCcipFee',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint64',
            name: 'destChainId',
            type: 'uint64',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'TransferCrossChainInitiated',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'uint64',
            name: 'destChainId',
            type: 'uint64',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'transferCrossChain',
        outputs: [
          {
            internalType: 'uint256',
            name: 'gasTokenUsed',
            type: 'uint256',
          },
        ],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'int256',
            name: 'currentDebt',
            type: 'int256',
          },
        ],
        name: 'InsufficientDebt',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'PoolNotFound',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'feeAmount',
            type: 'uint256',
          },
        ],
        name: 'IssuanceFeePaid',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'UsdBurned',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'UsdMinted',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'burnUsd',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'mintUsd',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'CannotScaleEmptyMapping',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'collateralValue',
            type: 'uint256',
          },
          {
            internalType: 'int256',
            name: 'debt',
            type: 'int256',
          },
          {
            internalType: 'uint256',
            name: 'currentCRatio',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'cratio',
            type: 'uint256',
          },
        ],
        name: 'IneligibleForLiquidation',
        type: 'error',
      },
      {
        inputs: [],
        name: 'InsufficientMappedAmount',
        type: 'error',
      },
      {
        inputs: [],
        name: 'MustBeVaultLiquidated',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt128ToUint128',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'debtLiquidated',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'collateralLiquidated',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'amountRewarded',
                type: 'uint256',
              },
            ],
            indexed: false,
            internalType: 'struct ILiquidationModule.LiquidationData',
            name: 'liquidationData',
            type: 'tuple',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'liquidateAsAccountId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'Liquidation',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'debtLiquidated',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'collateralLiquidated',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'amountRewarded',
                type: 'uint256',
              },
            ],
            indexed: false,
            internalType: 'struct ILiquidationModule.LiquidationData',
            name: 'liquidationData',
            type: 'tuple',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'liquidateAsAccountId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'VaultLiquidation',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'isPositionLiquidatable',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'isVaultLiquidatable',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint128',
            name: 'liquidateAsAccountId',
            type: 'uint128',
          },
        ],
        name: 'liquidate',
        outputs: [
          {
            components: [
              {
                internalType: 'uint256',
                name: 'debtLiquidated',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'collateralLiquidated',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'amountRewarded',
                type: 'uint256',
              },
            ],
            internalType: 'struct ILiquidationModule.LiquidationData',
            name: 'liquidationData',
            type: 'tuple',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint128',
            name: 'liquidateAsAccountId',
            type: 'uint128',
          },
          {
            internalType: 'uint256',
            name: 'maxUsd',
            type: 'uint256',
          },
        ],
        name: 'liquidateVault',
        outputs: [
          {
            components: [
              {
                internalType: 'uint256',
                name: 'debtLiquidated',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'collateralLiquidated',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'amountRewarded',
                type: 'uint256',
              },
            ],
            internalType: 'struct ILiquidationModule.LiquidationData',
            name: 'liquidationData',
            type: 'tuple',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenAmountToDeposit',
            type: 'uint256',
          },
        ],
        name: 'InsufficientMarketCollateralDepositable',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenAmountToWithdraw',
            type: 'uint256',
          },
        ],
        name: 'InsufficientMarketCollateralWithdrawable',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'tokenAmount',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'creditCapacity',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'netIssuance',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'depositedCollateralValue',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'reportedDebt',
            type: 'uint256',
          },
        ],
        name: 'MarketCollateralDeposited',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'tokenAmount',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'creditCapacity',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'netIssuance',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'depositedCollateralValue',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'reportedDebt',
            type: 'uint256',
          },
        ],
        name: 'MarketCollateralWithdrawn',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'systemAmount',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
        ],
        name: 'MaximumMarketCollateralConfigured',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'configureMaximumMarketCollateral',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenAmount',
            type: 'uint256',
          },
        ],
        name: 'depositMarketCollateral',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'getMarketCollateralAmount',
        outputs: [
          {
            internalType: 'uint256',
            name: 'collateralAmountD18',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getMarketCollateralValue',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'getMaximumMarketCollateral',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenAmount',
            type: 'uint256',
          },
        ],
        name: 'withdrawMarketCollateral',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'market',
            type: 'address',
          },
        ],
        name: 'IncorrectMarketInterface',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'NotEnoughLiquidity',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'market',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'MarketRegistered',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'feeAmount',
            type: 'uint256',
          },
        ],
        name: 'MarketSystemFeePaid',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'market',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'creditCapacity',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'netIssuance',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'depositedCollateralValue',
            type: 'uint256',
          },
        ],
        name: 'MarketUsdDeposited',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'market',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'creditCapacity',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'netIssuance',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'depositedCollateralValue',
            type: 'uint256',
          },
        ],
        name: 'MarketUsdWithdrawn',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'minLiquidityRatio',
            type: 'uint256',
          },
        ],
        name: 'SetMarketMinLiquidityRatio',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint32',
            name: 'minDelegateTime',
            type: 'uint32',
          },
        ],
        name: 'SetMinDelegateTime',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'depositMarketUsd',
        outputs: [
          {
            internalType: 'uint256',
            name: 'feeAmount',
            type: 'uint256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'uint256',
            name: 'maxIter',
            type: 'uint256',
          },
        ],
        name: 'distributeDebtToPools',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getMarketAddress',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getMarketCollateral',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getMarketDebtPerShare',
        outputs: [
          {
            internalType: 'int256',
            name: '',
            type: 'int256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: '',
            type: 'uint128',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'getMarketFees',
        outputs: [
          {
            internalType: 'uint256',
            name: 'depositFeeAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'withdrawFeeAmount',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getMarketMinDelegateTime',
        outputs: [
          {
            internalType: 'uint32',
            name: '',
            type: 'uint32',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getMarketNetIssuance',
        outputs: [
          {
            internalType: 'int128',
            name: '',
            type: 'int128',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'getMarketPoolDebtDistribution',
        outputs: [
          {
            internalType: 'uint256',
            name: 'sharesD18',
            type: 'uint256',
          },
          {
            internalType: 'uint128',
            name: 'totalSharesD18',
            type: 'uint128',
          },
          {
            internalType: 'int128',
            name: 'valuePerShareD27',
            type: 'int128',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getMarketPools',
        outputs: [
          {
            internalType: 'uint128[]',
            name: 'inRangePoolIds',
            type: 'uint128[]',
          },
          {
            internalType: 'uint128[]',
            name: 'outRangePoolIds',
            type: 'uint128[]',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getMarketReportedDebt',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getMarketTotalDebt',
        outputs: [
          {
            internalType: 'int256',
            name: '',
            type: 'int256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getMinLiquidityRatio',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getOracleManager',
        outputs: [
          {
            internalType: 'contract IOracleManager',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getUsdToken',
        outputs: [
          {
            internalType: 'contract IERC20',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getWithdrawableMarketUsd',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'isMarketCapacityLocked',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'market',
            type: 'address',
          },
        ],
        name: 'registerMarket',
        outputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'uint32',
            name: 'minDelegateTime',
            type: 'uint32',
          },
        ],
        name: 'setMarketMinDelegateTime',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'uint256',
            name: 'minLiquidityRatio',
            type: 'uint256',
          },
        ],
        name: 'setMinLiquidityRatio',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'withdrawMarketUsd',
        outputs: [
          {
            internalType: 'uint256',
            name: 'feeAmount',
            type: 'uint256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'poolId',
            type: 'uint256',
          },
        ],
        name: 'PoolApprovedAdded',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'poolId',
            type: 'uint256',
          },
        ],
        name: 'PoolApprovedRemoved',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'poolId',
            type: 'uint256',
          },
        ],
        name: 'PreferredPoolSet',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'addApprovedPool',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getApprovedPools',
        outputs: [
          {
            internalType: 'uint256[]',
            name: '',
            type: 'uint256[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getPreferredPool',
        outputs: [
          {
            internalType: 'uint128',
            name: '',
            type: 'uint128',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'removeApprovedPool',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'setPreferredPool',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'marketId',
            type: 'uint256',
          },
        ],
        name: 'CapacityLocked',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'uint32',
            name: 'timeRemaining',
            type: 'uint32',
          },
        ],
        name: 'MinDelegationTimeoutPending',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'PoolAlreadyExists',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'collateralLimitD18',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'issuanceRatioD18',
                type: 'uint256',
              },
            ],
            indexed: false,
            internalType: 'struct PoolCollateralConfiguration.Data',
            name: 'config',
            type: 'tuple',
          },
        ],
        name: 'PoolCollateralConfigurationUpdated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'bool',
            name: 'disabled',
            type: 'bool',
          },
        ],
        name: 'PoolCollateralDisabledByDefaultSet',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            components: [
              {
                internalType: 'uint128',
                name: 'marketId',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'weightD18',
                type: 'uint128',
              },
              {
                internalType: 'int128',
                name: 'maxDebtShareValueD18',
                type: 'int128',
              },
            ],
            indexed: false,
            internalType: 'struct MarketConfiguration.Data[]',
            name: 'markets',
            type: 'tuple[]',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'PoolConfigurationSet',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'PoolCreated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'PoolNameUpdated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
        ],
        name: 'PoolNominationRenounced',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
        ],
        name: 'PoolNominationRevoked',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'nominatedOwner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
        ],
        name: 'PoolOwnerNominated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
        ],
        name: 'PoolOwnershipAccepted',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
        ],
        name: 'PoolOwnershipRenounced',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint256',
            name: 'minLiquidityRatio',
            type: 'uint256',
          },
        ],
        name: 'SetMinLiquidityRatio',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'acceptPoolOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'requestedPoolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
        ],
        name: 'createPool',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getMinLiquidityRatio',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'getNominatedPoolOwner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'getPoolCollateralConfiguration',
        outputs: [
          {
            components: [
              {
                internalType: 'uint256',
                name: 'collateralLimitD18',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'issuanceRatioD18',
                type: 'uint256',
              },
            ],
            internalType: 'struct PoolCollateralConfiguration.Data',
            name: 'config',
            type: 'tuple',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateral',
            type: 'address',
          },
        ],
        name: 'getPoolCollateralIssuanceRatio',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'getPoolConfiguration',
        outputs: [
          {
            components: [
              {
                internalType: 'uint128',
                name: 'marketId',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'weightD18',
                type: 'uint128',
              },
              {
                internalType: 'int128',
                name: 'maxDebtShareValueD18',
                type: 'int128',
              },
            ],
            internalType: 'struct MarketConfiguration.Data[]',
            name: '',
            type: 'tuple[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'getPoolName',
        outputs: [
          {
            internalType: 'string',
            name: 'poolName',
            type: 'string',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'getPoolOwner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'nominatedOwner',
            type: 'address',
          },
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'nominatePoolOwner',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'optionalCollateralType',
            type: 'address',
          },
        ],
        name: 'rebalancePool',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'renouncePoolNomination',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'renouncePoolOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
        ],
        name: 'revokePoolNomination',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'minLiquidityRatio',
            type: 'uint256',
          },
        ],
        name: 'setMinLiquidityRatio',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'collateralLimitD18',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'issuanceRatioD18',
                type: 'uint256',
              },
            ],
            internalType: 'struct PoolCollateralConfiguration.Data',
            name: 'newConfig',
            type: 'tuple',
          },
        ],
        name: 'setPoolCollateralConfiguration',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'bool',
            name: 'disabled',
            type: 'bool',
          },
        ],
        name: 'setPoolCollateralDisabledByDefault',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            components: [
              {
                internalType: 'uint128',
                name: 'marketId',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'weightD18',
                type: 'uint128',
              },
              {
                internalType: 'int128',
                name: 'maxDebtShareValueD18',
                type: 'int128',
              },
            ],
            internalType: 'struct MarketConfiguration.Data[]',
            name: 'newMarketConfigurations',
            type: 'tuple[]',
          },
        ],
        name: 'setPoolConfiguration',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
        ],
        name: 'setPoolName',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToUint32',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint32ToInt32',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint64ToInt64',
        type: 'error',
      },
      {
        inputs: [],
        name: 'RewardDistributorNotFound',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'distributor',
            type: 'address',
          },
        ],
        name: 'RewardUnavailable',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'distributor',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'RewardsClaimed',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'distributor',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'start',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'duration',
            type: 'uint256',
          },
        ],
        name: 'RewardsDistributed',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'distributor',
            type: 'address',
          },
        ],
        name: 'RewardsDistributorRegistered',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'distributor',
            type: 'address',
          },
        ],
        name: 'RewardsDistributorRemoved',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'distributor',
            type: 'address',
          },
        ],
        name: 'claimRewards',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'uint64',
            name: 'start',
            type: 'uint64',
          },
          {
            internalType: 'uint32',
            name: 'duration',
            type: 'uint32',
          },
        ],
        name: 'distributeRewards',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'rewardsDistributor',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'uint64',
            name: 'start',
            type: 'uint64',
          },
          {
            internalType: 'uint32',
            name: 'duration',
            type: 'uint32',
          },
        ],
        name: 'distributeRewardsByOwner',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'distributor',
            type: 'address',
          },
        ],
        name: 'getAvailableRewards',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'distributor',
            type: 'address',
          },
        ],
        name: 'getRewardRate',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'distributor',
            type: 'address',
          },
        ],
        name: 'registerRewardsDistributor',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'distributor',
            type: 'address',
          },
        ],
        name: 'removeRewardsDistributor',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
        ],
        name: 'updateRewards',
        outputs: [
          {
            internalType: 'uint256[]',
            name: '',
            type: 'uint256[]',
          },
          {
            internalType: 'address[]',
            name: '',
            type: 'address[]',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'uint64',
            name: 'newChainId',
            type: 'uint64',
          },
        ],
        name: 'NewSupportedCrossChainNetwork',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'ccipRouter',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'ccipTokenPool',
            type: 'address',
          },
        ],
        name: 'configureChainlinkCrossChain',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'oracleManagerAddress',
            type: 'address',
          },
        ],
        name: 'configureOracleManager',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'k',
            type: 'bytes32',
          },
        ],
        name: 'getConfig',
        outputs: [
          {
            internalType: 'bytes32',
            name: 'v',
            type: 'bytes32',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'k',
            type: 'bytes32',
          },
        ],
        name: 'getConfigAddress',
        outputs: [
          {
            internalType: 'address',
            name: 'v',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'k',
            type: 'bytes32',
          },
        ],
        name: 'getConfigUint',
        outputs: [
          {
            internalType: 'uint256',
            name: 'v',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getTrustedForwarder',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'pure',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'forwarder',
            type: 'address',
          },
        ],
        name: 'isTrustedForwarder',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'pure',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'k',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'v',
            type: 'bytes32',
          },
        ],
        name: 'setConfig',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint64[]',
            name: 'supportedNetworks',
            type: 'uint64[]',
          },
          {
            internalType: 'uint64[]',
            name: 'ccipSelectors',
            type: 'uint64[]',
          },
        ],
        name: 'setSupportedCrossChainNetworks',
        outputs: [
          {
            internalType: 'uint256',
            name: 'numRegistered',
            type: 'uint256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes4',
            name: 'interfaceId',
            type: 'bytes4',
          },
        ],
        name: 'supportsInterface',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'minDelegation',
            type: 'uint256',
          },
        ],
        name: 'InsufficientDelegation',
        type: 'error',
      },
      {
        inputs: [],
        name: 'InvalidCollateralAmount',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'leverage',
            type: 'uint256',
          },
        ],
        name: 'InvalidLeverage',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'currentCollateral',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxCollateral',
            type: 'uint256',
          },
        ],
        name: 'PoolCollateralLimitExceeded',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'leverage',
            type: 'uint256',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'DelegationUpdated',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'newCollateralAmountD18',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'leverage',
            type: 'uint256',
          },
        ],
        name: 'delegateCollateral',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'getPosition',
        outputs: [
          {
            internalType: 'uint256',
            name: 'collateralAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'collateralValue',
            type: 'uint256',
          },
          {
            internalType: 'int256',
            name: 'debt',
            type: 'int256',
          },
          {
            internalType: 'uint256',
            name: 'collateralizationRatio',
            type: 'uint256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'getPositionCollateral',
        outputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'getPositionCollateralRatio',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'getPositionDebt',
        outputs: [
          {
            internalType: 'int256',
            name: 'debt',
            type: 'int256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'getVaultCollateral',
        outputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'getVaultCollateralRatio',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'poolId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralType',
            type: 'address',
          },
        ],
        name: 'getVaultDebt',
        outputs: [
          {
            internalType: 'int256',
            name: '',
            type: 'int256',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
  AccountProxy: {
    address: '0xC1DA71C6BD1D55Cd061852cbf13b58617Fee945B',
    abi: [
      {
        inputs: [
          {
            internalType: 'address',
            name: 'implementation',
            type: 'address',
          },
        ],
        name: 'ImplementationIsSterile',
        type: 'error',
      },
      {
        inputs: [],
        name: 'NoChange',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'contr',
            type: 'address',
          },
        ],
        name: 'NotAContract',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'NotNominated',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'Unauthorized',
        type: 'error',
      },
      {
        inputs: [],
        name: 'UpgradeSimulationFailed',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ZeroAddress',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'oldOwner',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnerChanged',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnerNominated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'self',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'implementation',
            type: 'address',
          },
        ],
        name: 'Upgraded',
        type: 'event',
      },
      {
        inputs: [],
        name: 'acceptOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getImplementation',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newNominatedOwner',
            type: 'address',
          },
        ],
        name: 'nominateNewOwner',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'nominatedOwner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'renounceNomination',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newImplementation',
            type: 'address',
          },
        ],
        name: 'simulateUpgradeTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newImplementation',
            type: 'address',
          },
        ],
        name: 'upgradeTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'AlreadyInitialized',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'CannotSelfApprove',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'requestedIndex',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'length',
            type: 'uint256',
          },
        ],
        name: 'IndexOverrun',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'InvalidOwner',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'string',
            name: 'parameter',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'reason',
            type: 'string',
          },
        ],
        name: 'InvalidParameter',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'InvalidTransferRecipient',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToUint128',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
        ],
        name: 'TokenAlreadyMinted',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
        ],
        name: 'TokenDoesNotExist',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'approved',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'Approval',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'operator',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'bool',
            name: 'approved',
            type: 'bool',
          },
        ],
        name: 'ApprovalForAll',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'Transfer',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'approve',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'holder',
            type: 'address',
          },
        ],
        name: 'balanceOf',
        outputs: [
          {
            internalType: 'uint256',
            name: 'balance',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'burn',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'getApproved',
        outputs: [
          {
            internalType: 'address',
            name: 'operator',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'string',
            name: 'tokenName',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'tokenSymbol',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'uri',
            type: 'string',
          },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'holder',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'operator',
            type: 'address',
          },
        ],
        name: 'isApprovedForAll',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'isInitialized',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'mint',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'name',
        outputs: [
          {
            internalType: 'string',
            name: '',
            type: 'string',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'ownerOf',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes',
          },
        ],
        name: 'safeMint',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes',
          },
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
        ],
        name: 'setAllowance',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'operator',
            type: 'address',
          },
          {
            internalType: 'bool',
            name: 'approved',
            type: 'bool',
          },
        ],
        name: 'setApprovalForAll',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'string',
            name: 'uri',
            type: 'string',
          },
        ],
        name: 'setBaseTokenURI',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes4',
            name: 'interfaceId',
            type: 'bytes4',
          },
        ],
        name: 'supportsInterface',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'symbol',
        outputs: [
          {
            internalType: 'string',
            name: '',
            type: 'string',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'index',
            type: 'uint256',
          },
        ],
        name: 'tokenByIndex',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'index',
            type: 'uint256',
          },
        ],
        name: 'tokenOfOwnerByIndex',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'tokenURI',
        outputs: [
          {
            internalType: 'string',
            name: '',
            type: 'string',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'totalSupply',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'transferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
  USDProxy: {
    address: '0x83ed9FAE796Ec171a732af3D4D10B03BA9cd2568',
    abi: [
      {
        inputs: [
          {
            internalType: 'address',
            name: 'implementation',
            type: 'address',
          },
        ],
        name: 'ImplementationIsSterile',
        type: 'error',
      },
      {
        inputs: [],
        name: 'NoChange',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'contr',
            type: 'address',
          },
        ],
        name: 'NotAContract',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'NotNominated',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'Unauthorized',
        type: 'error',
      },
      {
        inputs: [],
        name: 'UpgradeSimulationFailed',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ZeroAddress',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'oldOwner',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnerChanged',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnerNominated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'self',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'implementation',
            type: 'address',
          },
        ],
        name: 'Upgraded',
        type: 'event',
      },
      {
        inputs: [],
        name: 'acceptOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getImplementation',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newNominatedOwner',
            type: 'address',
          },
        ],
        name: 'nominateNewOwner',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'nominatedOwner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'renounceNomination',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newImplementation',
            type: 'address',
          },
        ],
        name: 'simulateUpgradeTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newImplementation',
            type: 'address',
          },
        ],
        name: 'upgradeTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'expected',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'actual',
            type: 'bytes32',
          },
        ],
        name: 'MismatchAssociatedSystemKind',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
        ],
        name: 'MissingAssociatedSystem',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'kind',
            type: 'bytes32',
          },
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'proxy',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'impl',
            type: 'address',
          },
        ],
        name: 'AssociatedSystemSet',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
        ],
        name: 'getAssociatedSystem',
        outputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
          {
            internalType: 'bytes32',
            name: 'kind',
            type: 'bytes32',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'symbol',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'uri',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 'impl',
            type: 'address',
          },
        ],
        name: 'initOrUpgradeNft',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'symbol',
            type: 'string',
          },
          {
            internalType: 'uint8',
            name: 'decimals',
            type: 'uint8',
          },
          {
            internalType: 'address',
            name: 'impl',
            type: 'address',
          },
        ],
        name: 'initOrUpgradeToken',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'endpoint',
            type: 'address',
          },
        ],
        name: 'registerUnmanagedSystem',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'AlreadyInitialized',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'required',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'existing',
            type: 'uint256',
          },
        ],
        name: 'InsufficientAllowance',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'required',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'existing',
            type: 'uint256',
          },
        ],
        name: 'InsufficientBalance',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'string',
            name: 'parameter',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'reason',
            type: 'string',
          },
        ],
        name: 'InvalidParameter',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'Approval',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'Transfer',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
        ],
        name: 'allowance',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'approve',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
        ],
        name: 'balanceOf',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'burn',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'burn',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'burnWithAllowance',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'decimals',
        outputs: [
          {
            internalType: 'uint8',
            name: '',
            type: 'uint8',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'subtractedValue',
            type: 'uint256',
          },
        ],
        name: 'decreaseAllowance',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'addedValue',
            type: 'uint256',
          },
        ],
        name: 'increaseAllowance',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'string',
            name: 'tokenName',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'tokenSymbol',
            type: 'string',
          },
          {
            internalType: 'uint8',
            name: 'tokenDecimals',
            type: 'uint8',
          },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'isInitialized',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'mint',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'name',
        outputs: [
          {
            internalType: 'string',
            name: '',
            type: 'string',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'setAllowance',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'symbol',
        outputs: [
          {
            internalType: 'string',
            name: '',
            type: 'string',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'totalSupply',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'transfer',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'transferFrom',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
  TrustedMulticallForwarder: {
    address: '0xE2C5658cC5C448B48141168f3e475dF8f65A1e3e',
    abi: [
      {
        inputs: [],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'account',
            type: 'address',
          },
        ],
        name: 'AddressInsufficientBalance',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint48',
            name: 'deadline',
            type: 'uint48',
          },
        ],
        name: 'ERC2771ForwarderExpiredRequest',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'signer',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
        ],
        name: 'ERC2771ForwarderInvalidSigner',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'requestedValue',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'msgValue',
            type: 'uint256',
          },
        ],
        name: 'ERC2771ForwarderMismatchedValue',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'forwarder',
            type: 'address',
          },
        ],
        name: 'ERC2771UntrustfulTarget',
        type: 'error',
      },
      {
        inputs: [],
        name: 'FailedInnerCall',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'account',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'currentNonce',
            type: 'uint256',
          },
        ],
        name: 'InvalidAccountNonce',
        type: 'error',
      },
      {
        inputs: [],
        name: 'InvalidShortString',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'string',
            name: 'str',
            type: 'string',
          },
        ],
        name: 'StringTooLong',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [],
        name: 'EIP712DomainChanged',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'signer',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'nonce',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'bool',
            name: 'success',
            type: 'bool',
          },
        ],
        name: 'ExecutedForwardRequest',
        type: 'event',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'address',
                name: 'target',
                type: 'address',
              },
              {
                internalType: 'bytes',
                name: 'callData',
                type: 'bytes',
              },
            ],
            internalType: 'struct TrustedMulticallForwarder.Call[]',
            name: 'calls',
            type: 'tuple[]',
          },
        ],
        name: 'aggregate',
        outputs: [
          {
            internalType: 'uint256',
            name: 'blockNumber',
            type: 'uint256',
          },
          {
            internalType: 'bytes[]',
            name: 'returnData',
            type: 'bytes[]',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'address',
                name: 'target',
                type: 'address',
              },
              {
                internalType: 'bool',
                name: 'requireSuccess',
                type: 'bool',
              },
              {
                internalType: 'bytes',
                name: 'callData',
                type: 'bytes',
              },
            ],
            internalType: 'struct TrustedMulticallForwarder.Call3[]',
            name: 'calls',
            type: 'tuple[]',
          },
        ],
        name: 'aggregate3',
        outputs: [
          {
            components: [
              {
                internalType: 'bool',
                name: 'success',
                type: 'bool',
              },
              {
                internalType: 'bytes',
                name: 'returnData',
                type: 'bytes',
              },
            ],
            internalType: 'struct TrustedMulticallForwarder.Result[]',
            name: 'returnData',
            type: 'tuple[]',
          },
        ],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'address',
                name: 'target',
                type: 'address',
              },
              {
                internalType: 'bool',
                name: 'requireSuccess',
                type: 'bool',
              },
              {
                internalType: 'uint256',
                name: 'value',
                type: 'uint256',
              },
              {
                internalType: 'bytes',
                name: 'callData',
                type: 'bytes',
              },
            ],
            internalType: 'struct TrustedMulticallForwarder.Call3Value[]',
            name: 'calls',
            type: 'tuple[]',
          },
        ],
        name: 'aggregate3Value',
        outputs: [
          {
            components: [
              {
                internalType: 'bool',
                name: 'success',
                type: 'bool',
              },
              {
                internalType: 'bytes',
                name: 'returnData',
                type: 'bytes',
              },
            ],
            internalType: 'struct TrustedMulticallForwarder.Result[]',
            name: 'returnData',
            type: 'tuple[]',
          },
        ],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'address',
                name: 'target',
                type: 'address',
              },
              {
                internalType: 'bytes',
                name: 'callData',
                type: 'bytes',
              },
            ],
            internalType: 'struct TrustedMulticallForwarder.Call[]',
            name: 'calls',
            type: 'tuple[]',
          },
        ],
        name: 'blockAndAggregate',
        outputs: [
          {
            internalType: 'uint256',
            name: 'blockNumber',
            type: 'uint256',
          },
          {
            internalType: 'bytes32',
            name: 'blockHash',
            type: 'bytes32',
          },
          {
            components: [
              {
                internalType: 'bool',
                name: 'success',
                type: 'bool',
              },
              {
                internalType: 'bytes',
                name: 'returnData',
                type: 'bytes',
              },
            ],
            internalType: 'struct TrustedMulticallForwarder.Result[]',
            name: 'returnData',
            type: 'tuple[]',
          },
        ],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'eip712Domain',
        outputs: [
          {
            internalType: 'bytes1',
            name: 'fields',
            type: 'bytes1',
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'version',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'chainId',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'verifyingContract',
            type: 'address',
          },
          {
            internalType: 'bytes32',
            name: 'salt',
            type: 'bytes32',
          },
          {
            internalType: 'uint256[]',
            name: 'extensions',
            type: 'uint256[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'address',
                name: 'from',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'to',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'value',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'gas',
                type: 'uint256',
              },
              {
                internalType: 'uint48',
                name: 'deadline',
                type: 'uint48',
              },
              {
                internalType: 'bytes',
                name: 'data',
                type: 'bytes',
              },
              {
                internalType: 'bytes',
                name: 'signature',
                type: 'bytes',
              },
            ],
            internalType: 'struct ERC2771Forwarder.ForwardRequestData',
            name: 'request',
            type: 'tuple',
          },
        ],
        name: 'execute',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'address',
                name: 'from',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'to',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'value',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'gas',
                type: 'uint256',
              },
              {
                internalType: 'uint48',
                name: 'deadline',
                type: 'uint48',
              },
              {
                internalType: 'bytes',
                name: 'data',
                type: 'bytes',
              },
              {
                internalType: 'bytes',
                name: 'signature',
                type: 'bytes',
              },
            ],
            internalType: 'struct ERC2771Forwarder.ForwardRequestData[]',
            name: 'requests',
            type: 'tuple[]',
          },
        ],
        name: 'executeBatch',
        outputs: [
          {
            components: [
              {
                internalType: 'bool',
                name: 'success',
                type: 'bool',
              },
              {
                internalType: 'bytes',
                name: 'returnData',
                type: 'bytes',
              },
            ],
            internalType: 'struct TrustedMulticallForwarder.Result[]',
            name: 'returnData',
            type: 'tuple[]',
          },
        ],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'address',
                name: 'from',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'to',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'value',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'gas',
                type: 'uint256',
              },
              {
                internalType: 'uint48',
                name: 'deadline',
                type: 'uint48',
              },
              {
                internalType: 'bytes',
                name: 'data',
                type: 'bytes',
              },
              {
                internalType: 'bytes',
                name: 'signature',
                type: 'bytes',
              },
            ],
            internalType: 'struct ERC2771Forwarder.ForwardRequestData[]',
            name: 'requests',
            type: 'tuple[]',
          },
          {
            internalType: 'address payable',
            name: 'refundReceiver',
            type: 'address',
          },
        ],
        name: 'executeBatch',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getBasefee',
        outputs: [
          {
            internalType: 'uint256',
            name: 'basefee',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'blockNumber',
            type: 'uint256',
          },
        ],
        name: 'getBlockHash',
        outputs: [
          {
            internalType: 'bytes32',
            name: 'blockHash',
            type: 'bytes32',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getBlockNumber',
        outputs: [
          {
            internalType: 'uint256',
            name: 'blockNumber',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getChainId',
        outputs: [
          {
            internalType: 'uint256',
            name: 'chainid',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getCurrentBlockCoinbase',
        outputs: [
          {
            internalType: 'address',
            name: 'coinbase',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getCurrentBlockGasLimit',
        outputs: [
          {
            internalType: 'uint256',
            name: 'gaslimit',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getCurrentBlockTimestamp',
        outputs: [
          {
            internalType: 'uint256',
            name: 'timestamp',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'getEthBalance',
        outputs: [
          {
            internalType: 'uint256',
            name: 'balance',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getLastBlockHash',
        outputs: [
          {
            internalType: 'bytes32',
            name: 'blockHash',
            type: 'bytes32',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getPrevRandao',
        outputs: [
          {
            internalType: 'uint256',
            name: 'prevrandao',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
        ],
        name: 'nonces',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bool',
            name: 'requireSuccess',
            type: 'bool',
          },
          {
            components: [
              {
                internalType: 'address',
                name: 'target',
                type: 'address',
              },
              {
                internalType: 'bytes',
                name: 'callData',
                type: 'bytes',
              },
            ],
            internalType: 'struct TrustedMulticallForwarder.Call[]',
            name: 'calls',
            type: 'tuple[]',
          },
        ],
        name: 'tryAggregate',
        outputs: [
          {
            components: [
              {
                internalType: 'bool',
                name: 'success',
                type: 'bool',
              },
              {
                internalType: 'bytes',
                name: 'returnData',
                type: 'bytes',
              },
            ],
            internalType: 'struct TrustedMulticallForwarder.Result[]',
            name: 'returnData',
            type: 'tuple[]',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bool',
            name: 'requireSuccess',
            type: 'bool',
          },
          {
            components: [
              {
                internalType: 'address',
                name: 'target',
                type: 'address',
              },
              {
                internalType: 'bytes',
                name: 'callData',
                type: 'bytes',
              },
            ],
            internalType: 'struct TrustedMulticallForwarder.Call[]',
            name: 'calls',
            type: 'tuple[]',
          },
        ],
        name: 'tryBlockAndAggregate',
        outputs: [
          {
            internalType: 'uint256',
            name: 'blockNumber',
            type: 'uint256',
          },
          {
            internalType: 'bytes32',
            name: 'blockHash',
            type: 'bytes32',
          },
          {
            components: [
              {
                internalType: 'bool',
                name: 'success',
                type: 'bool',
              },
              {
                internalType: 'bytes',
                name: 'returnData',
                type: 'bytes',
              },
            ],
            internalType: 'struct TrustedMulticallForwarder.Result[]',
            name: 'returnData',
            type: 'tuple[]',
          },
        ],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'address',
                name: 'from',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'to',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'value',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'gas',
                type: 'uint256',
              },
              {
                internalType: 'uint48',
                name: 'deadline',
                type: 'uint48',
              },
              {
                internalType: 'bytes',
                name: 'data',
                type: 'bytes',
              },
              {
                internalType: 'bytes',
                name: 'signature',
                type: 'bytes',
              },
            ],
            internalType: 'struct ERC2771Forwarder.ForwardRequestData',
            name: 'request',
            type: 'tuple',
          },
        ],
        name: 'verify',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
    ],
  },
  NodeModule: {
    address: '0xa28De4A0d0F0a824F4A71b9AEE5F5CEA05D9b62f',
    abi: [
      {
        inputs: [
          {
            internalType: 'int256',
            name: 'deviation',
            type: 'int256',
          },
        ],
        name: 'DeviationToleranceExceeded',
        type: 'error',
      },
      {
        inputs: [],
        name: 'InvalidInputPrice',
        type: 'error',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'enum NodeDefinition.NodeType',
                name: 'nodeType',
                type: 'uint8',
              },
              {
                internalType: 'bytes',
                name: 'parameters',
                type: 'bytes',
              },
              {
                internalType: 'bytes32[]',
                name: 'parents',
                type: 'bytes32[]',
              },
            ],
            internalType: 'struct NodeDefinition.Data',
            name: 'nodeType',
            type: 'tuple',
          },
        ],
        name: 'InvalidNodeDefinition',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'string',
            name: 'parameter',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'reason',
            type: 'string',
          },
        ],
        name: 'InvalidParameter',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'int256',
            name: 'price',
            type: 'int256',
          },
        ],
        name: 'InvalidPrice',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'nodeId',
            type: 'bytes32',
          },
        ],
        name: 'NodeNotRegistered',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'oracleContract',
            type: 'address',
          },
          {
            internalType: 'bytes',
            name: 'oracleQuery',
            type: 'bytes',
          },
        ],
        name: 'OracleDataRequired',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt256ToUint256',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt56ToInt24',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToInt256',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToUint160',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint56ToInt56',
        type: 'error',
      },
      {
        inputs: [],
        name: 'StalenessToleranceExceeded',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'nodeId',
            type: 'bytes32',
          },
        ],
        name: 'UnprocessableNode',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'enum ReducerNode.Operations',
            name: 'operation',
            type: 'uint8',
          },
        ],
        name: 'UnsupportedOperation',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'bytes32',
            name: 'nodeId',
            type: 'bytes32',
          },
          {
            indexed: false,
            internalType: 'enum NodeDefinition.NodeType',
            name: 'nodeType',
            type: 'uint8',
          },
          {
            indexed: false,
            internalType: 'bytes',
            name: 'parameters',
            type: 'bytes',
          },
          {
            indexed: false,
            internalType: 'bytes32[]',
            name: 'parents',
            type: 'bytes32[]',
          },
        ],
        name: 'NodeRegistered',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'nodeId',
            type: 'bytes32',
          },
        ],
        name: 'getNode',
        outputs: [
          {
            components: [
              {
                internalType: 'enum NodeDefinition.NodeType',
                name: 'nodeType',
                type: 'uint8',
              },
              {
                internalType: 'bytes',
                name: 'parameters',
                type: 'bytes',
              },
              {
                internalType: 'bytes32[]',
                name: 'parents',
                type: 'bytes32[]',
              },
            ],
            internalType: 'struct NodeDefinition.Data',
            name: 'node',
            type: 'tuple',
          },
        ],
        stateMutability: 'pure',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'enum NodeDefinition.NodeType',
            name: 'nodeType',
            type: 'uint8',
          },
          {
            internalType: 'bytes',
            name: 'parameters',
            type: 'bytes',
          },
          {
            internalType: 'bytes32[]',
            name: 'parents',
            type: 'bytes32[]',
          },
        ],
        name: 'getNodeId',
        outputs: [
          {
            internalType: 'bytes32',
            name: 'nodeId',
            type: 'bytes32',
          },
        ],
        stateMutability: 'pure',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'nodeId',
            type: 'bytes32',
          },
        ],
        name: 'process',
        outputs: [
          {
            components: [
              {
                internalType: 'int256',
                name: 'price',
                type: 'int256',
              },
              {
                internalType: 'uint256',
                name: 'timestamp',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: '__slotAvailableForFutureUse1',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: '__slotAvailableForFutureUse2',
                type: 'uint256',
              },
            ],
            internalType: 'struct NodeOutput.Data',
            name: 'node',
            type: 'tuple',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'nodeId',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32[]',
            name: 'runtimeKeys',
            type: 'bytes32[]',
          },
          {
            internalType: 'bytes32[]',
            name: 'runtimeValues',
            type: 'bytes32[]',
          },
        ],
        name: 'processWithRuntime',
        outputs: [
          {
            components: [
              {
                internalType: 'int256',
                name: 'price',
                type: 'int256',
              },
              {
                internalType: 'uint256',
                name: 'timestamp',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: '__slotAvailableForFutureUse1',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: '__slotAvailableForFutureUse2',
                type: 'uint256',
              },
            ],
            internalType: 'struct NodeOutput.Data',
            name: 'node',
            type: 'tuple',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'enum NodeDefinition.NodeType',
            name: 'nodeType',
            type: 'uint8',
          },
          {
            internalType: 'bytes',
            name: 'parameters',
            type: 'bytes',
          },
          {
            internalType: 'bytes32[]',
            name: 'parents',
            type: 'bytes32[]',
          },
        ],
        name: 'registerNode',
        outputs: [
          {
            internalType: 'bytes32',
            name: 'nodeId',
            type: 'bytes32',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
  InitialProxy: {
    address: '0x11fF13A137688A9951C6390Cf845A7C09791eD10',
    abi: [
      {
        inputs: [
          {
            internalType: 'address',
            name: 'implementation',
            type: 'address',
          },
        ],
        name: 'ImplementationIsSterile',
        type: 'error',
      },
      {
        inputs: [],
        name: 'NoChange',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'contr',
            type: 'address',
          },
        ],
        name: 'NotAContract',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'NotNominated',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'Unauthorized',
        type: 'error',
      },
      {
        inputs: [],
        name: 'UpgradeSimulationFailed',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ZeroAddress',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'oldOwner',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnerChanged',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnerNominated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'self',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'implementation',
            type: 'address',
          },
        ],
        name: 'Upgraded',
        type: 'event',
      },
      {
        inputs: [],
        name: 'acceptOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getImplementation',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newNominatedOwner',
            type: 'address',
          },
        ],
        name: 'nominateNewOwner',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'nominatedOwner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'renounceNomination',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newImplementation',
            type: 'address',
          },
        ],
        name: 'simulateUpgradeTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newImplementation',
            type: 'address',
          },
        ],
        name: 'upgradeTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
  OracleRouter: {
    address: '0xeb06eeee4cea59887a904d13a06d77af87f3e0a9',
    abi: [
      {
        inputs: [
          {
            internalType: 'address',
            name: 'implementation',
            type: 'address',
          },
        ],
        name: 'ImplementationIsSterile',
        type: 'error',
      },
      {
        inputs: [],
        name: 'NoChange',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'contr',
            type: 'address',
          },
        ],
        name: 'NotAContract',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'NotNominated',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'Unauthorized',
        type: 'error',
      },
      {
        inputs: [],
        name: 'UpgradeSimulationFailed',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ZeroAddress',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'oldOwner',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnerChanged',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnerNominated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'self',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'implementation',
            type: 'address',
          },
        ],
        name: 'Upgraded',
        type: 'event',
      },
      {
        inputs: [],
        name: 'acceptOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getImplementation',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newNominatedOwner',
            type: 'address',
          },
        ],
        name: 'nominateNewOwner',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'nominatedOwner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'renounceNomination',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newImplementation',
            type: 'address',
          },
        ],
        name: 'simulateUpgradeTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newImplementation',
            type: 'address',
          },
        ],
        name: 'upgradeTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'int256',
            name: 'deviation',
            type: 'int256',
          },
        ],
        name: 'DeviationToleranceExceeded',
        type: 'error',
      },
      {
        inputs: [],
        name: 'InvalidInputPrice',
        type: 'error',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'enum NodeDefinition.NodeType',
                name: 'nodeType',
                type: 'uint8',
              },
              {
                internalType: 'bytes',
                name: 'parameters',
                type: 'bytes',
              },
              {
                internalType: 'bytes32[]',
                name: 'parents',
                type: 'bytes32[]',
              },
            ],
            internalType: 'struct NodeDefinition.Data',
            name: 'nodeType',
            type: 'tuple',
          },
        ],
        name: 'InvalidNodeDefinition',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'string',
            name: 'parameter',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'reason',
            type: 'string',
          },
        ],
        name: 'InvalidParameter',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'int256',
            name: 'price',
            type: 'int256',
          },
        ],
        name: 'InvalidPrice',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'nodeId',
            type: 'bytes32',
          },
        ],
        name: 'NodeNotRegistered',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'oracleContract',
            type: 'address',
          },
          {
            internalType: 'bytes',
            name: 'oracleQuery',
            type: 'bytes',
          },
        ],
        name: 'OracleDataRequired',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt256ToUint256',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt56ToInt24',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToInt256',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToUint160',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint56ToInt56',
        type: 'error',
      },
      {
        inputs: [],
        name: 'StalenessToleranceExceeded',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'nodeId',
            type: 'bytes32',
          },
        ],
        name: 'UnprocessableNode',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'enum ReducerNode.Operations',
            name: 'operation',
            type: 'uint8',
          },
        ],
        name: 'UnsupportedOperation',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'bytes32',
            name: 'nodeId',
            type: 'bytes32',
          },
          {
            indexed: false,
            internalType: 'enum NodeDefinition.NodeType',
            name: 'nodeType',
            type: 'uint8',
          },
          {
            indexed: false,
            internalType: 'bytes',
            name: 'parameters',
            type: 'bytes',
          },
          {
            indexed: false,
            internalType: 'bytes32[]',
            name: 'parents',
            type: 'bytes32[]',
          },
        ],
        name: 'NodeRegistered',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'nodeId',
            type: 'bytes32',
          },
        ],
        name: 'getNode',
        outputs: [
          {
            components: [
              {
                internalType: 'enum NodeDefinition.NodeType',
                name: 'nodeType',
                type: 'uint8',
              },
              {
                internalType: 'bytes',
                name: 'parameters',
                type: 'bytes',
              },
              {
                internalType: 'bytes32[]',
                name: 'parents',
                type: 'bytes32[]',
              },
            ],
            internalType: 'struct NodeDefinition.Data',
            name: 'node',
            type: 'tuple',
          },
        ],
        stateMutability: 'pure',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'enum NodeDefinition.NodeType',
            name: 'nodeType',
            type: 'uint8',
          },
          {
            internalType: 'bytes',
            name: 'parameters',
            type: 'bytes',
          },
          {
            internalType: 'bytes32[]',
            name: 'parents',
            type: 'bytes32[]',
          },
        ],
        name: 'getNodeId',
        outputs: [
          {
            internalType: 'bytes32',
            name: 'nodeId',
            type: 'bytes32',
          },
        ],
        stateMutability: 'pure',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'nodeId',
            type: 'bytes32',
          },
        ],
        name: 'process',
        outputs: [
          {
            components: [
              {
                internalType: 'int256',
                name: 'price',
                type: 'int256',
              },
              {
                internalType: 'uint256',
                name: 'timestamp',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: '__slotAvailableForFutureUse1',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: '__slotAvailableForFutureUse2',
                type: 'uint256',
              },
            ],
            internalType: 'struct NodeOutput.Data',
            name: 'node',
            type: 'tuple',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'nodeId',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32[]',
            name: 'runtimeKeys',
            type: 'bytes32[]',
          },
          {
            internalType: 'bytes32[]',
            name: 'runtimeValues',
            type: 'bytes32[]',
          },
        ],
        name: 'processWithRuntime',
        outputs: [
          {
            components: [
              {
                internalType: 'int256',
                name: 'price',
                type: 'int256',
              },
              {
                internalType: 'uint256',
                name: 'timestamp',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: '__slotAvailableForFutureUse1',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: '__slotAvailableForFutureUse2',
                type: 'uint256',
              },
            ],
            internalType: 'struct NodeOutput.Data',
            name: 'node',
            type: 'tuple',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'enum NodeDefinition.NodeType',
            name: 'nodeType',
            type: 'uint8',
          },
          {
            internalType: 'bytes',
            name: 'parameters',
            type: 'bytes',
          },
          {
            internalType: 'bytes32[]',
            name: 'parents',
            type: 'bytes32[]',
          },
        ],
        name: 'registerNode',
        outputs: [
          {
            internalType: 'bytes32',
            name: 'nodeId',
            type: 'bytes32',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
  Proxy: {
    address: '0x11fF13A137688A9951C6390Cf845A7C09791eD10',
    abi: [
      {
        inputs: [
          {
            internalType: 'address',
            name: 'implementation',
            type: 'address',
          },
        ],
        name: 'ImplementationIsSterile',
        type: 'error',
      },
      {
        inputs: [],
        name: 'NoChange',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'contr',
            type: 'address',
          },
        ],
        name: 'NotAContract',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'NotNominated',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'Unauthorized',
        type: 'error',
      },
      {
        inputs: [],
        name: 'UpgradeSimulationFailed',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ZeroAddress',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'oldOwner',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnerChanged',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnerNominated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'self',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'implementation',
            type: 'address',
          },
        ],
        name: 'Upgraded',
        type: 'event',
      },
      {
        inputs: [],
        name: 'acceptOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getImplementation',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newNominatedOwner',
            type: 'address',
          },
        ],
        name: 'nominateNewOwner',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'nominatedOwner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'renounceNomination',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newImplementation',
            type: 'address',
          },
        ],
        name: 'simulateUpgradeTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newImplementation',
            type: 'address',
          },
        ],
        name: 'upgradeTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'int256',
            name: 'deviation',
            type: 'int256',
          },
        ],
        name: 'DeviationToleranceExceeded',
        type: 'error',
      },
      {
        inputs: [],
        name: 'InvalidInputPrice',
        type: 'error',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'enum NodeDefinition.NodeType',
                name: 'nodeType',
                type: 'uint8',
              },
              {
                internalType: 'bytes',
                name: 'parameters',
                type: 'bytes',
              },
              {
                internalType: 'bytes32[]',
                name: 'parents',
                type: 'bytes32[]',
              },
            ],
            internalType: 'struct NodeDefinition.Data',
            name: 'nodeType',
            type: 'tuple',
          },
        ],
        name: 'InvalidNodeDefinition',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'string',
            name: 'parameter',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'reason',
            type: 'string',
          },
        ],
        name: 'InvalidParameter',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'int256',
            name: 'price',
            type: 'int256',
          },
        ],
        name: 'InvalidPrice',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'nodeId',
            type: 'bytes32',
          },
        ],
        name: 'NodeNotRegistered',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'oracleContract',
            type: 'address',
          },
          {
            internalType: 'bytes',
            name: 'oracleQuery',
            type: 'bytes',
          },
        ],
        name: 'OracleDataRequired',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt256ToUint256',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt56ToInt24',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToInt256',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToUint160',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint56ToInt56',
        type: 'error',
      },
      {
        inputs: [],
        name: 'StalenessToleranceExceeded',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'nodeId',
            type: 'bytes32',
          },
        ],
        name: 'UnprocessableNode',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'enum ReducerNode.Operations',
            name: 'operation',
            type: 'uint8',
          },
        ],
        name: 'UnsupportedOperation',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'bytes32',
            name: 'nodeId',
            type: 'bytes32',
          },
          {
            indexed: false,
            internalType: 'enum NodeDefinition.NodeType',
            name: 'nodeType',
            type: 'uint8',
          },
          {
            indexed: false,
            internalType: 'bytes',
            name: 'parameters',
            type: 'bytes',
          },
          {
            indexed: false,
            internalType: 'bytes32[]',
            name: 'parents',
            type: 'bytes32[]',
          },
        ],
        name: 'NodeRegistered',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'nodeId',
            type: 'bytes32',
          },
        ],
        name: 'getNode',
        outputs: [
          {
            components: [
              {
                internalType: 'enum NodeDefinition.NodeType',
                name: 'nodeType',
                type: 'uint8',
              },
              {
                internalType: 'bytes',
                name: 'parameters',
                type: 'bytes',
              },
              {
                internalType: 'bytes32[]',
                name: 'parents',
                type: 'bytes32[]',
              },
            ],
            internalType: 'struct NodeDefinition.Data',
            name: 'node',
            type: 'tuple',
          },
        ],
        stateMutability: 'pure',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'enum NodeDefinition.NodeType',
            name: 'nodeType',
            type: 'uint8',
          },
          {
            internalType: 'bytes',
            name: 'parameters',
            type: 'bytes',
          },
          {
            internalType: 'bytes32[]',
            name: 'parents',
            type: 'bytes32[]',
          },
        ],
        name: 'getNodeId',
        outputs: [
          {
            internalType: 'bytes32',
            name: 'nodeId',
            type: 'bytes32',
          },
        ],
        stateMutability: 'pure',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'nodeId',
            type: 'bytes32',
          },
        ],
        name: 'process',
        outputs: [
          {
            components: [
              {
                internalType: 'int256',
                name: 'price',
                type: 'int256',
              },
              {
                internalType: 'uint256',
                name: 'timestamp',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: '__slotAvailableForFutureUse1',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: '__slotAvailableForFutureUse2',
                type: 'uint256',
              },
            ],
            internalType: 'struct NodeOutput.Data',
            name: 'node',
            type: 'tuple',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'nodeId',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32[]',
            name: 'runtimeKeys',
            type: 'bytes32[]',
          },
          {
            internalType: 'bytes32[]',
            name: 'runtimeValues',
            type: 'bytes32[]',
          },
        ],
        name: 'processWithRuntime',
        outputs: [
          {
            components: [
              {
                internalType: 'int256',
                name: 'price',
                type: 'int256',
              },
              {
                internalType: 'uint256',
                name: 'timestamp',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: '__slotAvailableForFutureUse1',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: '__slotAvailableForFutureUse2',
                type: 'uint256',
              },
            ],
            internalType: 'struct NodeOutput.Data',
            name: 'node',
            type: 'tuple',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'enum NodeDefinition.NodeType',
            name: 'nodeType',
            type: 'uint8',
          },
          {
            internalType: 'bytes',
            name: 'parameters',
            type: 'bytes',
          },
          {
            internalType: 'bytes32[]',
            name: 'parents',
            type: 'bytes32[]',
          },
        ],
        name: 'registerNode',
        outputs: [
          {
            internalType: 'bytes32',
            name: 'nodeId',
            type: 'bytes32',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
  MarginModule: {
    address: '0xEEf7a908DA476BbD2b1B0B329A93D048A39D1902',
    abi: [
      {
        inputs: [
          {
            internalType: 'address',
            name: '_synthetix',
            type: 'address',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
        ],
        name: 'AccountNotFound',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ArrayLengthMismatch',
        type: 'error',
      },
      {
        inputs: [],
        name: 'CanLiquidatePosition',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'DebtFound',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'which',
            type: 'bytes32',
          },
        ],
        name: 'FeatureUnavailable',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'collateralAddress',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'available',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
        ],
        name: 'InsufficientCollateral',
        type: 'error',
      },
      {
        inputs: [],
        name: 'InsufficientMargin',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'synthetixCore',
            type: 'address',
          },
        ],
        name: 'InvalidCoreAddress',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'distributor',
            type: 'address',
          },
        ],
        name: 'InvalidRewardDistributor',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'MarketNotFound',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'max',
            type: 'uint256',
          },
        ],
        name: 'MaxCollateralExceeded',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'collateralAddress',
            type: 'address',
          },
        ],
        name: 'MissingRequiredCollateral',
        type: 'error',
      },
      {
        inputs: [],
        name: 'NilCollateral',
        type: 'error',
      },
      {
        inputs: [],
        name: 'NoDebt',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OrderFound',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt128ToUint128',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt256ToInt128',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt256ToUint256',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint128ToInt128',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToInt256',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToUint128',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToUint64',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
        ],
        name: 'PermissionDenied',
        type: 'error',
      },
      {
        inputs: [],
        name: 'PositionFlagged',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'PositionFound',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'Unauthorized',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'collateralAddress',
            type: 'address',
          },
        ],
        name: 'UnsupportedCollateral',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ZeroAmount',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'oldDebt',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'newDebt',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'paidFromUsdCollateral',
            type: 'uint128',
          },
        ],
        name: 'DebtPaid',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'skew',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'fundingRate',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'fundingVelocity',
            type: 'int128',
          },
        ],
        name: 'FundingRecomputed',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'collaterals',
            type: 'uint256',
          },
        ],
        name: 'MarginCollateralConfigured',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'collateralAddress',
            type: 'address',
          },
        ],
        name: 'MarginDeposit',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'collateralAddress',
            type: 'address',
          },
        ],
        name: 'MarginWithdraw',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'size',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'skew',
            type: 'int128',
          },
        ],
        name: 'MarketSizeUpdated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'keeperFee',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint64',
            name: 'commitmentTime',
            type: 'uint64',
          },
        ],
        name: 'OrderCanceled',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'skew',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'utilizationRate',
            type: 'uint128',
          },
        ],
        name: 'UtilizationRecomputed',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'collateralAddress',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'getDiscountedCollateralPrice',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getMarginCollateralConfiguration',
        outputs: [
          {
            components: [
              {
                internalType: 'address',
                name: 'collateralAddress',
                type: 'address',
              },
              {
                internalType: 'bytes32',
                name: 'oracleNodeId',
                type: 'bytes32',
              },
              {
                internalType: 'uint128',
                name: 'maxAllowable',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'skewScale',
                type: 'uint128',
              },
              {
                internalType: 'address',
                name: 'rewardDistributor',
                type: 'address',
              },
            ],
            internalType: 'struct IMarginModule.ConfiguredCollateral[]',
            name: '',
            type: 'tuple[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getMarginDigest',
        outputs: [
          {
            components: [
              {
                internalType: 'uint256',
                name: 'discountedMarginUsd',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'marginUsd',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'discountedCollateralUsd',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'collateralUsd',
                type: 'uint256',
              },
            ],
            internalType: 'struct Margin.MarginValues',
            name: '',
            type: 'tuple',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getMarginLiquidationOnlyReward',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'uint256',
            name: 'oraclePrice',
            type: 'uint256',
          },
        ],
        name: 'getNetAssetValue',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getWithdrawableMargin',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralAddress',
            type: 'address',
          },
          {
            internalType: 'int256',
            name: 'amountDelta',
            type: 'int256',
          },
        ],
        name: 'modifyCollateral',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'amount',
            type: 'uint128',
          },
        ],
        name: 'payDebt',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'collateralAddress',
            type: 'address',
          },
          {
            internalType: 'uint128',
            name: 'maxAllowable',
            type: 'uint128',
          },
        ],
        name: 'setCollateralMaxAllowable',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address[]',
            name: 'collateralAddresses',
            type: 'address[]',
          },
          {
            internalType: 'bytes32[]',
            name: 'oracleNodeIds',
            type: 'bytes32[]',
          },
          {
            internalType: 'uint128[]',
            name: 'maxAllowables',
            type: 'uint128[]',
          },
          {
            internalType: 'uint128[]',
            name: 'skewScales',
            type: 'uint128[]',
          },
          {
            internalType: 'address[]',
            name: 'rewardDistributors',
            type: 'address[]',
          },
        ],
        name: 'setMarginCollateralConfiguration',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'withdrawAllCollateral',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
  OrderModule: {
    address: '0x8a4a936B6706a58925695370e16Ce71A0C6B005F',
    abi: [
      {
        inputs: [
          {
            internalType: 'address',
            name: '_synthetix',
            type: 'address',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
        ],
        name: 'AccountNotFound',
        type: 'error',
      },
      {
        inputs: [],
        name: 'CanLiquidatePosition',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'which',
            type: 'bytes32',
          },
        ],
        name: 'FeatureUnavailable',
        type: 'error',
      },
      {
        inputs: [],
        name: 'InsufficientLiquidity',
        type: 'error',
      },
      {
        inputs: [],
        name: 'InsufficientMargin',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'synthetixCore',
            type: 'address',
          },
        ],
        name: 'InvalidCoreAddress',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'hook',
            type: 'address',
          },
        ],
        name: 'InvalidHook',
        type: 'error',
      },
      {
        inputs: [],
        name: 'InvalidPrice',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'MarketNotFound',
        type: 'error',
      },
      {
        inputs: [],
        name: 'MaxHooksExceeded',
        type: 'error',
      },
      {
        inputs: [],
        name: 'MaxMarketSizeExceeded',
        type: 'error',
      },
      {
        inputs: [],
        name: 'NilOrder',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OrderFound',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OrderNotFound',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OrderNotReady',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OrderNotStale',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OrderStale',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt128ToUint128',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt256ToInt128',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt256ToUint256',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint128ToInt128',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToInt256',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToUint128',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToUint64',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
        ],
        name: 'PermissionDenied',
        type: 'error',
      },
      {
        inputs: [],
        name: 'PositionFlagged',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'int128',
            name: 'sizeDelta',
            type: 'int128',
          },
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'limitPrice',
            type: 'uint256',
          },
        ],
        name: 'PriceToleranceExceeded',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'int128',
            name: 'sizeDelta',
            type: 'int128',
          },
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'limitPrice',
            type: 'uint256',
          },
        ],
        name: 'PriceToleranceNotExceeded',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'skew',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'fundingRate',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'fundingVelocity',
            type: 'int128',
          },
        ],
        name: 'FundingRecomputed',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'size',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'skew',
            type: 'int128',
          },
        ],
        name: 'MarketSizeUpdated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'keeperFee',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint64',
            name: 'commitmentTime',
            type: 'uint64',
          },
        ],
        name: 'OrderCanceled',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint64',
            name: 'commitmentTime',
            type: 'uint64',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'sizeDelta',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'estimatedOrderFee',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'estimatedKeeperFee',
            type: 'uint256',
          },
        ],
        name: 'OrderCommitted',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint64',
            name: 'settlementTime',
            type: 'uint64',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'sizeDelta',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'orderFee',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'keeperFee',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'accruedFunding',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'accruedUtilization',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'int256',
            name: 'pnl',
            type: 'int256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'fillPrice',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'accountDebt',
            type: 'uint128',
          },
        ],
        name: 'OrderSettled',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'hook',
            type: 'address',
          },
        ],
        name: 'OrderSettlementHookExecuted',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'skew',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'utilizationRate',
            type: 'uint128',
          },
        ],
        name: 'UtilizationRecomputed',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'bytes',
            name: 'priceUpdateData',
            type: 'bytes',
          },
        ],
        name: 'cancelOrder',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'cancelStaleOrder',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'int128',
            name: 'sizeDelta',
            type: 'int128',
          },
          {
            internalType: 'uint256',
            name: 'limitPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint128',
            name: 'keeperFeeBufferUsd',
            type: 'uint128',
          },
          {
            internalType: 'address[]',
            name: 'hooks',
            type: 'address[]',
          },
        ],
        name: 'commitOrder',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'int128',
            name: 'size',
            type: 'int128',
          },
        ],
        name: 'getFillPrice',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getOraclePrice',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getOrderDigest',
        outputs: [
          {
            components: [
              {
                internalType: 'int128',
                name: 'sizeDelta',
                type: 'int128',
              },
              {
                internalType: 'uint64',
                name: 'commitmentTime',
                type: 'uint64',
              },
              {
                internalType: 'uint256',
                name: 'limitPrice',
                type: 'uint256',
              },
              {
                internalType: 'uint128',
                name: 'keeperFeeBufferUsd',
                type: 'uint128',
              },
              {
                internalType: 'address[]',
                name: 'hooks',
                type: 'address[]',
              },
              {
                internalType: 'bool',
                name: 'isStale',
                type: 'bool',
              },
              {
                internalType: 'bool',
                name: 'isReady',
                type: 'bool',
              },
            ],
            internalType: 'struct IOrderModule.OrderDigest',
            name: '',
            type: 'tuple',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'int128',
            name: 'sizeDelta',
            type: 'int128',
          },
          {
            internalType: 'uint128',
            name: 'keeperFeeBufferUsd',
            type: 'uint128',
          },
        ],
        name: 'getOrderFees',
        outputs: [
          {
            internalType: 'uint256',
            name: 'orderFee',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'keeperFee',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'bytes',
            name: 'priceUpdateData',
            type: 'bytes',
          },
        ],
        name: 'settleOrder',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
    ],
  },
  PerpAccountModule: {
    address: '0xC7f2513d94aC7eE950b5a8c92C385832c93016FA',
    abi: [
      {
        inputs: [
          {
            internalType: 'address',
            name: '_synthetix',
            type: 'address',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
        ],
        name: 'AccountNotFound',
        type: 'error',
      },
      {
        inputs: [],
        name: 'AccountSplitProportionTooLarge',
        type: 'error',
      },
      {
        inputs: [],
        name: 'CanLiquidatePosition',
        type: 'error',
      },
      {
        inputs: [],
        name: 'CollateralFound',
        type: 'error',
      },
      {
        inputs: [],
        name: 'DuplicateAccountIds',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'which',
            type: 'bytes32',
          },
        ],
        name: 'FeatureUnavailable',
        type: 'error',
      },
      {
        inputs: [],
        name: 'InsufficientMargin',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'synthetixCore',
            type: 'address',
          },
        ],
        name: 'InvalidCoreAddress',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'hook',
            type: 'address',
          },
        ],
        name: 'InvalidHook',
        type: 'error',
      },
      {
        inputs: [],
        name: 'InvalidPositionSide',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'MarketNotFound',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OrderFound',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt128ToUint128',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt256ToInt128',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt256ToUint256',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint128ToInt128',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToInt256',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToUint128',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
        ],
        name: 'PermissionDenied',
        type: 'error',
      },
      {
        inputs: [],
        name: 'PositionFlagged',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'PositionFound',
        type: 'error',
      },
      {
        inputs: [],
        name: 'PositionNotFound',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ZeroProportion',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'fromId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'toId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'AccountSplit',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'fromId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'toId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'AccountsMerged',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getAccountDigest',
        outputs: [
          {
            components: [
              {
                components: [
                  {
                    internalType: 'address',
                    name: 'collateralAddress',
                    type: 'address',
                  },
                  {
                    internalType: 'uint256',
                    name: 'available',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'oraclePrice',
                    type: 'uint256',
                  },
                ],
                internalType: 'struct IPerpAccountModule.DepositedCollateral[]',
                name: 'depositedCollaterals',
                type: 'tuple[]',
              },
              {
                internalType: 'uint256',
                name: 'collateralUsd',
                type: 'uint256',
              },
              {
                internalType: 'uint128',
                name: 'debtUsd',
                type: 'uint128',
              },
              {
                components: [
                  {
                    internalType: 'uint128',
                    name: 'accountId',
                    type: 'uint128',
                  },
                  {
                    internalType: 'uint128',
                    name: 'marketId',
                    type: 'uint128',
                  },
                  {
                    internalType: 'uint256',
                    name: 'remainingMarginUsd',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'healthFactor',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'notionalValueUsd',
                    type: 'uint256',
                  },
                  {
                    internalType: 'int256',
                    name: 'pnl',
                    type: 'int256',
                  },
                  {
                    internalType: 'int128',
                    name: 'accruedFunding',
                    type: 'int128',
                  },
                  {
                    internalType: 'uint128',
                    name: 'accruedUtilization',
                    type: 'uint128',
                  },
                  {
                    internalType: 'uint256',
                    name: 'entryPythPrice',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'entryPrice',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'oraclePrice',
                    type: 'uint256',
                  },
                  {
                    internalType: 'int128',
                    name: 'size',
                    type: 'int128',
                  },
                  {
                    internalType: 'uint256',
                    name: 'im',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'mm',
                    type: 'uint256',
                  },
                ],
                internalType: 'struct IPerpAccountModule.PositionDigest',
                name: 'position',
                type: 'tuple',
              },
            ],
            internalType: 'struct IPerpAccountModule.AccountDigest',
            name: '',
            type: 'tuple',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getPositionDigest',
        outputs: [
          {
            components: [
              {
                internalType: 'uint128',
                name: 'accountId',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'marketId',
                type: 'uint128',
              },
              {
                internalType: 'uint256',
                name: 'remainingMarginUsd',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'healthFactor',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'notionalValueUsd',
                type: 'uint256',
              },
              {
                internalType: 'int256',
                name: 'pnl',
                type: 'int256',
              },
              {
                internalType: 'int128',
                name: 'accruedFunding',
                type: 'int128',
              },
              {
                internalType: 'uint128',
                name: 'accruedUtilization',
                type: 'uint128',
              },
              {
                internalType: 'uint256',
                name: 'entryPythPrice',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'entryPrice',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'oraclePrice',
                type: 'uint256',
              },
              {
                internalType: 'int128',
                name: 'size',
                type: 'int128',
              },
              {
                internalType: 'uint256',
                name: 'im',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'mm',
                type: 'uint256',
              },
            ],
            internalType: 'struct IPerpAccountModule.PositionDigest',
            name: '',
            type: 'tuple',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'fromId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'toId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'mergeAccounts',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'fromId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'toId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'proportion',
            type: 'uint128',
          },
        ],
        name: 'splitAccount',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
  PerpMarketFactoryModule: {
    address: '0xBbcfE67866eCE5Ff8516070C32F1D97fc3A14d30',
    abi: [
      {
        inputs: [
          {
            internalType: 'address',
            name: '_synthetix',
            type: 'address',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'synthetixCore',
            type: 'address',
          },
        ],
        name: 'InvalidCoreAddress',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'MarketNotFound',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt256ToInt128',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt256ToUint256',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint128ToInt128',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToInt256',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToUint128',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToUint64',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'Unauthorized',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'skew',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'fundingRate',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'fundingVelocity',
            type: 'int128',
          },
        ],
        name: 'FundingRecomputed',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'id',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'bytes32',
            name: 'name',
            type: 'bytes32',
          },
        ],
        name: 'MarketCreated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'size',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'skew',
            type: 'int128',
          },
        ],
        name: 'MarketSizeUpdated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'keeperFee',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint64',
            name: 'commitmentTime',
            type: 'uint64',
          },
        ],
        name: 'OrderCanceled',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'skew',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'utilizationRate',
            type: 'uint128',
          },
        ],
        name: 'UtilizationRecomputed',
        type: 'event',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'bytes32',
                name: 'name',
                type: 'bytes32',
              },
            ],
            internalType: 'struct IPerpMarketFactoryModule.CreatePerpMarketParameters',
            name: 'data',
            type: 'tuple',
          },
        ],
        name: 'createMarket',
        outputs: [
          {
            internalType: 'uint128',
            name: '',
            type: 'uint128',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getActiveMarketIds',
        outputs: [
          {
            internalType: 'uint128[]',
            name: '',
            type: 'uint128[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getMarketDigest',
        outputs: [
          {
            components: [
              {
                components: [
                  {
                    internalType: 'address',
                    name: 'collateralAddress',
                    type: 'address',
                  },
                  {
                    internalType: 'uint256',
                    name: 'available',
                    type: 'uint256',
                  },
                ],
                internalType: 'struct IPerpMarketFactoryModule.DepositedCollateral[]',
                name: 'depositedCollaterals',
                type: 'tuple[]',
              },
              {
                internalType: 'bytes32',
                name: 'name',
                type: 'bytes32',
              },
              {
                internalType: 'int128',
                name: 'skew',
                type: 'int128',
              },
              {
                internalType: 'uint128',
                name: 'size',
                type: 'uint128',
              },
              {
                internalType: 'uint256',
                name: 'oraclePrice',
                type: 'uint256',
              },
              {
                internalType: 'int128',
                name: 'fundingVelocity',
                type: 'int128',
              },
              {
                internalType: 'int128',
                name: 'fundingRate',
                type: 'int128',
              },
              {
                internalType: 'uint128',
                name: 'utilizationRate',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'remainingLiquidatableSizeCapacity',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'lastLiquidationTime',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'totalTraderDebtUsd',
                type: 'uint128',
              },
              {
                internalType: 'uint256',
                name: 'totalCollateralValueUsd',
                type: 'uint256',
              },
              {
                internalType: 'int128',
                name: 'debtCorrection',
                type: 'int128',
              },
            ],
            internalType: 'struct IPerpMarketFactoryModule.MarketDigest',
            name: '',
            type: 'tuple',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getUtilizationDigest',
        outputs: [
          {
            components: [
              {
                internalType: 'uint128',
                name: 'lastComputedUtilizationRate',
                type: 'uint128',
              },
              {
                internalType: 'uint64',
                name: 'lastComputedTimestamp',
                type: 'uint64',
              },
              {
                internalType: 'uint128',
                name: 'currentUtilizationRate',
                type: 'uint128',
              },
              {
                internalType: 'uint256',
                name: 'utilization',
                type: 'uint256',
              },
            ],
            internalType: 'struct IPerpMarketFactoryModule.UtilizationDigest',
            name: '',
            type: 'tuple',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'minimumCredit',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: '',
            type: 'uint128',
          },
        ],
        name: 'name',
        outputs: [
          {
            internalType: 'string',
            name: '',
            type: 'string',
          },
        ],
        stateMutability: 'pure',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'recomputeFunding',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'recomputeUtilization',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'reportedDebt',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'ethOracleNodeId',
            type: 'bytes32',
          },
        ],
        name: 'setEthOracleNodeId',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'contract IPyth',
            name: 'pyth',
            type: 'address',
          },
        ],
        name: 'setPyth',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'implementation',
            type: 'address',
          },
        ],
        name: 'setRewardDistributorImplementation',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes4',
            name: 'interfaceId',
            type: 'bytes4',
          },
        ],
        name: 'supportsInterface',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
    ],
  },
  PerpRewardDistributorFactoryModule: {
    address: '0x2B394b2c8328262270B038C1B66aCA6369205365',
    abi: [
      {
        inputs: [
          {
            internalType: 'address',
            name: '_synthetix',
            type: 'address',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'synthetixCore',
            type: 'address',
          },
        ],
        name: 'InvalidCoreAddress',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'Unauthorized',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ZeroAddress',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ZeroLength',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'distributor',
            type: 'address',
          },
        ],
        name: 'RewardDistributorCreated',
        type: 'event',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'uint128',
                name: 'poolId',
                type: 'uint128',
              },
              {
                internalType: 'address[]',
                name: 'collateralTypes',
                type: 'address[]',
              },
              {
                internalType: 'string',
                name: 'name',
                type: 'string',
              },
              {
                internalType: 'address',
                name: 'token',
                type: 'address',
              },
            ],
            internalType:
              'struct IPerpRewardDistributorFactoryModule.CreatePerpRewardDistributorParameters',
            name: 'data',
            type: 'tuple',
          },
        ],
        name: 'createRewardDistributor',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
  BfpMarketRouter: {
    address: '0xc0ad56285e1451b38fb0e3b99d679bd90dd659c2',
    abi: [
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'which',
            type: 'bytes32',
          },
        ],
        name: 'FeatureUnavailable',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
        ],
        name: 'InvalidAccountId',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
        ],
        name: 'InvalidPermission',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'origin',
            type: 'address',
          },
        ],
        name: 'OnlyAccountTokenProxy',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
        ],
        name: 'PermissionDenied',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
        ],
        name: 'PermissionNotGranted',
        type: 'error',
      },
      {
        inputs: [],
        name: 'PositionOutOfBounds',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ValueAlreadyInSet',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ValueNotInSet',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ZeroAddress',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
        ],
        name: 'AccountCreated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'PermissionGranted',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'PermissionRevoked',
        type: 'event',
      },
      {
        inputs: [],
        name: 'createAccount',
        outputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'requestedAccountId',
            type: 'uint128',
          },
        ],
        name: 'createAccount',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
        ],
        name: 'getAccountLastInteraction',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
        ],
        name: 'getAccountOwner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
        ],
        name: 'getAccountPermissions',
        outputs: [
          {
            components: [
              {
                internalType: 'address',
                name: 'user',
                type: 'address',
              },
              {
                internalType: 'bytes32[]',
                name: 'permissions',
                type: 'bytes32[]',
              },
            ],
            internalType: 'struct IAccountModule.AccountPermissions[]',
            name: 'accountPerms',
            type: 'tuple[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getAccountTokenAddress',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
        ],
        name: 'grantPermission',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
        ],
        name: 'hasPermission',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
        ],
        name: 'isAuthorized',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
        ],
        name: 'notifyAccountTransfer',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
        ],
        name: 'renouncePermission',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
        ],
        name: 'revokePermission',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'expected',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'actual',
            type: 'bytes32',
          },
        ],
        name: 'MismatchAssociatedSystemKind',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
        ],
        name: 'MissingAssociatedSystem',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'Unauthorized',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'kind',
            type: 'bytes32',
          },
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'proxy',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'impl',
            type: 'address',
          },
        ],
        name: 'AssociatedSystemSet',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
        ],
        name: 'getAssociatedSystem',
        outputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
          {
            internalType: 'bytes32',
            name: 'kind',
            type: 'bytes32',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'symbol',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'uri',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 'impl',
            type: 'address',
          },
        ],
        name: 'initOrUpgradeNft',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'symbol',
            type: 'string',
          },
          {
            internalType: 'uint8',
            name: 'decimals',
            type: 'uint8',
          },
          {
            internalType: 'address',
            name: 'impl',
            type: 'address',
          },
        ],
        name: 'initOrUpgradeToken',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'endpoint',
            type: 'address',
          },
        ],
        name: 'registerUnmanagedSystem',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'implementation',
            type: 'address',
          },
        ],
        name: 'ImplementationIsSterile',
        type: 'error',
      },
      {
        inputs: [],
        name: 'NoChange',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'contr',
            type: 'address',
          },
        ],
        name: 'NotAContract',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'NotNominated',
        type: 'error',
      },
      {
        inputs: [],
        name: 'UpgradeSimulationFailed',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'oldOwner',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnerChanged',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnerNominated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'self',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'implementation',
            type: 'address',
          },
        ],
        name: 'Upgraded',
        type: 'event',
      },
      {
        inputs: [],
        name: 'acceptOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getImplementation',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newNominatedOwner',
            type: 'address',
          },
        ],
        name: 'nominateNewOwner',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'nominatedOwner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'renounceNomination',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newImplementation',
            type: 'address',
          },
        ],
        name: 'simulateUpgradeTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newImplementation',
            type: 'address',
          },
        ],
        name: 'upgradeTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            indexed: false,
            internalType: 'bool',
            name: 'allowAll',
            type: 'bool',
          },
        ],
        name: 'FeatureFlagAllowAllSet',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'account',
            type: 'address',
          },
        ],
        name: 'FeatureFlagAllowlistAdded',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'account',
            type: 'address',
          },
        ],
        name: 'FeatureFlagAllowlistRemoved',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            indexed: false,
            internalType: 'address[]',
            name: 'deniers',
            type: 'address[]',
          },
        ],
        name: 'FeatureFlagDeniersReset',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            indexed: false,
            internalType: 'bool',
            name: 'denyAll',
            type: 'bool',
          },
        ],
        name: 'FeatureFlagDenyAllSet',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'bool',
            name: 'suspended',
            type: 'bool',
          },
        ],
        name: 'PerpMarketSuspended',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'account',
            type: 'address',
          },
        ],
        name: 'addToFeatureFlagAllowlist',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'enableAllFeatures',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
        ],
        name: 'getDeniers',
        outputs: [
          {
            internalType: 'address[]',
            name: '',
            type: 'address[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
        ],
        name: 'getFeatureFlagAllowAll',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
        ],
        name: 'getFeatureFlagAllowlist',
        outputs: [
          {
            internalType: 'address[]',
            name: '',
            type: 'address[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
        ],
        name: 'getFeatureFlagDenyAll',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'account',
            type: 'address',
          },
        ],
        name: 'isFeatureAllowed',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'account',
            type: 'address',
          },
        ],
        name: 'removeFromFeatureFlagAllowlist',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            internalType: 'address[]',
            name: 'deniers',
            type: 'address[]',
          },
        ],
        name: 'setDeniers',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            internalType: 'bool',
            name: 'allowAll',
            type: 'bool',
          },
        ],
        name: 'setFeatureFlagAllowAll',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            internalType: 'bool',
            name: 'denyAll',
            type: 'bool',
          },
        ],
        name: 'setFeatureFlagDenyAll',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'suspendAllFeatures',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_synthetix',
            type: 'address',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'synthetixCore',
            type: 'address',
          },
        ],
        name: 'InvalidCoreAddress',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'MarketNotFound',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt256ToInt128',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt256ToUint256',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint128ToInt128',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToInt256',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToUint128',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToUint64',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'skew',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'fundingRate',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'fundingVelocity',
            type: 'int128',
          },
        ],
        name: 'FundingRecomputed',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'id',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'bytes32',
            name: 'name',
            type: 'bytes32',
          },
        ],
        name: 'MarketCreated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'size',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'skew',
            type: 'int128',
          },
        ],
        name: 'MarketSizeUpdated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'keeperFee',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint64',
            name: 'commitmentTime',
            type: 'uint64',
          },
        ],
        name: 'OrderCanceled',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'skew',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'utilizationRate',
            type: 'uint128',
          },
        ],
        name: 'UtilizationRecomputed',
        type: 'event',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'bytes32',
                name: 'name',
                type: 'bytes32',
              },
            ],
            internalType: 'struct IPerpMarketFactoryModule.CreatePerpMarketParameters',
            name: 'data',
            type: 'tuple',
          },
        ],
        name: 'createMarket',
        outputs: [
          {
            internalType: 'uint128',
            name: '',
            type: 'uint128',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getActiveMarketIds',
        outputs: [
          {
            internalType: 'uint128[]',
            name: '',
            type: 'uint128[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getMarketDigest',
        outputs: [
          {
            components: [
              {
                components: [
                  {
                    internalType: 'address',
                    name: 'collateralAddress',
                    type: 'address',
                  },
                  {
                    internalType: 'uint256',
                    name: 'available',
                    type: 'uint256',
                  },
                ],
                internalType: 'struct IPerpMarketFactoryModule.DepositedCollateral[]',
                name: 'depositedCollaterals',
                type: 'tuple[]',
              },
              {
                internalType: 'bytes32',
                name: 'name',
                type: 'bytes32',
              },
              {
                internalType: 'int128',
                name: 'skew',
                type: 'int128',
              },
              {
                internalType: 'uint128',
                name: 'size',
                type: 'uint128',
              },
              {
                internalType: 'uint256',
                name: 'oraclePrice',
                type: 'uint256',
              },
              {
                internalType: 'int128',
                name: 'fundingVelocity',
                type: 'int128',
              },
              {
                internalType: 'int128',
                name: 'fundingRate',
                type: 'int128',
              },
              {
                internalType: 'uint128',
                name: 'utilizationRate',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'remainingLiquidatableSizeCapacity',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'lastLiquidationTime',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'totalTraderDebtUsd',
                type: 'uint128',
              },
              {
                internalType: 'uint256',
                name: 'totalCollateralValueUsd',
                type: 'uint256',
              },
              {
                internalType: 'int128',
                name: 'debtCorrection',
                type: 'int128',
              },
            ],
            internalType: 'struct IPerpMarketFactoryModule.MarketDigest',
            name: '',
            type: 'tuple',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getUtilizationDigest',
        outputs: [
          {
            components: [
              {
                internalType: 'uint128',
                name: 'lastComputedUtilizationRate',
                type: 'uint128',
              },
              {
                internalType: 'uint64',
                name: 'lastComputedTimestamp',
                type: 'uint64',
              },
              {
                internalType: 'uint128',
                name: 'currentUtilizationRate',
                type: 'uint128',
              },
              {
                internalType: 'uint256',
                name: 'utilization',
                type: 'uint256',
              },
            ],
            internalType: 'struct IPerpMarketFactoryModule.UtilizationDigest',
            name: '',
            type: 'tuple',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'minimumCredit',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: '',
            type: 'uint128',
          },
        ],
        name: 'name',
        outputs: [
          {
            internalType: 'string',
            name: '',
            type: 'string',
          },
        ],
        stateMutability: 'pure',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'recomputeFunding',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'recomputeUtilization',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'reportedDebt',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'ethOracleNodeId',
            type: 'bytes32',
          },
        ],
        name: 'setEthOracleNodeId',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'contract IPyth',
            name: 'pyth',
            type: 'address',
          },
        ],
        name: 'setPyth',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'implementation',
            type: 'address',
          },
        ],
        name: 'setRewardDistributorImplementation',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes4',
            name: 'interfaceId',
            type: 'bytes4',
          },
        ],
        name: 'supportsInterface',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'string',
            name: 'parameter',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'reason',
            type: 'string',
          },
        ],
        name: 'InvalidParameter',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
        ],
        name: 'GlobalMarketConfigured',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
        ],
        name: 'MarketConfigured',
        type: 'event',
      },
      {
        inputs: [],
        name: 'getMarketConfiguration',
        outputs: [
          {
            components: [
              {
                internalType: 'contract IPyth',
                name: 'pyth',
                type: 'address',
              },
              {
                internalType: 'bytes32',
                name: 'ethOracleNodeId',
                type: 'bytes32',
              },
              {
                internalType: 'address',
                name: 'rewardDistributorImplementation',
                type: 'address',
              },
              {
                internalType: 'uint64',
                name: 'pythPublishTimeMin',
                type: 'uint64',
              },
              {
                internalType: 'uint64',
                name: 'pythPublishTimeMax',
                type: 'uint64',
              },
              {
                internalType: 'uint64',
                name: 'minOrderAge',
                type: 'uint64',
              },
              {
                internalType: 'uint64',
                name: 'maxOrderAge',
                type: 'uint64',
              },
              {
                internalType: 'uint256',
                name: 'minKeeperFeeUsd',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'maxKeeperFeeUsd',
                type: 'uint256',
              },
              {
                internalType: 'uint128',
                name: 'keeperProfitMarginUsd',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'keeperProfitMarginPercent',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'keeperSettlementGasUnits',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'keeperCancellationGasUnits',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'keeperLiquidationGasUnits',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'keeperFlagGasUnits',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'keeperLiquidateMarginGasUnits',
                type: 'uint128',
              },
              {
                internalType: 'address',
                name: 'keeperLiquidationEndorsed',
                type: 'address',
              },
              {
                internalType: 'uint128',
                name: 'collateralDiscountScalar',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'minCollateralDiscount',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'maxCollateralDiscount',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'utilizationBreakpointPercent',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'lowUtilizationSlopePercent',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'highUtilizationSlopePercent',
                type: 'uint128',
              },
            ],
            internalType: 'struct PerpMarketConfiguration.GlobalData',
            name: '',
            type: 'tuple',
          },
        ],
        stateMutability: 'pure',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getMarketConfigurationById',
        outputs: [
          {
            components: [
              {
                internalType: 'bytes32',
                name: 'oracleNodeId',
                type: 'bytes32',
              },
              {
                internalType: 'bytes32',
                name: 'pythPriceFeedId',
                type: 'bytes32',
              },
              {
                internalType: 'uint128',
                name: 'makerFee',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'takerFee',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'maxMarketSize',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'maxFundingVelocity',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'skewScale',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'fundingVelocityClamp',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'minCreditPercent',
                type: 'uint128',
              },
              {
                internalType: 'uint256',
                name: 'minMarginUsd',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'minMarginRatio',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'incrementalMarginScalar',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'maintenanceMarginScalar',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'maxInitialMarginRatio',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'liquidationRewardPercent',
                type: 'uint256',
              },
              {
                internalType: 'uint128',
                name: 'liquidationLimitScalar',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'liquidationWindowDuration',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'liquidationMaxPd',
                type: 'uint128',
              },
            ],
            internalType: 'struct PerpMarketConfiguration.Data',
            name: '',
            type: 'tuple',
          },
        ],
        stateMutability: 'pure',
        type: 'function',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'uint64',
                name: 'pythPublishTimeMin',
                type: 'uint64',
              },
              {
                internalType: 'uint64',
                name: 'pythPublishTimeMax',
                type: 'uint64',
              },
              {
                internalType: 'uint64',
                name: 'minOrderAge',
                type: 'uint64',
              },
              {
                internalType: 'uint64',
                name: 'maxOrderAge',
                type: 'uint64',
              },
              {
                internalType: 'uint256',
                name: 'minKeeperFeeUsd',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'maxKeeperFeeUsd',
                type: 'uint256',
              },
              {
                internalType: 'uint128',
                name: 'keeperProfitMarginPercent',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'keeperProfitMarginUsd',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'keeperSettlementGasUnits',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'keeperCancellationGasUnits',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'keeperLiquidationGasUnits',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'keeperFlagGasUnits',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'keeperLiquidateMarginGasUnits',
                type: 'uint128',
              },
              {
                internalType: 'address',
                name: 'keeperLiquidationEndorsed',
                type: 'address',
              },
              {
                internalType: 'uint128',
                name: 'collateralDiscountScalar',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'minCollateralDiscount',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'maxCollateralDiscount',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'utilizationBreakpointPercent',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'lowUtilizationSlopePercent',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'highUtilizationSlopePercent',
                type: 'uint128',
              },
            ],
            internalType: 'struct IMarketConfigurationModule.GlobalMarketConfigureParameters',
            name: 'data',
            type: 'tuple',
          },
        ],
        name: 'setMarketConfiguration',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'uint128',
                name: 'marketId',
                type: 'uint128',
              },
              {
                internalType: 'bytes32',
                name: 'oracleNodeId',
                type: 'bytes32',
              },
              {
                internalType: 'bytes32',
                name: 'pythPriceFeedId',
                type: 'bytes32',
              },
              {
                internalType: 'uint128',
                name: 'makerFee',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'takerFee',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'maxMarketSize',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'maxFundingVelocity',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'skewScale',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'fundingVelocityClamp',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'minCreditPercent',
                type: 'uint128',
              },
              {
                internalType: 'uint256',
                name: 'minMarginUsd',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'minMarginRatio',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'incrementalMarginScalar',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'maintenanceMarginScalar',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'maxInitialMarginRatio',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'liquidationRewardPercent',
                type: 'uint256',
              },
              {
                internalType: 'uint128',
                name: 'liquidationLimitScalar',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'liquidationWindowDuration',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'liquidationMaxPd',
                type: 'uint128',
              },
            ],
            internalType: 'struct IMarketConfigurationModule.ConfigureByMarketParameters',
            name: 'data',
            type: 'tuple',
          },
        ],
        name: 'setMarketConfigurationById',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
        ],
        name: 'AccountNotFound',
        type: 'error',
      },
      {
        inputs: [],
        name: 'AccountSplitProportionTooLarge',
        type: 'error',
      },
      {
        inputs: [],
        name: 'CanLiquidatePosition',
        type: 'error',
      },
      {
        inputs: [],
        name: 'CollateralFound',
        type: 'error',
      },
      {
        inputs: [],
        name: 'DuplicateAccountIds',
        type: 'error',
      },
      {
        inputs: [],
        name: 'InsufficientMargin',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'hook',
            type: 'address',
          },
        ],
        name: 'InvalidHook',
        type: 'error',
      },
      {
        inputs: [],
        name: 'InvalidPositionSide',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OrderFound',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt128ToUint128',
        type: 'error',
      },
      {
        inputs: [],
        name: 'PositionFlagged',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'PositionFound',
        type: 'error',
      },
      {
        inputs: [],
        name: 'PositionNotFound',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ZeroProportion',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'fromId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'toId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'AccountSplit',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'fromId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'toId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'AccountsMerged',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getAccountDigest',
        outputs: [
          {
            components: [
              {
                components: [
                  {
                    internalType: 'address',
                    name: 'collateralAddress',
                    type: 'address',
                  },
                  {
                    internalType: 'uint256',
                    name: 'available',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'oraclePrice',
                    type: 'uint256',
                  },
                ],
                internalType: 'struct IPerpAccountModule.DepositedCollateral[]',
                name: 'depositedCollaterals',
                type: 'tuple[]',
              },
              {
                internalType: 'uint256',
                name: 'collateralUsd',
                type: 'uint256',
              },
              {
                internalType: 'uint128',
                name: 'debtUsd',
                type: 'uint128',
              },
              {
                components: [
                  {
                    internalType: 'uint128',
                    name: 'accountId',
                    type: 'uint128',
                  },
                  {
                    internalType: 'uint128',
                    name: 'marketId',
                    type: 'uint128',
                  },
                  {
                    internalType: 'uint256',
                    name: 'remainingMarginUsd',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'healthFactor',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'notionalValueUsd',
                    type: 'uint256',
                  },
                  {
                    internalType: 'int256',
                    name: 'pnl',
                    type: 'int256',
                  },
                  {
                    internalType: 'int128',
                    name: 'accruedFunding',
                    type: 'int128',
                  },
                  {
                    internalType: 'uint128',
                    name: 'accruedUtilization',
                    type: 'uint128',
                  },
                  {
                    internalType: 'uint256',
                    name: 'entryPythPrice',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'entryPrice',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'oraclePrice',
                    type: 'uint256',
                  },
                  {
                    internalType: 'int128',
                    name: 'size',
                    type: 'int128',
                  },
                  {
                    internalType: 'uint256',
                    name: 'im',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'mm',
                    type: 'uint256',
                  },
                ],
                internalType: 'struct IPerpAccountModule.PositionDigest',
                name: 'position',
                type: 'tuple',
              },
            ],
            internalType: 'struct IPerpAccountModule.AccountDigest',
            name: '',
            type: 'tuple',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getPositionDigest',
        outputs: [
          {
            components: [
              {
                internalType: 'uint128',
                name: 'accountId',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'marketId',
                type: 'uint128',
              },
              {
                internalType: 'uint256',
                name: 'remainingMarginUsd',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'healthFactor',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'notionalValueUsd',
                type: 'uint256',
              },
              {
                internalType: 'int256',
                name: 'pnl',
                type: 'int256',
              },
              {
                internalType: 'int128',
                name: 'accruedFunding',
                type: 'int128',
              },
              {
                internalType: 'uint128',
                name: 'accruedUtilization',
                type: 'uint128',
              },
              {
                internalType: 'uint256',
                name: 'entryPythPrice',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'entryPrice',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'oraclePrice',
                type: 'uint256',
              },
              {
                internalType: 'int128',
                name: 'size',
                type: 'int128',
              },
              {
                internalType: 'uint256',
                name: 'im',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'mm',
                type: 'uint256',
              },
            ],
            internalType: 'struct IPerpAccountModule.PositionDigest',
            name: '',
            type: 'tuple',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'fromId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'toId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'mergeAccounts',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'fromId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'toId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'proportion',
            type: 'uint128',
          },
        ],
        name: 'splitAccount',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'ArrayLengthMismatch',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'DebtFound',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'collateralAddress',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'available',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
        ],
        name: 'InsufficientCollateral',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'distributor',
            type: 'address',
          },
        ],
        name: 'InvalidRewardDistributor',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'max',
            type: 'uint256',
          },
        ],
        name: 'MaxCollateralExceeded',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'collateralAddress',
            type: 'address',
          },
        ],
        name: 'MissingRequiredCollateral',
        type: 'error',
      },
      {
        inputs: [],
        name: 'NilCollateral',
        type: 'error',
      },
      {
        inputs: [],
        name: 'NoDebt',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'collateralAddress',
            type: 'address',
          },
        ],
        name: 'UnsupportedCollateral',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ZeroAmount',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'oldDebt',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'newDebt',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'paidFromUsdCollateral',
            type: 'uint128',
          },
        ],
        name: 'DebtPaid',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'collaterals',
            type: 'uint256',
          },
        ],
        name: 'MarginCollateralConfigured',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'collateralAddress',
            type: 'address',
          },
        ],
        name: 'MarginDeposit',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'collateralAddress',
            type: 'address',
          },
        ],
        name: 'MarginWithdraw',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'collateralAddress',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'getDiscountedCollateralPrice',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getMarginCollateralConfiguration',
        outputs: [
          {
            components: [
              {
                internalType: 'address',
                name: 'collateralAddress',
                type: 'address',
              },
              {
                internalType: 'bytes32',
                name: 'oracleNodeId',
                type: 'bytes32',
              },
              {
                internalType: 'uint128',
                name: 'maxAllowable',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'skewScale',
                type: 'uint128',
              },
              {
                internalType: 'address',
                name: 'rewardDistributor',
                type: 'address',
              },
            ],
            internalType: 'struct IMarginModule.ConfiguredCollateral[]',
            name: '',
            type: 'tuple[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getMarginDigest',
        outputs: [
          {
            components: [
              {
                internalType: 'uint256',
                name: 'discountedMarginUsd',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'marginUsd',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'discountedCollateralUsd',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'collateralUsd',
                type: 'uint256',
              },
            ],
            internalType: 'struct Margin.MarginValues',
            name: '',
            type: 'tuple',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getMarginLiquidationOnlyReward',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'uint256',
            name: 'oraclePrice',
            type: 'uint256',
          },
        ],
        name: 'getNetAssetValue',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getWithdrawableMargin',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralAddress',
            type: 'address',
          },
          {
            internalType: 'int256',
            name: 'amountDelta',
            type: 'int256',
          },
        ],
        name: 'modifyCollateral',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'amount',
            type: 'uint128',
          },
        ],
        name: 'payDebt',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'collateralAddress',
            type: 'address',
          },
          {
            internalType: 'uint128',
            name: 'maxAllowable',
            type: 'uint128',
          },
        ],
        name: 'setCollateralMaxAllowable',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address[]',
            name: 'collateralAddresses',
            type: 'address[]',
          },
          {
            internalType: 'bytes32[]',
            name: 'oracleNodeIds',
            type: 'bytes32[]',
          },
          {
            internalType: 'uint128[]',
            name: 'maxAllowables',
            type: 'uint128[]',
          },
          {
            internalType: 'uint128[]',
            name: 'skewScales',
            type: 'uint128[]',
          },
          {
            internalType: 'address[]',
            name: 'rewardDistributors',
            type: 'address[]',
          },
        ],
        name: 'setMarginCollateralConfiguration',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'withdrawAllCollateral',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'InsufficientLiquidity',
        type: 'error',
      },
      {
        inputs: [],
        name: 'InvalidPrice',
        type: 'error',
      },
      {
        inputs: [],
        name: 'MaxHooksExceeded',
        type: 'error',
      },
      {
        inputs: [],
        name: 'MaxMarketSizeExceeded',
        type: 'error',
      },
      {
        inputs: [],
        name: 'NilOrder',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OrderNotFound',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OrderNotReady',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OrderNotStale',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OrderStale',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'int128',
            name: 'sizeDelta',
            type: 'int128',
          },
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'limitPrice',
            type: 'uint256',
          },
        ],
        name: 'PriceToleranceExceeded',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'int128',
            name: 'sizeDelta',
            type: 'int128',
          },
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'limitPrice',
            type: 'uint256',
          },
        ],
        name: 'PriceToleranceNotExceeded',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint64',
            name: 'commitmentTime',
            type: 'uint64',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'sizeDelta',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'estimatedOrderFee',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'estimatedKeeperFee',
            type: 'uint256',
          },
        ],
        name: 'OrderCommitted',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint64',
            name: 'settlementTime',
            type: 'uint64',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'sizeDelta',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'orderFee',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'keeperFee',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'accruedFunding',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'accruedUtilization',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'int256',
            name: 'pnl',
            type: 'int256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'fillPrice',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'accountDebt',
            type: 'uint128',
          },
        ],
        name: 'OrderSettled',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'hook',
            type: 'address',
          },
        ],
        name: 'OrderSettlementHookExecuted',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'bytes',
            name: 'priceUpdateData',
            type: 'bytes',
          },
        ],
        name: 'cancelOrder',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'cancelStaleOrder',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'int128',
            name: 'sizeDelta',
            type: 'int128',
          },
          {
            internalType: 'uint256',
            name: 'limitPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint128',
            name: 'keeperFeeBufferUsd',
            type: 'uint128',
          },
          {
            internalType: 'address[]',
            name: 'hooks',
            type: 'address[]',
          },
        ],
        name: 'commitOrder',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'int128',
            name: 'size',
            type: 'int128',
          },
        ],
        name: 'getFillPrice',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getOraclePrice',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getOrderDigest',
        outputs: [
          {
            components: [
              {
                internalType: 'int128',
                name: 'sizeDelta',
                type: 'int128',
              },
              {
                internalType: 'uint64',
                name: 'commitmentTime',
                type: 'uint64',
              },
              {
                internalType: 'uint256',
                name: 'limitPrice',
                type: 'uint256',
              },
              {
                internalType: 'uint128',
                name: 'keeperFeeBufferUsd',
                type: 'uint128',
              },
              {
                internalType: 'address[]',
                name: 'hooks',
                type: 'address[]',
              },
              {
                internalType: 'bool',
                name: 'isStale',
                type: 'bool',
              },
              {
                internalType: 'bool',
                name: 'isReady',
                type: 'bool',
              },
            ],
            internalType: 'struct IOrderModule.OrderDigest',
            name: '',
            type: 'tuple',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'int128',
            name: 'sizeDelta',
            type: 'int128',
          },
          {
            internalType: 'uint128',
            name: 'keeperFeeBufferUsd',
            type: 'uint128',
          },
        ],
        name: 'getOrderFees',
        outputs: [
          {
            internalType: 'uint256',
            name: 'orderFee',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'keeperFee',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'bytes',
            name: 'priceUpdateData',
            type: 'bytes',
          },
        ],
        name: 'settleOrder',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'CannotLiquidateMargin',
        type: 'error',
      },
      {
        inputs: [],
        name: 'CannotLiquidatePosition',
        type: 'error',
      },
      {
        inputs: [],
        name: 'LiquidationZeroCapacity',
        type: 'error',
      },
      {
        inputs: [],
        name: 'PositionNotFlagged',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'keeperReward',
            type: 'uint256',
          },
        ],
        name: 'MarginLiquidated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'flagger',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'flagKeeperReward',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'flaggedPrice',
            type: 'uint256',
          },
        ],
        name: 'PositionFlaggedLiquidation',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'sizeBeforeLiquidation',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'remainingSize',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'keeper',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'flagger',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'liqKeeperFee',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'liquidationPrice',
            type: 'uint256',
          },
        ],
        name: 'PositionLiquidated',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'flagPosition',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getHealthFactor',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getLiquidationFees',
        outputs: [
          {
            internalType: 'uint256',
            name: 'flagKeeperReward',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'liqKeeperFee',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'int128',
            name: 'sizeDelta',
            type: 'int128',
          },
        ],
        name: 'getLiquidationMarginUsd',
        outputs: [
          {
            internalType: 'uint256',
            name: 'im',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'mm',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getRemainingLiquidatableSizeCapacity',
        outputs: [
          {
            internalType: 'uint128',
            name: 'maxLiquidatableCapacity',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'remainingCapacity',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'lastLiquidationTimestamp',
            type: 'uint128',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'isMarginLiquidatable',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'isPositionLiquidatable',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'liquidateMarginOnly',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'liquidatePosition',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'ZeroLength',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'distributor',
            type: 'address',
          },
        ],
        name: 'RewardDistributorCreated',
        type: 'event',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'uint128',
                name: 'poolId',
                type: 'uint128',
              },
              {
                internalType: 'address[]',
                name: 'collateralTypes',
                type: 'address[]',
              },
              {
                internalType: 'string',
                name: 'name',
                type: 'string',
              },
              {
                internalType: 'address',
                name: 'token',
                type: 'address',
              },
            ],
            internalType:
              'struct IPerpRewardDistributorFactoryModule.CreatePerpRewardDistributorParameters',
            name: 'data',
            type: 'tuple',
          },
        ],
        name: 'createRewardDistributor',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'hooks',
            type: 'uint256',
          },
        ],
        name: 'SettlementHookConfigured',
        type: 'event',
      },
      {
        inputs: [],
        name: 'getSettlementHookConfiguration',
        outputs: [
          {
            components: [
              {
                internalType: 'address[]',
                name: 'whitelistedHookAddresses',
                type: 'address[]',
              },
              {
                internalType: 'uint32',
                name: 'maxHooksPerOrder',
                type: 'uint32',
              },
            ],
            internalType: 'struct ISettlementHookModule.SettlementHookConfigureParameters',
            name: '',
            type: 'tuple',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'hook',
            type: 'address',
          },
        ],
        name: 'isSettlementHookWhitelisted',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'address[]',
                name: 'whitelistedHookAddresses',
                type: 'address[]',
              },
              {
                internalType: 'uint32',
                name: 'maxHooksPerOrder',
                type: 'uint32',
              },
            ],
            internalType: 'struct ISettlementHookModule.SettlementHookConfigureParameters',
            name: 'data',
            type: 'tuple',
          },
        ],
        name: 'setSettlementHookConfiguration',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
  BfpMarketProxy: {
    address: '0xEf654C46c8f33c7F6b0db04BF64DFd5f228c35d4',
    abi: [
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'which',
            type: 'bytes32',
          },
        ],
        name: 'FeatureUnavailable',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
        ],
        name: 'InvalidAccountId',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
        ],
        name: 'InvalidPermission',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'origin',
            type: 'address',
          },
        ],
        name: 'OnlyAccountTokenProxy',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
        ],
        name: 'PermissionDenied',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
        ],
        name: 'PermissionNotGranted',
        type: 'error',
      },
      {
        inputs: [],
        name: 'PositionOutOfBounds',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ValueAlreadyInSet',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ValueNotInSet',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ZeroAddress',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
        ],
        name: 'AccountCreated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'PermissionGranted',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
        ],
        name: 'PermissionRevoked',
        type: 'event',
      },
      {
        inputs: [],
        name: 'createAccount',
        outputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'requestedAccountId',
            type: 'uint128',
          },
        ],
        name: 'createAccount',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
        ],
        name: 'getAccountLastInteraction',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
        ],
        name: 'getAccountOwner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
        ],
        name: 'getAccountPermissions',
        outputs: [
          {
            components: [
              {
                internalType: 'address',
                name: 'user',
                type: 'address',
              },
              {
                internalType: 'bytes32[]',
                name: 'permissions',
                type: 'bytes32[]',
              },
            ],
            internalType: 'struct IAccountModule.AccountPermissions[]',
            name: 'accountPerms',
            type: 'tuple[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getAccountTokenAddress',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
        ],
        name: 'grantPermission',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
        ],
        name: 'hasPermission',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
        ],
        name: 'isAuthorized',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
        ],
        name: 'notifyAccountTransfer',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
        ],
        name: 'renouncePermission',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'bytes32',
            name: 'permission',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
        ],
        name: 'revokePermission',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'expected',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'actual',
            type: 'bytes32',
          },
        ],
        name: 'MismatchAssociatedSystemKind',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
        ],
        name: 'MissingAssociatedSystem',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'Unauthorized',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'kind',
            type: 'bytes32',
          },
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'proxy',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'impl',
            type: 'address',
          },
        ],
        name: 'AssociatedSystemSet',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
        ],
        name: 'getAssociatedSystem',
        outputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
          {
            internalType: 'bytes32',
            name: 'kind',
            type: 'bytes32',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'symbol',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'uri',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 'impl',
            type: 'address',
          },
        ],
        name: 'initOrUpgradeNft',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'symbol',
            type: 'string',
          },
          {
            internalType: 'uint8',
            name: 'decimals',
            type: 'uint8',
          },
          {
            internalType: 'address',
            name: 'impl',
            type: 'address',
          },
        ],
        name: 'initOrUpgradeToken',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'endpoint',
            type: 'address',
          },
        ],
        name: 'registerUnmanagedSystem',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'implementation',
            type: 'address',
          },
        ],
        name: 'ImplementationIsSterile',
        type: 'error',
      },
      {
        inputs: [],
        name: 'NoChange',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'contr',
            type: 'address',
          },
        ],
        name: 'NotAContract',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'NotNominated',
        type: 'error',
      },
      {
        inputs: [],
        name: 'UpgradeSimulationFailed',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'oldOwner',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnerChanged',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnerNominated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'self',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'implementation',
            type: 'address',
          },
        ],
        name: 'Upgraded',
        type: 'event',
      },
      {
        inputs: [],
        name: 'acceptOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getImplementation',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newNominatedOwner',
            type: 'address',
          },
        ],
        name: 'nominateNewOwner',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'nominatedOwner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'renounceNomination',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newImplementation',
            type: 'address',
          },
        ],
        name: 'simulateUpgradeTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newImplementation',
            type: 'address',
          },
        ],
        name: 'upgradeTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            indexed: false,
            internalType: 'bool',
            name: 'allowAll',
            type: 'bool',
          },
        ],
        name: 'FeatureFlagAllowAllSet',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'account',
            type: 'address',
          },
        ],
        name: 'FeatureFlagAllowlistAdded',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'account',
            type: 'address',
          },
        ],
        name: 'FeatureFlagAllowlistRemoved',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            indexed: false,
            internalType: 'address[]',
            name: 'deniers',
            type: 'address[]',
          },
        ],
        name: 'FeatureFlagDeniersReset',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            indexed: false,
            internalType: 'bool',
            name: 'denyAll',
            type: 'bool',
          },
        ],
        name: 'FeatureFlagDenyAllSet',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'bool',
            name: 'suspended',
            type: 'bool',
          },
        ],
        name: 'PerpMarketSuspended',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'account',
            type: 'address',
          },
        ],
        name: 'addToFeatureFlagAllowlist',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'enableAllFeatures',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
        ],
        name: 'getDeniers',
        outputs: [
          {
            internalType: 'address[]',
            name: '',
            type: 'address[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
        ],
        name: 'getFeatureFlagAllowAll',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
        ],
        name: 'getFeatureFlagAllowlist',
        outputs: [
          {
            internalType: 'address[]',
            name: '',
            type: 'address[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
        ],
        name: 'getFeatureFlagDenyAll',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'account',
            type: 'address',
          },
        ],
        name: 'isFeatureAllowed',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            internalType: 'address',
            name: 'account',
            type: 'address',
          },
        ],
        name: 'removeFromFeatureFlagAllowlist',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            internalType: 'address[]',
            name: 'deniers',
            type: 'address[]',
          },
        ],
        name: 'setDeniers',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            internalType: 'bool',
            name: 'allowAll',
            type: 'bool',
          },
        ],
        name: 'setFeatureFlagAllowAll',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'feature',
            type: 'bytes32',
          },
          {
            internalType: 'bool',
            name: 'denyAll',
            type: 'bool',
          },
        ],
        name: 'setFeatureFlagDenyAll',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'suspendAllFeatures',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_synthetix',
            type: 'address',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'synthetixCore',
            type: 'address',
          },
        ],
        name: 'InvalidCoreAddress',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'MarketNotFound',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt256ToInt128',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt256ToUint256',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint128ToInt128',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToInt256',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToUint128',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToUint64',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'skew',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'fundingRate',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'fundingVelocity',
            type: 'int128',
          },
        ],
        name: 'FundingRecomputed',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'id',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'bytes32',
            name: 'name',
            type: 'bytes32',
          },
        ],
        name: 'MarketCreated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'size',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'skew',
            type: 'int128',
          },
        ],
        name: 'MarketSizeUpdated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'keeperFee',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint64',
            name: 'commitmentTime',
            type: 'uint64',
          },
        ],
        name: 'OrderCanceled',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'skew',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'utilizationRate',
            type: 'uint128',
          },
        ],
        name: 'UtilizationRecomputed',
        type: 'event',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'bytes32',
                name: 'name',
                type: 'bytes32',
              },
            ],
            internalType: 'struct IPerpMarketFactoryModule.CreatePerpMarketParameters',
            name: 'data',
            type: 'tuple',
          },
        ],
        name: 'createMarket',
        outputs: [
          {
            internalType: 'uint128',
            name: '',
            type: 'uint128',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getActiveMarketIds',
        outputs: [
          {
            internalType: 'uint128[]',
            name: '',
            type: 'uint128[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getMarketDigest',
        outputs: [
          {
            components: [
              {
                components: [
                  {
                    internalType: 'address',
                    name: 'collateralAddress',
                    type: 'address',
                  },
                  {
                    internalType: 'uint256',
                    name: 'available',
                    type: 'uint256',
                  },
                ],
                internalType: 'struct IPerpMarketFactoryModule.DepositedCollateral[]',
                name: 'depositedCollaterals',
                type: 'tuple[]',
              },
              {
                internalType: 'bytes32',
                name: 'name',
                type: 'bytes32',
              },
              {
                internalType: 'int128',
                name: 'skew',
                type: 'int128',
              },
              {
                internalType: 'uint128',
                name: 'size',
                type: 'uint128',
              },
              {
                internalType: 'uint256',
                name: 'oraclePrice',
                type: 'uint256',
              },
              {
                internalType: 'int128',
                name: 'fundingVelocity',
                type: 'int128',
              },
              {
                internalType: 'int128',
                name: 'fundingRate',
                type: 'int128',
              },
              {
                internalType: 'uint128',
                name: 'utilizationRate',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'remainingLiquidatableSizeCapacity',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'lastLiquidationTime',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'totalTraderDebtUsd',
                type: 'uint128',
              },
              {
                internalType: 'uint256',
                name: 'totalCollateralValueUsd',
                type: 'uint256',
              },
              {
                internalType: 'int128',
                name: 'debtCorrection',
                type: 'int128',
              },
            ],
            internalType: 'struct IPerpMarketFactoryModule.MarketDigest',
            name: '',
            type: 'tuple',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getUtilizationDigest',
        outputs: [
          {
            components: [
              {
                internalType: 'uint128',
                name: 'lastComputedUtilizationRate',
                type: 'uint128',
              },
              {
                internalType: 'uint64',
                name: 'lastComputedTimestamp',
                type: 'uint64',
              },
              {
                internalType: 'uint128',
                name: 'currentUtilizationRate',
                type: 'uint128',
              },
              {
                internalType: 'uint256',
                name: 'utilization',
                type: 'uint256',
              },
            ],
            internalType: 'struct IPerpMarketFactoryModule.UtilizationDigest',
            name: '',
            type: 'tuple',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'minimumCredit',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: '',
            type: 'uint128',
          },
        ],
        name: 'name',
        outputs: [
          {
            internalType: 'string',
            name: '',
            type: 'string',
          },
        ],
        stateMutability: 'pure',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'recomputeFunding',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'recomputeUtilization',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'reportedDebt',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'ethOracleNodeId',
            type: 'bytes32',
          },
        ],
        name: 'setEthOracleNodeId',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'contract IPyth',
            name: 'pyth',
            type: 'address',
          },
        ],
        name: 'setPyth',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'implementation',
            type: 'address',
          },
        ],
        name: 'setRewardDistributorImplementation',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes4',
            name: 'interfaceId',
            type: 'bytes4',
          },
        ],
        name: 'supportsInterface',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'string',
            name: 'parameter',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'reason',
            type: 'string',
          },
        ],
        name: 'InvalidParameter',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
        ],
        name: 'GlobalMarketConfigured',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
        ],
        name: 'MarketConfigured',
        type: 'event',
      },
      {
        inputs: [],
        name: 'getMarketConfiguration',
        outputs: [
          {
            components: [
              {
                internalType: 'contract IPyth',
                name: 'pyth',
                type: 'address',
              },
              {
                internalType: 'bytes32',
                name: 'ethOracleNodeId',
                type: 'bytes32',
              },
              {
                internalType: 'address',
                name: 'rewardDistributorImplementation',
                type: 'address',
              },
              {
                internalType: 'uint64',
                name: 'pythPublishTimeMin',
                type: 'uint64',
              },
              {
                internalType: 'uint64',
                name: 'pythPublishTimeMax',
                type: 'uint64',
              },
              {
                internalType: 'uint64',
                name: 'minOrderAge',
                type: 'uint64',
              },
              {
                internalType: 'uint64',
                name: 'maxOrderAge',
                type: 'uint64',
              },
              {
                internalType: 'uint256',
                name: 'minKeeperFeeUsd',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'maxKeeperFeeUsd',
                type: 'uint256',
              },
              {
                internalType: 'uint128',
                name: 'keeperProfitMarginUsd',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'keeperProfitMarginPercent',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'keeperSettlementGasUnits',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'keeperCancellationGasUnits',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'keeperLiquidationGasUnits',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'keeperFlagGasUnits',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'keeperLiquidateMarginGasUnits',
                type: 'uint128',
              },
              {
                internalType: 'address',
                name: 'keeperLiquidationEndorsed',
                type: 'address',
              },
              {
                internalType: 'uint128',
                name: 'collateralDiscountScalar',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'minCollateralDiscount',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'maxCollateralDiscount',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'utilizationBreakpointPercent',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'lowUtilizationSlopePercent',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'highUtilizationSlopePercent',
                type: 'uint128',
              },
            ],
            internalType: 'struct PerpMarketConfiguration.GlobalData',
            name: '',
            type: 'tuple',
          },
        ],
        stateMutability: 'pure',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getMarketConfigurationById',
        outputs: [
          {
            components: [
              {
                internalType: 'bytes32',
                name: 'oracleNodeId',
                type: 'bytes32',
              },
              {
                internalType: 'bytes32',
                name: 'pythPriceFeedId',
                type: 'bytes32',
              },
              {
                internalType: 'uint128',
                name: 'makerFee',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'takerFee',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'maxMarketSize',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'maxFundingVelocity',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'skewScale',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'fundingVelocityClamp',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'minCreditPercent',
                type: 'uint128',
              },
              {
                internalType: 'uint256',
                name: 'minMarginUsd',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'minMarginRatio',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'incrementalMarginScalar',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'maintenanceMarginScalar',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'maxInitialMarginRatio',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'liquidationRewardPercent',
                type: 'uint256',
              },
              {
                internalType: 'uint128',
                name: 'liquidationLimitScalar',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'liquidationWindowDuration',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'liquidationMaxPd',
                type: 'uint128',
              },
            ],
            internalType: 'struct PerpMarketConfiguration.Data',
            name: '',
            type: 'tuple',
          },
        ],
        stateMutability: 'pure',
        type: 'function',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'uint64',
                name: 'pythPublishTimeMin',
                type: 'uint64',
              },
              {
                internalType: 'uint64',
                name: 'pythPublishTimeMax',
                type: 'uint64',
              },
              {
                internalType: 'uint64',
                name: 'minOrderAge',
                type: 'uint64',
              },
              {
                internalType: 'uint64',
                name: 'maxOrderAge',
                type: 'uint64',
              },
              {
                internalType: 'uint256',
                name: 'minKeeperFeeUsd',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'maxKeeperFeeUsd',
                type: 'uint256',
              },
              {
                internalType: 'uint128',
                name: 'keeperProfitMarginPercent',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'keeperProfitMarginUsd',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'keeperSettlementGasUnits',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'keeperCancellationGasUnits',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'keeperLiquidationGasUnits',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'keeperFlagGasUnits',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'keeperLiquidateMarginGasUnits',
                type: 'uint128',
              },
              {
                internalType: 'address',
                name: 'keeperLiquidationEndorsed',
                type: 'address',
              },
              {
                internalType: 'uint128',
                name: 'collateralDiscountScalar',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'minCollateralDiscount',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'maxCollateralDiscount',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'utilizationBreakpointPercent',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'lowUtilizationSlopePercent',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'highUtilizationSlopePercent',
                type: 'uint128',
              },
            ],
            internalType: 'struct IMarketConfigurationModule.GlobalMarketConfigureParameters',
            name: 'data',
            type: 'tuple',
          },
        ],
        name: 'setMarketConfiguration',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'uint128',
                name: 'marketId',
                type: 'uint128',
              },
              {
                internalType: 'bytes32',
                name: 'oracleNodeId',
                type: 'bytes32',
              },
              {
                internalType: 'bytes32',
                name: 'pythPriceFeedId',
                type: 'bytes32',
              },
              {
                internalType: 'uint128',
                name: 'makerFee',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'takerFee',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'maxMarketSize',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'maxFundingVelocity',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'skewScale',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'fundingVelocityClamp',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'minCreditPercent',
                type: 'uint128',
              },
              {
                internalType: 'uint256',
                name: 'minMarginUsd',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'minMarginRatio',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'incrementalMarginScalar',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'maintenanceMarginScalar',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'maxInitialMarginRatio',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'liquidationRewardPercent',
                type: 'uint256',
              },
              {
                internalType: 'uint128',
                name: 'liquidationLimitScalar',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'liquidationWindowDuration',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'liquidationMaxPd',
                type: 'uint128',
              },
            ],
            internalType: 'struct IMarketConfigurationModule.ConfigureByMarketParameters',
            name: 'data',
            type: 'tuple',
          },
        ],
        name: 'setMarketConfigurationById',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
        ],
        name: 'AccountNotFound',
        type: 'error',
      },
      {
        inputs: [],
        name: 'AccountSplitProportionTooLarge',
        type: 'error',
      },
      {
        inputs: [],
        name: 'CanLiquidatePosition',
        type: 'error',
      },
      {
        inputs: [],
        name: 'CollateralFound',
        type: 'error',
      },
      {
        inputs: [],
        name: 'DuplicateAccountIds',
        type: 'error',
      },
      {
        inputs: [],
        name: 'InsufficientMargin',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'hook',
            type: 'address',
          },
        ],
        name: 'InvalidHook',
        type: 'error',
      },
      {
        inputs: [],
        name: 'InvalidPositionSide',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OrderFound',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowInt128ToUint128',
        type: 'error',
      },
      {
        inputs: [],
        name: 'PositionFlagged',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'PositionFound',
        type: 'error',
      },
      {
        inputs: [],
        name: 'PositionNotFound',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ZeroProportion',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'fromId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'toId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'AccountSplit',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'fromId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'toId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'AccountsMerged',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getAccountDigest',
        outputs: [
          {
            components: [
              {
                components: [
                  {
                    internalType: 'address',
                    name: 'collateralAddress',
                    type: 'address',
                  },
                  {
                    internalType: 'uint256',
                    name: 'available',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'oraclePrice',
                    type: 'uint256',
                  },
                ],
                internalType: 'struct IPerpAccountModule.DepositedCollateral[]',
                name: 'depositedCollaterals',
                type: 'tuple[]',
              },
              {
                internalType: 'uint256',
                name: 'collateralUsd',
                type: 'uint256',
              },
              {
                internalType: 'uint128',
                name: 'debtUsd',
                type: 'uint128',
              },
              {
                components: [
                  {
                    internalType: 'uint128',
                    name: 'accountId',
                    type: 'uint128',
                  },
                  {
                    internalType: 'uint128',
                    name: 'marketId',
                    type: 'uint128',
                  },
                  {
                    internalType: 'uint256',
                    name: 'remainingMarginUsd',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'healthFactor',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'notionalValueUsd',
                    type: 'uint256',
                  },
                  {
                    internalType: 'int256',
                    name: 'pnl',
                    type: 'int256',
                  },
                  {
                    internalType: 'int128',
                    name: 'accruedFunding',
                    type: 'int128',
                  },
                  {
                    internalType: 'uint128',
                    name: 'accruedUtilization',
                    type: 'uint128',
                  },
                  {
                    internalType: 'uint256',
                    name: 'entryPythPrice',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'entryPrice',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'oraclePrice',
                    type: 'uint256',
                  },
                  {
                    internalType: 'int128',
                    name: 'size',
                    type: 'int128',
                  },
                  {
                    internalType: 'uint256',
                    name: 'im',
                    type: 'uint256',
                  },
                  {
                    internalType: 'uint256',
                    name: 'mm',
                    type: 'uint256',
                  },
                ],
                internalType: 'struct IPerpAccountModule.PositionDigest',
                name: 'position',
                type: 'tuple',
              },
            ],
            internalType: 'struct IPerpAccountModule.AccountDigest',
            name: '',
            type: 'tuple',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getPositionDigest',
        outputs: [
          {
            components: [
              {
                internalType: 'uint128',
                name: 'accountId',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'marketId',
                type: 'uint128',
              },
              {
                internalType: 'uint256',
                name: 'remainingMarginUsd',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'healthFactor',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'notionalValueUsd',
                type: 'uint256',
              },
              {
                internalType: 'int256',
                name: 'pnl',
                type: 'int256',
              },
              {
                internalType: 'int128',
                name: 'accruedFunding',
                type: 'int128',
              },
              {
                internalType: 'uint128',
                name: 'accruedUtilization',
                type: 'uint128',
              },
              {
                internalType: 'uint256',
                name: 'entryPythPrice',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'entryPrice',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'oraclePrice',
                type: 'uint256',
              },
              {
                internalType: 'int128',
                name: 'size',
                type: 'int128',
              },
              {
                internalType: 'uint256',
                name: 'im',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'mm',
                type: 'uint256',
              },
            ],
            internalType: 'struct IPerpAccountModule.PositionDigest',
            name: '',
            type: 'tuple',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'fromId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'toId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'mergeAccounts',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'fromId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'toId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'proportion',
            type: 'uint128',
          },
        ],
        name: 'splitAccount',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'ArrayLengthMismatch',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'DebtFound',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'collateralAddress',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'available',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
        ],
        name: 'InsufficientCollateral',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'distributor',
            type: 'address',
          },
        ],
        name: 'InvalidRewardDistributor',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'max',
            type: 'uint256',
          },
        ],
        name: 'MaxCollateralExceeded',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'collateralAddress',
            type: 'address',
          },
        ],
        name: 'MissingRequiredCollateral',
        type: 'error',
      },
      {
        inputs: [],
        name: 'NilCollateral',
        type: 'error',
      },
      {
        inputs: [],
        name: 'NoDebt',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'collateralAddress',
            type: 'address',
          },
        ],
        name: 'UnsupportedCollateral',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ZeroAmount',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'oldDebt',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'newDebt',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'paidFromUsdCollateral',
            type: 'uint128',
          },
        ],
        name: 'DebtPaid',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'collaterals',
            type: 'uint256',
          },
        ],
        name: 'MarginCollateralConfigured',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'collateralAddress',
            type: 'address',
          },
        ],
        name: 'MarginDeposit',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'collateralAddress',
            type: 'address',
          },
        ],
        name: 'MarginWithdraw',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'collateralAddress',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'getDiscountedCollateralPrice',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getMarginCollateralConfiguration',
        outputs: [
          {
            components: [
              {
                internalType: 'address',
                name: 'collateralAddress',
                type: 'address',
              },
              {
                internalType: 'bytes32',
                name: 'oracleNodeId',
                type: 'bytes32',
              },
              {
                internalType: 'uint128',
                name: 'maxAllowable',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'skewScale',
                type: 'uint128',
              },
              {
                internalType: 'address',
                name: 'rewardDistributor',
                type: 'address',
              },
            ],
            internalType: 'struct IMarginModule.ConfiguredCollateral[]',
            name: '',
            type: 'tuple[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getMarginDigest',
        outputs: [
          {
            components: [
              {
                internalType: 'uint256',
                name: 'discountedMarginUsd',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'marginUsd',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'discountedCollateralUsd',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'collateralUsd',
                type: 'uint256',
              },
            ],
            internalType: 'struct Margin.MarginValues',
            name: '',
            type: 'tuple',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getMarginLiquidationOnlyReward',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'uint256',
            name: 'oraclePrice',
            type: 'uint256',
          },
        ],
        name: 'getNetAssetValue',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getWithdrawableMargin',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'address',
            name: 'collateralAddress',
            type: 'address',
          },
          {
            internalType: 'int256',
            name: 'amountDelta',
            type: 'int256',
          },
        ],
        name: 'modifyCollateral',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'amount',
            type: 'uint128',
          },
        ],
        name: 'payDebt',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'collateralAddress',
            type: 'address',
          },
          {
            internalType: 'uint128',
            name: 'maxAllowable',
            type: 'uint128',
          },
        ],
        name: 'setCollateralMaxAllowable',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address[]',
            name: 'collateralAddresses',
            type: 'address[]',
          },
          {
            internalType: 'bytes32[]',
            name: 'oracleNodeIds',
            type: 'bytes32[]',
          },
          {
            internalType: 'uint128[]',
            name: 'maxAllowables',
            type: 'uint128[]',
          },
          {
            internalType: 'uint128[]',
            name: 'skewScales',
            type: 'uint128[]',
          },
          {
            internalType: 'address[]',
            name: 'rewardDistributors',
            type: 'address[]',
          },
        ],
        name: 'setMarginCollateralConfiguration',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'withdrawAllCollateral',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'InsufficientLiquidity',
        type: 'error',
      },
      {
        inputs: [],
        name: 'InvalidPrice',
        type: 'error',
      },
      {
        inputs: [],
        name: 'MaxHooksExceeded',
        type: 'error',
      },
      {
        inputs: [],
        name: 'MaxMarketSizeExceeded',
        type: 'error',
      },
      {
        inputs: [],
        name: 'NilOrder',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OrderNotFound',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OrderNotReady',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OrderNotStale',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OrderStale',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'int128',
            name: 'sizeDelta',
            type: 'int128',
          },
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'limitPrice',
            type: 'uint256',
          },
        ],
        name: 'PriceToleranceExceeded',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'int128',
            name: 'sizeDelta',
            type: 'int128',
          },
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'limitPrice',
            type: 'uint256',
          },
        ],
        name: 'PriceToleranceNotExceeded',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint64',
            name: 'commitmentTime',
            type: 'uint64',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'sizeDelta',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'estimatedOrderFee',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'estimatedKeeperFee',
            type: 'uint256',
          },
        ],
        name: 'OrderCommitted',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint64',
            name: 'settlementTime',
            type: 'uint64',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'sizeDelta',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'orderFee',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'keeperFee',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'accruedFunding',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'accruedUtilization',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'int256',
            name: 'pnl',
            type: 'int256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'fillPrice',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint128',
            name: 'accountDebt',
            type: 'uint128',
          },
        ],
        name: 'OrderSettled',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'hook',
            type: 'address',
          },
        ],
        name: 'OrderSettlementHookExecuted',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'bytes',
            name: 'priceUpdateData',
            type: 'bytes',
          },
        ],
        name: 'cancelOrder',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'cancelStaleOrder',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'int128',
            name: 'sizeDelta',
            type: 'int128',
          },
          {
            internalType: 'uint256',
            name: 'limitPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint128',
            name: 'keeperFeeBufferUsd',
            type: 'uint128',
          },
          {
            internalType: 'address[]',
            name: 'hooks',
            type: 'address[]',
          },
        ],
        name: 'commitOrder',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'int128',
            name: 'size',
            type: 'int128',
          },
        ],
        name: 'getFillPrice',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getOraclePrice',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getOrderDigest',
        outputs: [
          {
            components: [
              {
                internalType: 'int128',
                name: 'sizeDelta',
                type: 'int128',
              },
              {
                internalType: 'uint64',
                name: 'commitmentTime',
                type: 'uint64',
              },
              {
                internalType: 'uint256',
                name: 'limitPrice',
                type: 'uint256',
              },
              {
                internalType: 'uint128',
                name: 'keeperFeeBufferUsd',
                type: 'uint128',
              },
              {
                internalType: 'address[]',
                name: 'hooks',
                type: 'address[]',
              },
              {
                internalType: 'bool',
                name: 'isStale',
                type: 'bool',
              },
              {
                internalType: 'bool',
                name: 'isReady',
                type: 'bool',
              },
            ],
            internalType: 'struct IOrderModule.OrderDigest',
            name: '',
            type: 'tuple',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'int128',
            name: 'sizeDelta',
            type: 'int128',
          },
          {
            internalType: 'uint128',
            name: 'keeperFeeBufferUsd',
            type: 'uint128',
          },
        ],
        name: 'getOrderFees',
        outputs: [
          {
            internalType: 'uint256',
            name: 'orderFee',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'keeperFee',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'bytes',
            name: 'priceUpdateData',
            type: 'bytes',
          },
        ],
        name: 'settleOrder',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'CannotLiquidateMargin',
        type: 'error',
      },
      {
        inputs: [],
        name: 'CannotLiquidatePosition',
        type: 'error',
      },
      {
        inputs: [],
        name: 'LiquidationZeroCapacity',
        type: 'error',
      },
      {
        inputs: [],
        name: 'PositionNotFlagged',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'keeperReward',
            type: 'uint256',
          },
        ],
        name: 'MarginLiquidated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'flagger',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'flagKeeperReward',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'flaggedPrice',
            type: 'uint256',
          },
        ],
        name: 'PositionFlaggedLiquidation',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            indexed: true,
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'sizeBeforeLiquidation',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'int128',
            name: 'remainingSize',
            type: 'int128',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'keeper',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'flagger',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'liqKeeperFee',
            type: 'uint256',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'liquidationPrice',
            type: 'uint256',
          },
        ],
        name: 'PositionLiquidated',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'flagPosition',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getHealthFactor',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getLiquidationFees',
        outputs: [
          {
            internalType: 'uint256',
            name: 'flagKeeperReward',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'liqKeeperFee',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
          {
            internalType: 'int128',
            name: 'sizeDelta',
            type: 'int128',
          },
        ],
        name: 'getLiquidationMarginUsd',
        outputs: [
          {
            internalType: 'uint256',
            name: 'im',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'mm',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'getRemainingLiquidatableSizeCapacity',
        outputs: [
          {
            internalType: 'uint128',
            name: 'maxLiquidatableCapacity',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'remainingCapacity',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'lastLiquidationTimestamp',
            type: 'uint128',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'isMarginLiquidatable',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'isPositionLiquidatable',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'liquidateMarginOnly',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint128',
            name: 'accountId',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'marketId',
            type: 'uint128',
          },
        ],
        name: 'liquidatePosition',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'ZeroLength',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'distributor',
            type: 'address',
          },
        ],
        name: 'RewardDistributorCreated',
        type: 'event',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'uint128',
                name: 'poolId',
                type: 'uint128',
              },
              {
                internalType: 'address[]',
                name: 'collateralTypes',
                type: 'address[]',
              },
              {
                internalType: 'string',
                name: 'name',
                type: 'string',
              },
              {
                internalType: 'address',
                name: 'token',
                type: 'address',
              },
            ],
            internalType:
              'struct IPerpRewardDistributorFactoryModule.CreatePerpRewardDistributorParameters',
            name: 'data',
            type: 'tuple',
          },
        ],
        name: 'createRewardDistributor',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'hooks',
            type: 'uint256',
          },
        ],
        name: 'SettlementHookConfigured',
        type: 'event',
      },
      {
        inputs: [],
        name: 'getSettlementHookConfiguration',
        outputs: [
          {
            components: [
              {
                internalType: 'address[]',
                name: 'whitelistedHookAddresses',
                type: 'address[]',
              },
              {
                internalType: 'uint32',
                name: 'maxHooksPerOrder',
                type: 'uint32',
              },
            ],
            internalType: 'struct ISettlementHookModule.SettlementHookConfigureParameters',
            name: '',
            type: 'tuple',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'hook',
            type: 'address',
          },
        ],
        name: 'isSettlementHookWhitelisted',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'address[]',
                name: 'whitelistedHookAddresses',
                type: 'address[]',
              },
              {
                internalType: 'uint32',
                name: 'maxHooksPerOrder',
                type: 'uint32',
              },
            ],
            internalType: 'struct ISettlementHookModule.SettlementHookConfigureParameters',
            name: 'data',
            type: 'tuple',
          },
        ],
        name: 'setSettlementHookConfiguration',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
  PerpAccountProxy: {
    address: '0xba5F6C36b3f82f823E860a9aB7fe41562D50b99a',
    abi: [
      {
        inputs: [
          {
            internalType: 'address',
            name: 'implementation',
            type: 'address',
          },
        ],
        name: 'ImplementationIsSterile',
        type: 'error',
      },
      {
        inputs: [],
        name: 'NoChange',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'contr',
            type: 'address',
          },
        ],
        name: 'NotAContract',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'NotNominated',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'Unauthorized',
        type: 'error',
      },
      {
        inputs: [],
        name: 'UpgradeSimulationFailed',
        type: 'error',
      },
      {
        inputs: [],
        name: 'ZeroAddress',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'oldOwner',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnerChanged',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnerNominated',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'self',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'implementation',
            type: 'address',
          },
        ],
        name: 'Upgraded',
        type: 'event',
      },
      {
        inputs: [],
        name: 'acceptOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getImplementation',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newNominatedOwner',
            type: 'address',
          },
        ],
        name: 'nominateNewOwner',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'nominatedOwner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'renounceNomination',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newImplementation',
            type: 'address',
          },
        ],
        name: 'simulateUpgradeTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newImplementation',
            type: 'address',
          },
        ],
        name: 'upgradeTo',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'AlreadyInitialized',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'CannotSelfApprove',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'requestedIndex',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'length',
            type: 'uint256',
          },
        ],
        name: 'IndexOverrun',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'InvalidOwner',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'string',
            name: 'parameter',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'reason',
            type: 'string',
          },
        ],
        name: 'InvalidParameter',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'addr',
            type: 'address',
          },
        ],
        name: 'InvalidTransferRecipient',
        type: 'error',
      },
      {
        inputs: [],
        name: 'OverflowUint256ToUint128',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
        ],
        name: 'TokenAlreadyMinted',
        type: 'error',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
        ],
        name: 'TokenDoesNotExist',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'approved',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'Approval',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'operator',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'bool',
            name: 'approved',
            type: 'bool',
          },
        ],
        name: 'ApprovalForAll',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'Transfer',
        type: 'event',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'approve',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'holder',
            type: 'address',
          },
        ],
        name: 'balanceOf',
        outputs: [
          {
            internalType: 'uint256',
            name: 'balance',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'burn',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'getApproved',
        outputs: [
          {
            internalType: 'address',
            name: 'operator',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'string',
            name: 'tokenName',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'tokenSymbol',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'uri',
            type: 'string',
          },
        ],
        name: 'initialize',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'holder',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'operator',
            type: 'address',
          },
        ],
        name: 'isApprovedForAll',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'isInitialized',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'mint',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'name',
        outputs: [
          {
            internalType: 'string',
            name: '',
            type: 'string',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'ownerOf',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes',
          },
        ],
        name: 'safeMint',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes',
          },
        ],
        name: 'safeTransferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'spender',
            type: 'address',
          },
        ],
        name: 'setAllowance',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'operator',
            type: 'address',
          },
          {
            internalType: 'bool',
            name: 'approved',
            type: 'bool',
          },
        ],
        name: 'setApprovalForAll',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'string',
            name: 'uri',
            type: 'string',
          },
        ],
        name: 'setBaseTokenURI',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes4',
            name: 'interfaceId',
            type: 'bytes4',
          },
        ],
        name: 'supportsInterface',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'symbol',
        outputs: [
          {
            internalType: 'string',
            name: '',
            type: 'string',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'index',
            type: 'uint256',
          },
        ],
        name: 'tokenByIndex',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'index',
            type: 'uint256',
          },
        ],
        name: 'tokenOfOwnerByIndex',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'tokenURI',
        outputs: [
          {
            internalType: 'string',
            name: '',
            type: 'string',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'totalSupply',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
        ],
        name: 'transferFrom',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
  },
} as const;
