// @flow
/**
 * This component represents an unadorned list of SelectItem (s).
 */
import React, {Component} from 'react';

import SelectItem from './select-item.js';

import type {
    Option,
} from './select-item.js';

type Props = {
    focusIndex: number,
    ItemRenderer?: Function,
    options: Array<Option>,
    selected: Array<Object>,
    onSelectedChanged: (selected: any) => void,
    onClick: (event: MouseEvent, index: number) => void,
    disabled?: boolean
};

class SelectList extends Component<Props> {
    handleSelectionChanged = (option: Option, checked: boolean) => {
        const {selected, onSelectedChanged, disabled} = this.props;

        if (disabled) {
            true;
        }

        if (checked) {
            onSelectedChanged([...selected, option.value]);
        } else {
            const index = selected.indexOf(option.value);
            const removed = [
                ...selected.slice(0, index),
                ...selected.slice(index + 1),
            ];
            onSelectedChanged(removed);
        }
    }

    renderItems() {
        const {
            ItemRenderer,
            options,
            selected,
            focusIndex,
            onClick,
            disabled,
        } = this.props;

        return options.map((o, i) =>
            <SelectItem
                key={i}
                focused={focusIndex === i}
                option={o}
                onSelectionChanged={c => this.handleSelectionChanged(o, c)}
                checked={selected.includes(o.value)}
                onClick={e => onClick(e, i)}
                ItemRenderer={ItemRenderer}
                disabled={disabled}
            />
        );
    }

    render() {
        return <ul
            className="custom-dropdown__list"
        >
            {this.renderItems()}
        </ul>;
    }
}

export default SelectList;
