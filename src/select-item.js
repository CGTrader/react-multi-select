// @flow
/**
 * This component represents an individual item in the multi-select drop-down
 */
import React, {Component} from 'react';

export type Option = {
    value: any,
    label: string
};

type DefaultItemRendererProps = {
    checked: boolean,
    option: Option,
    disabled?: boolean,

    onClick: (event: MouseEvent) => void
};

class DefaultItemRenderer extends Component<DefaultItemRendererProps> {
    render() {
        const {checked, option, onClick, disabled} = this.props;

        return <div>
            <input
                type="checkbox"
                onChange={onClick}
                checked={checked}
                tabIndex="-1"
                disabled={disabled}
                className="checkbox is-spaced"
                id={option.label === 'Select All' ? 'select-all' : option.value}
            />
            <label htmlFor={option.label === 'Select All' ? 'select-all' : option.value}>
                {option.label}
            </label>
        </div>;
    }
}

type SelectItemProps = {
    ItemRenderer: Function,
    option: Option,
    checked: boolean,
    focused?: boolean,
    disabled?: boolean,
    onSelectionChanged: (checked: boolean) => void,
    onClick: (event: MouseEvent) => void
};
type SelectItemState = {
    hovered: boolean
};

class SelectItem extends Component<SelectItemProps, SelectItemState> {
    static defaultProps = {
        ItemRenderer: DefaultItemRenderer,
    }

    state = {
        hovered: false,
    }

    componentDidMount() {
        this.updateFocus();
    }

    componentDidUpdate() {
        this.updateFocus();
    }

    itemRef: ?HTMLElement

    onChecked = (e: {target: {checked: boolean}}) => {
        const {onSelectionChanged} = this.props;
        const {checked} = e.target;

        onSelectionChanged(checked);
    }

    toggleChecked = () => {
        const {checked, onSelectionChanged} = this.props;
        onSelectionChanged(!checked);
    }

    handleClick = (e: MouseEvent) => {
        const {onClick} = this.props;
        this.toggleChecked();
        onClick(e);
    }

    updateFocus() {
        const {focused} = this.props;

        if (focused && this.itemRef) {
            this.itemRef.focus();
        }
    }

    handleKeyDown = (e: KeyboardEvent) => {
        switch (e.which) {
            case 13: // Enter
            case 32: // Space
                this.toggleChecked();
                break;
            default:
                return;
        }

        e.preventDefault();
    }

    render() {
        const {ItemRenderer, option, checked, focused, disabled} = this.props;
        const {hovered} = this.state;

        return <li
            role="option"
            aria-selected={checked}
            selected={checked}
            tabIndex="-1"
            ref={ref => this.itemRef = ref}
            onKeyDown={this.handleKeyDown}
            onMouseOver={() => this.setState({hovered: true})}
            onMouseOut={() => this.setState({hovered: false})}
        >
            <ItemRenderer
                option={option}
                checked={checked}
                onClick={this.handleClick}
                disabled={disabled}
            />
        </li>;
    }
}

export default SelectItem;
