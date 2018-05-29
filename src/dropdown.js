// @flow
/**
 * A generic dropdown component.  It takes the children of the component
 * and hosts it in the component.  When the component is selected, it
 * drops-down the contentComponent and applies the contentProps.
 */
import React, {Component} from 'react';

import LoadingIndicator from './loading-indicator.js';

type Props = {
    children?: Object,
    contentComponent: Object,
    contentProps: Object,
    isLoading?: boolean,
    disabled?: boolean,
    shouldToggleOnHover?: boolean
};

type State = {
    expanded: boolean,
    hasFocus: boolean
};

class Dropdown extends Component<Props, State> {
    state = {
        expanded: false,
        hasFocus: false,
    }

    componentWillUpdate() {
        document.addEventListener('touchstart', this.handleDocumentClick);
        document.addEventListener('mousedown', this.handleDocumentClick);
    }

    componentWillUnmount() {
        document.removeEventListener('touchstart', this.handleDocumentClick);
        document.removeEventListener('mousedown', this.handleDocumentClick);
    }

    wrapper: ?Object

    handleDocumentClick = (event: Event) => {
        if (this.wrapper && !this.wrapper.contains(event.target)) {
            this.setState({expanded: false});
        }
    }

    handleKeyDown = (e: KeyboardEvent) => {
        switch (e.which) {
            case 27: // Escape
                this.toggleExpanded(false);
                break;
            case 38: // Up Arrow
                this.toggleExpanded(false);
                break;
            case 40: // Down Arrow
                this.toggleExpanded(true);
                break;
            default:
                return;
        }

        e.preventDefault();
    }

    handleFocus = (e: {target: any}) => {
        const {hasFocus} = this.state;

        if (e.target === this.wrapper && !hasFocus) {
            this.setState({hasFocus: true});
        }
    }

    handleBlur = (e: {target: any}) => {
        const {hasFocus} = this.state;

        if (hasFocus) {
            this.setState({hasFocus: false});
        }
    }

    handleMouseEnter = (e: {target: any}) => {
        this.handleHover(true);
    }

    handleMouseLeave = (e: {target: any}) => {
        this.handleHover(false);
    }

    handleHover = (toggleExpanded: boolean) => {
        const {shouldToggleOnHover} = this.props;

        if (shouldToggleOnHover) {
            this.toggleExpanded(toggleExpanded);
        }
    }

    toggleExpanded = (value: ?boolean) => {
        const {isLoading} = this.props;
        const {expanded} = this.state;

        if (isLoading) {
            return;
        }

        const newExpanded = value === undefined ? !expanded : !!value;

        this.setState({expanded: newExpanded});

        if (!newExpanded && this.wrapper) {
            this.wrapper.focus();
        }
    }

    renderPanel() {
        const {contentComponent: ContentComponent, contentProps} = this.props;

        return <ContentComponent {...contentProps} toggleExpanded={this.toggleExpanded} />;
    }

    render() {
        const {expanded, hasFocus} = this.state;
        const {children, isLoading, disabled} = this.props;

        return <div
            className={`custom-dropdown--multi ${ disabled ? 'is-disabled' : '' }`}
            tabIndex="0"
            role="combobox"
            aria-expanded={expanded}
            aria-readonly="true"
            aria-disabled={disabled}
            ref={ref => this.wrapper = ref}
            onKeyDown={this.handleKeyDown}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
        >
            <div
                className="custom-dropdown__header"
                onClick={this.toggleExpanded}
            >
                <span
                    className="custom-dropdown__title"
                >
                    {children}
                </span>
                <span
                    className="custom-dropdown__loader"
                >
                    {isLoading && <LoadingIndicator />}
                </span>
                <span
                    className="custom-dropdown__caret"
                >
                    <span
                        className="fas fa-caret-down is-not-spaced"
                    />
                </span>
            </div>
            {expanded && !disabled && this.renderPanel()}
        </div>;
    }
}

export default Dropdown;
