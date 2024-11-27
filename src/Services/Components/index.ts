import { Component } from '../../TraumaIndicator/ValueObjects';
import { ComponentBuilder } from './ComponentBuilder'; 

const args = process.argv;

function call() {
    const argDict = JSON.parse(args[args.length - 1]) as Record<string, string>;
    const component = Component.fromDisplayName(argDict.component);
    const entity = argDict.entity;
    const action = argDict.action;

    ComponentBuilder.create(component, entity, action);
}
call();