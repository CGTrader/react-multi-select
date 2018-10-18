// @flow
/**
 * This component represents the entire panel which gets dropped down when the
 * user selects the component.  It encapsulates the search filter, the
 * Select-all item, and the list of options.
 */
import {filterOptions} from 'fuzzy-match-utils';
import React, {Component} from 'react';

import SelectItem from './select-item.js';
import SelectList from './select-list.js';

import type {Option} from './select-item.js';

type Props = {
    ItemRenderer?: Function,
    options: Array<Option>,
    selected: Array<any>,
    selectAllLabel?: string,
    onSelectedChanged: (selected: Array<any>) => void,
    disabled?: boolean,
    disableSearch?: boolean,
    hasSelectAll: boolean,
    filterOptions?: (options: Array<Option>, filter: string) => Array<Option>
};

type State = {
    searchText: string,
    focusIndex: number
};

class SelectPanel extends Component<Props, State> {
    state = {
        searchText: "",
        focusIndex: 0,
    }

    selectAll = () => {
        const {onSelectedChanged, options} = this.props;
        const allValues = options.map(o => o.value);

        onSelectedChanged(allValues);
    }

    selectNone = () => {
        const {onSelectedChanged} = this.props;

        onSelectedChanged([]);
    }

    selectAllChanged = (checked: boolean) => {
        if (checked) {
            this.selectAll();
        } else {
            this.selectNone();
        }
    }

    handleSearchChange = (e: {target: {value: any}}) => {
        this.setState({
            searchText: e.target.value,
            focusIndex: -1,
        });
    }

    handleItemClicked = (index: number) => {
        this.setState({focusIndex: index});
    }

    clearSearch = () => {
        this.setState({searchText: ""});
    }

    handleKeyDown = (e: KeyboardEvent) => {
        switch (e.which) {
            case 38: // Up Arrow
                if (e.altKey) {
                    return;
                }

                this.updateFocus(-1);
                break;
            case 40: // Down Arrow
                if (e.altKey) {
                    return;
                }

                this.updateFocus(1);
                break;
            default:
                return;
        }

        e.stopPropagation();
        e.preventDefault();
    }

    allAreSelected() {
        const {options, selected} = this.props;
        return options.length === selected.length;
    }

    filteredOptions() {
        const {searchText} = this.state;
        const {options, filterOptions: customFilterOptions} = this.props;

        return customFilterOptions ?
            customFilterOptions(options, searchText) :
            filterOptions(options, searchText);
    }

    updateFocus(offset: number) {
        const {focusIndex} = this.state;
        const {options} = this.props;

        let newFocus = focusIndex + offset;
        newFocus = Math.max(0, newFocus);
        newFocus = Math.min(newFocus, options.length);

        this.setState({focusIndex: newFocus});
    }

    render() {
        const {focusIndex} = this.state;
        const {
            ItemRenderer,
            selectAllLabel,
            disabled,
            disableSearch,
            hasSelectAll,
            selected,
            placeholder,
            options
        } = this.props;

        const selectAllOption = {
            label: selectAllLabel || "Select All",
            value: "",
        };

        return <div
            className="custom-dropdown__content"
        >
            <div
                className="custom-dropdown__header"
                onClick={() => this.props.toggleExpanded(false)}
            >
                <span
                    className="custom-dropdown__title"
                >
                    {selected.length === 0 ?
                        placeholder ? placeholder : "Select" :
                        (selected.length === options.length ? "All selected" : selected.length + ' selected')
                    }
                </span>
                <span
                    className="custom-dropdown__caret"
                >
                    <span
                        className="fas fa-caret-up is-not-spaced"
                    />
                </span>
            </div>
            <div
                className="custom-dropdown__dropdown"
                role="listbox"
                onKeyDown={this.handleKeyDown}
            >
                {!disableSearch && <div className="custom-dropdown__search">
                    <input
                        placeholder="Search"
                        type="text"
                        onChange={this.handleSearchChange}
                        className="custom-dropdown__search-input"
                    />
                </div>}

                {hasSelectAll &&
                <ul className="custom-dropdown__list">
                    <SelectItem
                        focused={focusIndex === 0}
                        checked={this.allAreSelected()}
                        option={selectAllOption}
                        onSelectionChanged={this.selectAllChanged}
                        onClick={() => this.handleItemClicked(0)}
                        ItemRenderer={ItemRenderer}
                        disabled={disabled}
                    />
                </ul>
                }

                <SelectList
                    {...this.props}
                    options={this.filteredOptions()}
                    focusIndex={focusIndex - 1}
                    onClick={(e, index) => this.handleItemClicked(index + 1)}
                    ItemRenderer={ItemRenderer}
                    disabled={disabled}
                />
            </div>
        </div>;
    }
}

export default SelectPanel;
