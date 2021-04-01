import { Provider, ProviderState } from "../../state/State";

export interface NavBarProps {
    hasRounter: boolean, 
    provider: ProviderState, 
    onSelect: (provider: Provider) => void
}